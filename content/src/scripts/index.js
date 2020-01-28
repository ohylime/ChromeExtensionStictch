import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'webext-redux';

import App from './components/app/App';

const proxyStore = new Store();

// Create React Anchor
const anchor = document.createElement('div');

anchor.id = 'rcr-anchor';
anchor.style.width = '0';
anchor.style.height = '0';
// Prevent Ruining <body> that use Grid
anchor.style.gridColumnEnd = '1';
anchor.style.gridRowEnd = '1';

// Append as firstNode on <body>
document.body.insertBefore(anchor, document.body.childNodes[0]);

/*
 For some reason you can't document.getElementId does not work here.
 Therefore grabbing first child of body which is now `anchor`
 */
proxyStore.ready().then(() => {
  render(
    <Provider store={proxyStore}>
      <App/>
    </Provider>
   , document.body.childNodes[0]);
});
