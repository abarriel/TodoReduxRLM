import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import generateStore from './generateStore';
import registerServiceWorker from './registerServiceWorker';

const store = generateStore();

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
