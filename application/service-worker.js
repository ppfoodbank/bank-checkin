var cacheName = 'pmfb-checkin-v1';
var filesToCache = [
    '/',
    '/age.html',
    '/ethnic.html',
    '/family.html',
    '/files.txt',
    '/gender.html',
    '/housed.html',
    '/index.html',
    '/lang.html',
    '/service-worker.js',
    '/visit.html',
    '/zipcode.html',
    '/images/Baby.2.png',
    '/images/CheckIn.png',
    '/images/Fork.png',
    '/images/F.png',
    '/images/Home.png',
    '/images/Kid.2.png',
    '/images/Man.png',
    '/images/M.png',
    '/images/Senior.png',
    '/images/Woman.png',
    '/images/icons/Fork.png',
    '/node_modules/immediate/dist/images/immediate.js',
    '/node_modules/immediate/dist/images/immediate.min.js',
    '/node_modules/immediate/lib/images/browser.js',
    '/node_modules/immediate/lib/images/index.js',
    '/node_modules/js-cookie/src/js.cookie.js',
    '/node_modules/lie/polyfill.js',
    '/node_modules/lie/dist/lie.js',
    '/node_modules/lie/dist/lie.min.js',
    '/node_modules/lie/dist/lie.polyfill.js',
    '/node_modules/lie/dist/lie.polyfill.min.js',
    '/node_modules/lie/lib/browser.js',
    '/node_modules/lie/lib/index.js',
    '/node_modules/localforage/dist/localforage.js',
    '/node_modules/localforage/dist/localforage.min.js',
    '/node_modules/localforage/dist/localforage.nopromises.js',
    '/node_modules/localforage/dist/localforage.nopromises.min.js',
    '/node_modules/localforage/node_modules/lie/polyfill.js',
    '/node_modules/localforage/node_modules/lie/dist/lie.js',
    '/node_modules/localforage/node_modules/lie/dist/lie.min.js',
    '/node_modules/localforage/node_modules/lie/dist/lie.polyfill.js',
    '/node_modules/localforage/node_modules/lie/dist/lie.polyfill.min.js',
    '/node_modules/localforage/node_modules/lie/lib/browser.js',
    '/node_modules/localforage/node_modules/lie/lib/index.js',
    '/node_modules/localforage/node_modules/lie/node_modules/immediate/dist/immediate.js',
    '/node_modules/localforage/node_modules/lie/node_modules/immediate/dist/immediate.min.js',
    '/node_modules/localforage/node_modules/lie/node_modules/immediate/lib/browser.js',
    '/node_modules/localforage/node_modules/lie/node_modules/immediate/lib/index.js',
    '/node_modules/localforage/src/localforage.js',
    '/node_modules/localforage/src/drivers/indexeddb.js',
    '/node_modules/localforage/src/drivers/localstorage.js',
    '/node_modules/localforage/src/drivers/websql.js',
    '/node_modules/localforage/src/utils/createBlob.js',
    '/node_modules/localforage/src/utils/executeCallback.js',
    '/node_modules/localforage/src/utils/executeTwoCallbacks.js',
    '/node_modules/localforage/src/utils/getCallback.js',
    '/node_modules/localforage/src/utils/idb.js',
    '/node_modules/localforage/src/utils/includes.js',
    '/node_modules/localforage/src/utils/isArray.js',
    '/node_modules/localforage/src/utils/isIndexedDBValid.js',
    '/node_modules/localforage/src/utils/isLocalStorageValid.js',
    '/node_modules/localforage/src/utils/isWebSQLValid.js',
    '/node_modules/localforage/src/utils/normalizeKey.js',
    '/node_modules/localforage/src/utils/promise.js',
    '/node_modules/localforage/src/utils/serializer.js',
    '/scripts/age.js',
    '/scripts/app.js',
    '/scripts/checkin.js',
    '/scripts/ethnic.js',
    '/scripts/family.js',
    '/scripts/gender.js',
    '/scripts/housed.js',
    '/scripts/lang.js',
    '/scripts/visit.js',
    '/scripts/zipcode.js',
    '/styles/inline.css',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e)
{
  console.log('[ServiceWorker] Activate');
});


// // Event listener for retrieving data
// self.addEventListener('fetch', function(e) {
//   console.log('[Service Worker] Fetch ', e.request.url);
//   var request = e.request.clone();

//   if (request.method == "POST") {
//     e.respondWith(
//       // Try to get the response from the network
//       fetch(e.request.clone()).catch(function(error) {
//         // If it doesn't work, put it in browser storage and schedule a sync
//         console.log('[Service Worker] Could not send ', error);

//         return request.text().then(function(jsonText){
//           window.localforage.setItem(uuidv4, jsonText);
//          })
//       })
//     );
//   }

//   // if (request.method == "GET") {
//   //     e.respondWith(  
//   //       // Get the response from the network
//   //       fetch(e.request).then(function(response) {
//   //         // And store it in the cache for later
//   //         caches.open(cacheName).then(function(cache) {
//   //           return cache.put(request, response);
//   //         })
//   //       })
//   //     );	
//   // }
// });


//TODO: finish this
self.addEventListener('sync', function(event) {
  if (event.tag == 'syncDB') {
//    event.waitUntil(doSomeStuff());
  }
});
