import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
import App from './containers/App';

const store = new Store({
  portName: 'REPLACE_ELEMENT_EXT' // communication port name
});

const reactRoot = window.document.getElementById('app');

const unsubscribe = store.subscribe(() => {
   unsubscribe(); // make sure to only fire once
   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     reactRoot
   );
});
