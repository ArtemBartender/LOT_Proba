const CACHE_NAME = 'menu-lot-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './cocktails.js',
  './manifest.json',
  // Если эти файлы у вас действительно есть – оставьте, иначе можно закомментировать/удалить
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/favicon.ico'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache =>
        cache.addAll(ASSETS)
          .catch(err => {
            console.warn('ServiceWorker: некоторые ресурсы не закэшировались:', err);
            // Для гарантии возвращаем промис, чтобы установка не зависла:
            return Promise.resolve();
          })
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(resp => resp || fetch(event.request))
  );
});
