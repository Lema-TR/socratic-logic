// Maus Dual-Language Reader - Main Application Logic

document.addEventListener('DOMContentLoaded', () => {
  // State management
  const state = {
    theme: localStorage.getItem('maus_theme') || 'dark',
    viewMode: localStorage.getItem('maus_view_mode') || 'comic',
    langFilter: localStorage.getItem('maus_lang_filter') || 'both',
    fontSize: parseInt(localStorage.getItem('maus_font_size') || '16', 10),
    activeBatch: localStorage.getItem('maus_active_batch') || 'batch_5',
    activePage: parseInt(localStorage.getItem('maus_bookmark_page') || '41', 10),
    searchQuery: '',
    speakingId: null
  };

  // DOM Elements
  const body = document.body;
  const readerContent = document.getElementById('reader-content');
  const pageNavigator = document.getElementById('page-navigator');
  const searchInput = document.getElementById('search-input');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const progressText = document.getElementById('reading-progress');
  const prevBtn = document.getElementById('prev-page-btn');
  const nextBtn = document.getElementById('next-page-btn');

  // Initialize UI with settings
  applyTheme(state.theme);
  applyViewMode(state.viewMode);
  applyLangFilter(state.langFilter);
  applyFontSize(state.fontSize);
  applyBatch(state.activeBatch, false);

  // Render Page Navigator Pills
  renderPageNavigator();

  // Render Book Pages Content
  renderBookPages();

  // Setup Event Listeners
  setupEventListeners();

  // Set initial scroll or restore bookmark
  restoreBookmark();

  // -------------------------------------------------------------
  // Rendering Functions
  // -------------------------------------------------------------
  function renderPageNavigator() {
    pageNavigator.innerHTML = '';
    
    // Filter pages based on active batch if batch is not 'all'
    let visiblePages = bookData.pages;
    const batch = bookData.batches.find(b => b.id === state.activeBatch);
    if (batch && batch.pageRange) {
      visiblePages = bookData.pages.filter(p => p.pageNumber >= batch.pageRange[0] && p.pageNumber <= batch.pageRange[1]);
    }

    visiblePages.forEach(page => {
      const pill = document.createElement('a');
      pill.className = `page-pill ${page.pageNumber === state.activePage ? 'active' : ''}`;
      pill.href = `#page-${page.pageNumber}`;
      pill.textContent = page.pageNumber;
      pill.title = `${page.bookPageLabel} (${page.amharicLabel})`;
      pill.dataset.page = page.pageNumber;
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToPage(page.pageNumber);
      });
      pageNavigator.appendChild(pill);
    });
  }

  function renderBookPages() {
    readerContent.innerHTML = '';

    bookData.pages.forEach(page => {
      const pageSection = document.createElement('section');
      pageSection.className = 'book-page-section';
      pageSection.id = `page-${page.pageNumber}`;
      pageSection.dataset.page = page.pageNumber;

      // Header Banner
      const headerBanner = document.createElement('div');
      headerBanner.className = 'page-header-banner';
      headerBanner.innerHTML = `
        <div class="page-header-info">
          <span class="page-tag">Page ${page.pageNumber}</span>
          <span class="page-title-en">${escapeHtml(page.bookPageLabel)}</span>
          <span class="page-title-am">| ${escapeHtml(page.amharicLabel)}</span>
        </div>
        <div class="page-actions">
          <button class="btn btn-icon view-img-btn" data-img="${page.image}" title="View Full Page Image">
            🔍 Zoom Comic
          </button>
        </div>
      `;

      // Summary Box
      const summaryBox = document.createElement('div');
      summaryBox.className = 'page-summary-box';
      summaryBox.innerHTML = `
        <p class="english-text"><strong>Overview:</strong> ${escapeHtml(page.summaryEn)}</p>
        <p class="amharic-text"><strong>ማጠቃለያ፡</strong> ${escapeHtml(page.summaryAm)}</p>
      `;

      // Content Grid (Image on left + dialogues on right)
      const contentGrid = document.createElement('div');
      contentGrid.className = 'page-content-grid';

      // Comic image column
      const imgWrapper = document.createElement('div');
      imgWrapper.className = 'comic-visual-wrapper';
      imgWrapper.innerHTML = `
        <img class="comic-visual-img" src="${page.image}" alt="Maus Page ${page.pageNumber}" loading="lazy" data-zoom="${page.image}">
      `;
      imgWrapper.querySelector('img').addEventListener('click', () => {
        openLightbox(page.image);
      });

      // Dialogues column
      const dialoguesWrapper = document.createElement('div');
      dialoguesWrapper.className = 'dialogues-wrapper';

      page.panels.forEach((panel, pIdx) => {
        const card = document.createElement('div');
        card.className = `dialogue-card role-${panel.role}`;
        card.id = panel.id;

        // Card header
        const cardMeta = document.createElement('div');
        cardMeta.className = 'card-meta';
        cardMeta.innerHTML = `
          <div class="card-speaker">
            <span>🗣 ${escapeHtml(panel.speaker)}</span>
            <span class="card-speaker-am">(${escapeHtml(panel.speakerAm)})</span>
          </div>
          <div class="card-actions">
            <button class="mini-btn tts-btn" data-text="${encodeURIComponent(panel.en)}" title="Listen to English speech">🔊</button>
            <button class="mini-btn copy-btn" data-copy="${encodeURIComponent(panel.en + '\n' + panel.am)}" title="Copy Bilingual text">📋</button>
          </div>
        `;

        // Card Texts
        const textContainer = document.createElement('div');
        textContainer.className = 'card-text-container';
        textContainer.innerHTML = `
          <div class="english-text">${highlightQuery(escapeHtml(panel.en), state.searchQuery)}</div>
          <div class="amharic-text">${highlightQuery(escapeHtml(panel.am), state.searchQuery)}</div>
        `;

        card.appendChild(cardMeta);
        card.appendChild(textContainer);

        // Historical / Contextual Footnote if available
        if (panel.notes) {
          const notes = document.createElement('div');
          notes.className = 'card-notes';
          notes.innerHTML = `💡 <em>Note:</em> ${escapeHtml(panel.notes)}`;
          card.appendChild(notes);
        }

        dialoguesWrapper.appendChild(card);
      });

      contentGrid.appendChild(imgWrapper);
      contentGrid.appendChild(dialoguesWrapper);

      pageSection.appendChild(headerBanner);
      pageSection.appendChild(summaryBox);
      pageSection.appendChild(contentGrid);

      readerContent.appendChild(pageSection);
    });

    // Attach TTS and Copy listeners
    attachCardListeners();
  }

  function attachCardListeners() {
    // Zoom buttons
    document.querySelectorAll('.view-img-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const imgSrc = btn.dataset.img;
        openLightbox(imgSrc);
      });
    });

    // TTS buttons
    document.querySelectorAll('.tts-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = decodeURIComponent(btn.dataset.text);
        speakText(text, btn);
      });
    });

    // Copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const content = decodeURIComponent(btn.dataset.copy);
        navigator.clipboard.writeText(content).then(() => {
          const orig = btn.textContent;
          btn.textContent = '✓';
          setTimeout(() => btn.textContent = orig, 1500);
        });
      });
    });
  }

  // -------------------------------------------------------------
  // Search & Highlights
  // -------------------------------------------------------------
  function highlightQuery(text, query) {
    if (!query || query.trim() === '') return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return text.replace(regex, '<mark style="background: rgba(245,158,11,0.4); color: inherit; padding: 0 2px; border-radius: 2px;">$1</mark>');
  }

  // -------------------------------------------------------------
  // Lightbox Modal
  // -------------------------------------------------------------
  function openLightbox(src) {
    lightboxImg.src = src;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  // -------------------------------------------------------------
  // Theme & Layout Handlers
  // -------------------------------------------------------------
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('maus_theme', theme);
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.themeBtn === theme);
    });
  }

  function applyViewMode(mode) {
    state.viewMode = mode;
    body.classList.remove('view-mode-comic', 'view-mode-parallel');
    body.classList.add(`view-mode-${mode}`);
    localStorage.setItem('maus_view_mode', mode);
    document.querySelectorAll('[data-mode-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.modeBtn === mode);
    });
  }

  function applyLangFilter(filter) {
    state.langFilter = filter;
    body.classList.remove('hide-english', 'hide-amharic');
    if (filter === 'amharic-only') body.classList.add('hide-english');
    if (filter === 'english-only') body.classList.add('hide-amharic');
    localStorage.setItem('maus_lang_filter', filter);
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.langBtn === filter);
    });
  }

  function applyFontSize(size) {
    state.fontSize = size;
    document.documentElement.style.setProperty('--reader-font-size', `${size}px`);
    localStorage.setItem('maus_font_size', size);
  }

  function applyBatch(batchId, scroll = true) {
    state.activeBatch = batchId;
    localStorage.setItem('maus_active_batch', batchId);
    document.querySelectorAll('[data-batch-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.batchBtn === batchId);
    });
    renderPageNavigator();
    if (scroll) {
      const batch = bookData.batches.find(b => b.id === batchId);
      if (batch && batch.pageRange) {
        scrollToPage(batch.pageRange[0]);
      } else if (batchId === 'all') {
        scrollToPage(1);
      }
    }
  }

  // -------------------------------------------------------------
  // Navigation & Scroll Tracking
  // -------------------------------------------------------------
  function scrollToPage(pageNum) {
    const el = document.getElementById(`page-${pageNum}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      state.activePage = pageNum;
      updateActivePill(pageNum);
      saveBookmark(pageNum);
    }
  }

  function updateActivePill(pageNum) {
    document.querySelectorAll('.page-pill').forEach(pill => {
      pill.classList.toggle('active', parseInt(pill.dataset.page, 10) === pageNum);
    });
    progressText.textContent = `Page ${pageNum} of ${bookData.pages.length}`;
  }

  function saveBookmark(pageNum) {
    localStorage.setItem('maus_bookmark_page', pageNum);
  }

  function restoreBookmark() {
    const saved = localStorage.getItem('maus_bookmark_page');
    if (saved) {
      const pageNum = parseInt(saved, 10);
      if (pageNum && pageNum >= 1 && pageNum <= bookData.pages.length) {
        state.activePage = pageNum;
        updateActivePill(pageNum);
      }
    }
  }

  // -------------------------------------------------------------
  // Text to Speech
  // -------------------------------------------------------------
  function speakText(text, btn) {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in your browser.');
      return;
    }

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      if (state.speakingBtn) state.speakingBtn.textContent = '🔊';
      if (state.speakingBtn === btn) {
        state.speakingBtn = null;
        return;
      }
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.lang = 'en-US';

    btn.textContent = '⏹';
    state.speakingBtn = btn;

    utterance.onend = () => {
      btn.textContent = '🔊';
      state.speakingBtn = null;
    };
    utterance.onerror = () => {
      btn.textContent = '🔊';
      state.speakingBtn = null;
    };

    window.speechSynthesis.speak(utterance);
  }

  // -------------------------------------------------------------
  // Event Listeners Setup
  // -------------------------------------------------------------
  function setupEventListeners() {
    // Batch buttons
    document.querySelectorAll('[data-batch-btn]').forEach(btn => {
      btn.addEventListener('click', () => applyBatch(btn.dataset.batchBtn, true));
    });

    // Theme buttons
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      btn.addEventListener('click', () => applyTheme(btn.dataset.themeBtn));
    });

    // View mode buttons
    document.querySelectorAll('[data-mode-btn]').forEach(btn => {
      btn.addEventListener('click', () => applyViewMode(btn.dataset.modeBtn));
    });

    // Lang buttons
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.addEventListener('click', () => applyLangFilter(btn.dataset.langBtn));
    });

    // Font size controls
    document.getElementById('font-increase').addEventListener('click', () => {
      if (state.fontSize < 24) applyFontSize(state.fontSize + 2);
    });
    document.getElementById('font-decrease').addEventListener('click', () => {
      if (state.fontSize > 12) applyFontSize(state.fontSize - 2);
    });

    // Search input
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        state.searchQuery = e.target.value.trim();
        renderBookPages();
      }, 250);
    });

    // Floating Prev / Next Page buttons
    prevBtn.addEventListener('click', () => {
      if (state.activePage > 1) {
        scrollToPage(state.activePage - 1);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (state.activePage < bookData.pages.length) {
        scrollToPage(state.activePage + 1);
      }
    });

    // Scroll listener for reading progress & active page highlight
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const pageNum = parseInt(entry.target.dataset.page, 10);
          if (pageNum) {
            state.activePage = pageNum;
            updateActivePill(pageNum);
            saveBookmark(pageNum);
          }
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 });

    document.querySelectorAll('.book-page-section').forEach(section => {
      observer.observe(section);
    });

    // Keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (state.activePage < bookData.pages.length) {
          e.preventDefault();
          scrollToPage(state.activePage + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (state.activePage > 1) {
          e.preventDefault();
          scrollToPage(state.activePage - 1);
        }
      } else if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key.toLowerCase() === 't') {
        const themes = ['dark', 'sepia', 'light'];
        const nextIdx = (themes.indexOf(state.theme) + 1) % themes.length;
        applyTheme(themes[nextIdx]);
      } else if (e.key.toLowerCase() === 'm') {
        applyViewMode(state.viewMode === 'comic' ? 'parallel' : 'comic');
      }
    });
  }

  function escapeHtml(string) {
    if (!string) return '';
    return String(string)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
