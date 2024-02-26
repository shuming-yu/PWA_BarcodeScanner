const staticMyPWA = "my-pwa";
const assets = [
  "/",
  "/index.html",
  "/manifest.json"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticMyPWA).then(cache => {
      // cache.addAll(assets);
      cache.addAll(["/", "/index.html", "/manifest.json"]);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
