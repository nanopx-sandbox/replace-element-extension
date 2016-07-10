function getSites(cb) {
  chrome.storage.sync.get('sites', cb);
}
//
// function createSite(site) {
//   chrome.storage.sync.get('sites', function(items) {
//     var setItems = items || {};
//     if (setItems) {
//       setItems[site] = [];
//     }
//     chrome.storage.sync.set({ sites: setItems });
//   });
// }
//
// function setSiteElementReplacement(site, selector, element) {
//   chrome.storage.sync.get('sites', function(items) {
//     var item = items[site] || [];
//     item.push({ selector: selector, element: element });
//     items[site] = item;
//     chrome.storage.sync.set({ sites: items });
//   });
// }

chrome.runtime.onMessage.addListener(function(request, sender) {
  // if (request.type === 'createSite') {
  //   createSite(request.value);
  // }
  // if (request.type === 'setSiteElement') {
  //   setSiteElementReplacement(request.value.site, request.value.selector, request.value.element)
  // }

  if (request.type === 'initialize') {
    getSites(function(items) {
      chrome.tabs.sendMessage(sender.tab.id, items);
    });
  }
});

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
//   if (changeInfo.status === 'complete') {
//     return chrome.tabs.sendMessage(tabId, );
//   }
// });
