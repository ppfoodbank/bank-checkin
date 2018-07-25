var cacheName = 'pmfb-checkin-v1';
var filesToCache = [
  '/',
  '/index.html',
  '/checkin.html',
  '/scripts/app.js',
  '/styles/inline.css',
];

//TODO: determine if this is necessary
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  // e.waitUntil(
  //   caches.open(cacheName).then(function(cache) {
  //     console.log('[ServiceWorker] Caching app shell');
  //     return cache.addAll(filesToCache);
  //   })
  // );
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
    event.waitUntil(doSomeStuff());
  }
});
