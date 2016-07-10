chrome.runtime.onMessage.addListener(function(replacements) {
  console.log(replacements);
});

chrome.runtime.sendMessage({ type: 'initialize' });
