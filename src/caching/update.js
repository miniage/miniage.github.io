const cacheName = "miniage";

async function Update() {
  if ('caches' in window) {
    await caches.delete(cacheName);
    await window.caches.open(cacheName);
    window.location.reload();
  } else {
    alert("Your browser doesn't support updating...");
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/worker.js').then(function(registration) {
      // Registration was successful
    }, function(err) {
      // registration failed :(
      alert('ServiceWorker registration failed');
      alert(err);
    });
  });
}

export default Update;
