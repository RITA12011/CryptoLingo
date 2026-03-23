const CACHE_NAME = 'cryptolingo-v3';
const ASSETS = [
    '/',
    '/index.html',
    '/daily.html',
    '/dialog.html',
    '/vocabulary.html',
    '/wordbook.html',
    '/dashboard.html',
    '/about.html',
    '/login.html',
    '/style.css',
    '/data.js',
    '/app.js',
    '/auth.js',
    '/dialog-data.js'
];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
        ))
    );
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request)
            .then(res => {
                const clone = res.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
                return res;
            })
            .catch(() => caches.match(e.request))
    );
});
