function update() {
  if ('caches' in window) {
    window.caches.open('miniage').then(cache => {
    });
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
      alert('ServiceWorker registration failed: ', err);
    });
  });
}
