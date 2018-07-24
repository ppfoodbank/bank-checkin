var cacheName = 'pmfb-checkin-v1';
var filesToCache = [
  '/',
  '/index.html',
  '/checkin.html',
  '/scripts/app.js',
  '/styles/inline.css',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e)
{
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch ', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

self.addEventListener("message", function(e) {
  console.log('[Service Worker] Message ', e.id, e.session);
  //TODO: caching logic
});
