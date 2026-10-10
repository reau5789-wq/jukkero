// 주께로 오프라인 캐시 — 버전을 올리면 새 자료로 교체됩니다.
const VERSION="jukkero-v13";
const CORE=["./","index.html","manifest.json","config.js","lib/leaflet.js","icons/icon-192.png","icons/icon-512.png",
 "dir/index.json","dir/denoms.json","dir/dongpts.json","dir/c-u01.json","dir/c-u02.json","dir/c-u04.json","dir/c-u08.json","dir/c-n01.json","dir/c-n03.json","dir/c-u10.json","dir/c-u12.json","dir/c-n02.json"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET"||u.origin!==location.origin)return;
  if(u.pathname.endsWith("/config.js")||u.pathname.endsWith("/fixes.json")||u.pathname.endsWith("/added.json")){e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(VERSION).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)));return}
  e.respondWith(caches.match(e.request).then(hit=>{
    const net=fetch(e.request).then(r=>{if(r.ok){const cp=r.clone();caches.open(VERSION).then(c=>c.put(e.request,cp))}return r}).catch(()=>hit);
    return hit||net;
  }));
});
