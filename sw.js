/* غيّر رقم النسخة عند كل تحديث للملفات */
const VERSION="tashteeb-v1";
const FILES=["./","index.html","manifest.webmanifest","firebase-bundle.js","icon-192.png","icon-512.png","icon-maskable-512.png","apple-touch-icon.png",
"fonts/cairo-arabic-400-normal.woff2","fonts/cairo-arabic-600-normal.woff2","fonts/cairo-arabic-700-normal.woff2",
"fonts/cairo-latin-400-normal.woff2","fonts/cairo-latin-600-normal.woff2","fonts/cairo-latin-700-normal.woff2"];

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=="GET"||u.origin!==location.origin)return;   // طلبات Firestore بتعدي عادي
  if(r.mode==="navigate"){
    // الصفحة: من النت لو متاح (عشان التحديثات)، وإلا من الكاش
    e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(VERSION).then(c=>c.put("index.html",cp));return res})
      .catch(()=>caches.match("index.html")));
    return;
  }
  e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{const cp=res.clone();caches.open(VERSION).then(c=>c.put(r,cp));return res})));
});
