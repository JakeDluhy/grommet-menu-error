import { jsdom } from 'jsdom';

// Set up jsdom
global.document = jsdom('<html><body><div id="app"></div></body></html>', {
  url: 'http://example.com',
});

global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

window.sessionStorage = window.localStorage = {
  getItem() {},
  setItem() {},
  removeItem() {},
};

window.componentHandler = {
  upgradeElement() {},
  downgradeElement() {},
};
