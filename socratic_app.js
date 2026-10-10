// Socratic Logic Dual-Language Reader - Main Application Logic

document.addEventListener('DOMContentLoaded', () => {
  // State management
  const state = {
    theme: localStorage.getItem('socratic_theme') || 'dark',
    viewMode: localStorage.getItem('socratic_view_mode') || 'facsimile',
    langFilter: localStorage.getItem('socratic_lang_filter') || 'both',
    fontSize: parseInt(localStorage.getItem('socratic_font_size') || '16', 10),
    activeBatch: localStorage.getItem('socratic_active_batch') || 'batch_5',
    activePage: parseInt(localStorage.getItem('socratic_bookmark_page') || '41', 10),
    searchQuery: '',
    speakingBtn: null
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
  const batchDropdown = document.getElementById('batch-dropdown');

  // Verify book data loaded
  if (typeof socraticBookData === 'undefined') {
    console.error('socraticBookData not found! Make sure data_socratic.js is loaded.');
    readerContent.innerHTML = '<div style="padding: 40px; text-align: center; color: red;"><h3>Error: Book data not loaded.</h3></div>';
    return;
  }

  // Initialize UI with settings
  applyTheme(state.theme);
  applyViewMode(state.viewMode);
  applyLangFilter(state.langFilter);
  applyFontSize(state.fontSize);
  renderBatchDropdown();
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

    let visiblePages = socraticBookData.pages;
    const batch = socraticBookData.batches.find(b => b.id === state.activeBatch);
    if (batch && batch.pageRange) {
      visiblePages = socraticBookData.pages.filter(p => p.pageNumber >= batch.pageRange[0] && p.pageNumber <= batch.pageRange[1]);
    }

    visiblePages.forEach(page => {
      const pill = document.createElement('a');
      pill.className = `page-pill ${page.pageNumber === state.activePage ? 'active' : ''}`;
      pill.href = `#page-${page.pageNumber}`;
      pill.textContent = page.pageNumber;
      pill.title = `Page ${page.pageNumber}: ${page.bookPageLabel} (${page.amharicLabel})`;
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

    socraticBookData.pages.forEach(page => {
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
          <button class="btn btn-icon view-img-btn" data-img="${page.image}" title="View High-Resolution Original Facsimile">
            🔍 Zoom Facsimile
          </button>
        </div>
      `;

      // Summary Box
      const summaryBox = document.createElement('div');
      summaryBox.className = 'page-summary-box';
      summaryBox.innerHTML = `
        <p class="english-text"><strong>Overview:</strong> ${highlightQuery(escapeHtml(page.summaryEn), state.searchQuery)}</p>
        <p class="amharic-text"><strong>ማጠቃለያ፡</strong> ${highlightQuery(escapeHtml(page.summaryAm), state.searchQuery)}</p>
      `;

      // Content Grid (Facsimile scan on left + bilingual texts on right)
      const contentGrid = document.createElement('div');
      contentGrid.className = 'page-content-grid';

      // Visual Facsimile Column
      const visualWrapper = document.createElement('div');
      visualWrapper.className = 'visual-wrapper';
      visualWrapper.innerHTML = `
        <img class="visual-img" src="${page.image}" alt="Socratic Logic Page ${page.pageNumber}" loading="lazy" data-zoom="${page.image}">
        <div class="visual-caption">Original Page ${page.pageNumber} Facsimile (Click to enlarge)</div>
      `;
      visualWrapper.querySelector('img').addEventListener('click', () => {
        openLightbox(page.image);
      });

      // Dialogues / Paragraphs Column
      const dialoguesWrapper = document.createElement('div');
      dialoguesWrapper.className = 'dialogues-wrapper';

      page.panels.forEach((panel) => {
        const card = document.createElement('div');
        card.className = `dialogue-card role-${panel.role || 'prose'}`;
        card.id = panel.id;

        // Card header
        const cardMeta = document.createElement('div');
        cardMeta.className = 'card-meta';
        cardMeta.innerHTML = `
          <div class="card-speaker">
            <span>🏛️ ${escapeHtml(panel.speaker)}</span>
            <span class="card-speaker-am">(${escapeHtml(panel.speakerAm)})</span>
          </div>
          <div class="card-actions">
            <button class="mini-btn tts-btn" data-text="${encodeURIComponent(panel.en)}" title="Listen to English speech">🔊</button>
            <button class="mini-btn copy-btn" data-copy="${encodeURIComponent(panel.en + '\n\n' + panel.am)}" title="Copy Bilingual text">📋</button>
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

        // Contextual Footnotes / Insights if present
        if (panel.notes) {
          const notes = document.createElement('div');
          notes.className = 'card-notes';
          notes.innerHTML = `💡 <em>Philosophical Note:</em> ${highlightQuery(escapeHtml(panel.notes), state.searchQuery)}`;
          card.appendChild(notes);
        }

        dialoguesWrapper.appendChild(card);
      });

      contentGrid.appendChild(visualWrapper);
      contentGrid.appendChild(dialoguesWrapper);

      pageSection.appendChild(headerBanner);
      pageSection.appendChild(summaryBox);
      pageSection.appendChild(contentGrid);

      readerContent.appendChild(pageSection);
    });

    // Attach card listeners (TTS, copy, zoom)
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
    return text.replace(regex, '<mark style="background: rgba(245,158,11,0.45); color: inherit; padding: 0 3px; border-radius: 3px;">$1</mark>');
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
    localStorage.setItem('socratic_theme', theme);
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.themeBtn === theme);
    });
  }

  function applyViewMode(mode) {
    state.viewMode = mode;
    body.classList.remove('view-mode-facsimile', 'view-mode-parallel', 'view-mode-flow');
    body.classList.add(`view-mode-${mode}`);
    localStorage.setItem('socratic_view_mode', mode);
    document.querySelectorAll('[data-mode-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.modeBtn === mode);
    });
  }

  function applyLangFilter(filter) {
    state.langFilter = filter;
    body.classList.remove('hide-english', 'hide-amharic');
    if (filter === 'amharic-only') body.classList.add('hide-english');
    if (filter === 'english-only') body.classList.add('hide-amharic');
    localStorage.setItem('socratic_lang_filter', filter);
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.langBtn === filter);
    });
  }

  function applyFontSize(size) {
    state.fontSize = size;
    document.documentElement.style.setProperty('--reader-font-size', `${size}px`);
    localStorage.setItem('socratic_font_size', size);
  }

  function renderBatchDropdown() {
    if (!batchDropdown) return;
    batchDropdown.innerHTML = '';

    const allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = `📚 All Batches (Pages 1–${socraticBookData.pages.length})`;
    if (state.activeBatch === 'all') allOpt.selected = true;
    batchDropdown.appendChild(allOpt);

    socraticBookData.batches.forEach(b => {
      const opt = document.createElement('option');
      opt.value = b.id;
      opt.textContent = `${b.title} (pp. ${b.pageRange[0]}–${b.pageRange[1]})`;
      if (b.id === state.activeBatch) opt.selected = true;
      batchDropdown.appendChild(opt);
    });

    batchDropdown.addEventListener('change', (e) => {
      applyBatch(e.target.value, true);
    });
  }

  function applyBatch(batchId, scroll = true) {
    state.activeBatch = batchId;
    localStorage.setItem('socratic_active_batch', batchId);
    if (batchDropdown && batchDropdown.value !== batchId) {
      batchDropdown.value = batchId;
    }
    document.querySelectorAll('[data-batch-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.batchBtn === batchId);
    });
    renderPageNavigator();
    if (scroll) {
      const batch = socraticBookData.batches.find(b => b.id === batchId);
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
    progressText.textContent = `Page ${pageNum} of ${socraticBookData.pages.length}`;
  }

  function saveBookmark(pageNum) {
    localStorage.setItem('socratic_bookmark_page', pageNum);
  }

  function restoreBookmark() {
    const saved = localStorage.getItem('socratic_bookmark_page');
    if (saved) {
      const pageNum = parseInt(saved, 10);
      if (pageNum && pageNum >= 1 && pageNum <= socraticBookData.pages.length) {
        state.activePage = pageNum;
      }
    }
    updateActivePill(state.activePage);
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

    const cleanText = text.replace(/•/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = 0.95;

    btn.textContent = '⏹️';
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
    // Mode Buttons
    document.querySelectorAll('[data-mode-btn]').forEach(btn => {
      btn.addEventListener('click', () => applyViewMode(btn.dataset.modeBtn));
    });

    // Language Filter Buttons
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.addEventListener('click', () => applyLangFilter(btn.dataset.langBtn));
    });

    // Theme Buttons
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      btn.addEventListener('click', () => applyTheme(btn.dataset.themeBtn));
    });

    // Font Size
    const fontInc = document.getElementById('font-increase');
    const fontDec = document.getElementById('font-decrease');
    if (fontInc) {
      fontInc.addEventListener('click', () => {
        if (state.fontSize < 28) applyFontSize(state.fontSize + 1.5);
      });
    }
    if (fontDec) {
      fontDec.addEventListener('click', () => {
        if (state.fontSize > 13) applyFontSize(state.fontSize - 1.5);
      });
    }

    // Batch Selector
    document.querySelectorAll('[data-batch-btn]').forEach(btn => {
      btn.addEventListener('click', () => applyBatch(btn.dataset.batchBtn, true));
    });

    // Search Input with debounce
    let debounceTimer;
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          state.searchQuery = e.target.value.trim();
          renderBookPages();
        }, 300);
      });
    }

    // Floating Bottom Prev/Next Buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (state.activePage > 1) {
          scrollToPage(state.activePage - 1);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (state.activePage < socraticBookData.pages.length) {
          scrollToPage(state.activePage + 1);
        }
      });
    }

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (document.activeElement === searchInput) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (state.activePage < socraticBookData.pages.length) {
          scrollToPage(state.activePage + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (state.activePage > 1) {
          scrollToPage(state.activePage - 1);
        }
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    });

    // ScrollSpy to update active pill on scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const sections = document.querySelectorAll('.book-page-section');
        const scrollPos = window.scrollY + 180;

        sections.forEach(section => {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            const pageNum = parseInt(section.dataset.page, 10);
            if (state.activePage !== pageNum) {
              state.activePage = pageNum;
              updateActivePill(pageNum);
              saveBookmark(pageNum);
            }
          }
        });
      }, 100);
    });
    // Mobile Controls Toggle
    const mobileToggle = document.getElementById('mobile-controls-toggle');
    const appHeader = document.getElementById('app-header');
    if (mobileToggle && appHeader) {
      mobileToggle.addEventListener('click', () => {
        appHeader.classList.toggle('controls-collapsed');
        mobileToggle.textContent = appHeader.classList.contains('controls-collapsed') ? '📖' : '⚙️';
      });
    }

    // Touch Swipe Gestures for Mobile Reading
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      // Trigger if horizontal swipe is > 65px and distinctly horizontal
      if (Math.abs(deltaX) > 65 && Math.abs(deltaX) > Math.abs(deltaY) * 1.6) {
        if (deltaX < 0) {
          // Swiped left -> Next page
          if (state.activePage < socraticBookData.pages.length) {
            scrollToPage(state.activePage + 1);
          }
        } else {
          // Swiped right -> Prev page
          if (state.activePage > 1) {
            scrollToPage(state.activePage - 1);
          }
        }
      }
    }
  }

  // -------------------------------------------------------------
  // PWA Service Worker & Install Prompt
  // -------------------------------------------------------------
  let deferredPrompt = null;
  const pwaInstallBtn = document.getElementById('pwa-install-btn');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (pwaInstallBtn) {
      pwaInstallBtn.style.display = 'inline-flex';
    }
  });

  if (pwaInstallBtn) {
    pwaInstallBtn.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        pwaInstallBtn.style.display = 'none';
      }
      deferredPrompt = null;
    });
  }

  window.addEventListener('appinstalled', () => {
    if (pwaInstallBtn) pwaInstallBtn.style.display = 'none';
    console.log('[PWA] Socratic Logic App was successfully installed!');
  });

  // Register Service Worker for Offline Functionality
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then((reg) => console.log('[PWA] Service Worker active, scope:', reg.scope))
        .catch((err) => console.warn('[PWA] Service Worker registration failed:', err));
    });
  }

  // Helper function to escape HTML
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
