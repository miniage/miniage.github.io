const cacheName = "miniage";
const toCache = ["/"]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(toCache);
    });
  );
});
  
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200) {
          return response;
        }
        
        let cachedResponse = response.clone();
        
        caches.open(cacheName).then(cache => {
          cache.put(event.request, cachedResponse);
        }

        return response;
      });
    });
  )
});
