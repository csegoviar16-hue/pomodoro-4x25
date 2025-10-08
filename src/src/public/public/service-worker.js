const CACHE = "pomodoro-cache-v1";
const ASSETS = [
"/",
"/index.html",
"/manifest.json"
];


self.addEventListener("install", (e) => {
e.waitUntil((async () => {
const cache = await caches.open(CACHE);
await cache.addAll(ASSETS);
self.skipWaiting();
})());
});


self.addEventListener("activate", (e) => {
e.waitUntil((async () => {
const keys = await caches.keys();
await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
self.clients.claim();
})());
});


self.addEventListener("fetch", (e) => {
const req = e.request;
if (req.method !== "GET") return;
e.respondWith((async () => {
const cached = await caches.match(req);
if (cached) return cached;
try {
const fresh = await fetch(req);
const cache = await caches.open(CACHE);
cache.put(req, fresh.clone());
return fresh;
} catch (err) {
return cached || Response.error();
}
})());
});


// Notificación local desde la app (opcional)
self.addEventListener("message", (event) => {
const { type, title, body } = event.data || {};
if (type === "LOCAL_NOTIFY" && Notification && Notification.permission === "granted") {
self.registration.showNotification(title || "Pomodoro", { body: body || "Cambio de fase" });
}
});
