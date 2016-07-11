chrome.runtime.onMessage.addListener((request, sender) => {
  console.log(request);
  if (request.type === 'initialize') {
    // TODO: if url matches
    console.log(sender.tab.url);
    // getSites((items) => {
    chrome.tabs.sendMessage(sender.tab.id, []);
    // });
  }
});
