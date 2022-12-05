import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './icons/android-icon-72x72.png',
  './icons/android-icon-96x96.png',
  './icons/apple-icon-120x120.png',
  './icons/apple-icon-144x144.png',
  './icons/apple-icon-152x152.png',
  './icons/android-icon-192x192.png',
  './icons/ms-icon-310x310.png',
  './index.html',
  './favicon.ico',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
  './images/heros/hero-image_2.jpg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
