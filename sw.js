const CACHE_NAME = 'menu-lot-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './cocktails.js',
  './manifest.json',
  // иконки, если они есть в проекте
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/favicon.ico'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache =>
        cache.addAll(ASSETS).catch(err => {
          console.warn('ServiceWorker: некоторые ресурсы не закэшировались:', err);
          return Promise.resolve();
        })
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  // сразу брать управление над страницами
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // 1) ВСЕ POST-запросы или любые запросы к formspree.io — минуем кеш:
  if (request.method !== 'GET' || url.hostname === 'formspree.io') {
    return event.respondWith(fetch(request));
  }

  // 2) Всё остальное — кеш-первый (cache-first):
  event.respondWith(
    caches.match(request)
      .then(cached => cached || fetch(request))
  );
});
