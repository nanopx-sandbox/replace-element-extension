import globToRegExp from 'glob-to-regexp';
import { Store } from 'react-chrome-redux';

const store = new Store({
  portName: 'REPLACE_ELEMENT_EXT' // communication port name
});

function replace(selector, html) {
  const $elements = document.querySelectorAll(selector);
  [].slice.call($elements).forEach(($element) => {
    $element.innerHTML = html;
  });
  setTimeout(() => {
    replace(selector, html);
  }, 3000);
}

const unsubscribe = store.subscribe(() => {
   unsubscribe(); // make sure to only fire once
   const { sites: { sites, replaceEntries } } = store.getState();
   sites.forEach((site) => {
     const re = globToRegExp(site);
     if (re.test(window.location.href)) {
       console.log('Matched site.', replaceEntries[site]);
       replaceEntries[site].forEach(({ selector, html }) => replace(selector, html));
     }
   });
});
