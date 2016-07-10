function getSites(cb) {
  chrome.storage.sync.get('sites', cb);
}

function createSite(site) {
  chrome.storage.sync.get('sites', function(items) {
    var setItems = items || {};
    if (setItems) {
      setItems[site] = [];
    }
    chrome.storage.sync.set({ sites: setItems });
  });
}

function setSiteElementReplacement(site, selector, element) {
  chrome.storage.sync.get('sites', function(items) {
    var item = items[site] || [];
    item.push({ selector: selector, element: element });
    items[site] = item;
    chrome.storage.sync.set({ sites: items });
  });
}

chrome.runtime.onMessage.addListener((request, sender) => {
  if (request.type === 'initialize') {
    console.log(sender.tab.url);
    getSites(function(items) {
      chrome.tabs.sendMessage(sender.tab.id, items);
    });
  }
});
