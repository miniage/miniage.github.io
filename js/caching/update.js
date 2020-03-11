function update() {
  if ('caches' in window) {
    window.caches.open('miniage').then(cache => {
    });
    window.location.reload();
  } else {
    alert("Your browser doesn't support updating...");
  }
}
