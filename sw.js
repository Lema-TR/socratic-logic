// Socratic Logic Reader - Service Worker (sw.js)
// Enables full offline reading, caching of high-res images, scripts, and styles

const CACHE_NAME = 'socratic-logic-v1.0';

const APP_SHELL = [
  './',
  './socratic_logic.html',
  './socratic_styles.css',
  './socratic_app.js',
  './data_socratic.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-64.png'
];

// Pre-cache batch 1 to 5 images for instant offline reading
for (let i = 1; i <= 50; i++) {
  APP_SHELL.push(`./images/socratic/page_${i}.webp`);
}

// Install Event - Pre-cache core assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching App Shell & Pages 1–50...');
      // Use catch for each to prevent one failure from blocking installation
      return Promise.allSettled(
        APP_SHELL.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('[Service Worker] Failed to pre-cache:', url, err);
          })
        )
      );
    })
  );
});

// Activate Event - Clean up outdated caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Cache First with Network Fallback & Runtime Caching
self.addEventListener('fetch', (event) => {
  const req = event.request;
  
  // Skip non-GET or cross-origin scheme requests (like chrome-extension://)
  if (req.method !== 'GET' || !req.url.startsWith('http')) return;

  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached version immediately
        // Also fetch from network in background for non-static files to keep fresh
        if (!req.url.includes('.webp') && !req.url.includes('.png')) {
          fetch(req)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(req, networkResponse.clone());
                });
              }
            })
            .catch(() => {/* Ignore offline background fetch error */});
        }
        return cachedResponse;
      }

      // If not in cache, fetch from network and cache for offline
      return fetch(req)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseToCache);
          });
          return networkResponse;
        })
        .catch(() => {
          // If completely offline and HTML is requested, return cached socratic_logic.html
          if (req.headers.get('accept') && req.headers.get('accept').includes('text/html')) {
            return caches.match('./socratic_logic.html');
          }
        });
    })
  );
});
