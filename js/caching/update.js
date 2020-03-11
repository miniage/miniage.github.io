const cacheName = "miniage";

async function update() {
  if ('caches' in window) {
    await caches.delete(cacheName);
    let cache = await window.caches.open(cacheName);
    window.location.reload();
  } else {
    alert("Your browser doesn't support updating...");
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/worker.js').then(function(registration) {
      // Registration was successful
      alert('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      alert('ServiceWorker registration failed');
      alert(err);
    });
  });
}
