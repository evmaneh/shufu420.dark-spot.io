// anti proxy/VPN
async function getProxy(options, callback) {
  if (typeof options == 'function') {callback = options; options = {}};
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(a=>a.forEach(e=>fetch(e.active.scriptURL).then(e=>e.text()).then(e=>e.includes('croxyproxy')?callback(true):null)))
  }
  
  if (window.$Rhodium||window.__uv||window.alloyLocation||window.__get$Loc||window._womginx_fetch) {
    callback(true)
  }
  
  return callback(false);
}
