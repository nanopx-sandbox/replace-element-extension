require('babel-polyfill');
require('./app/index.js');

chrome.runtime.sendMessage({ type: 'foo' });
