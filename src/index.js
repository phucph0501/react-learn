import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import { legacy_createStore as createStore  } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './components/store/reducers';

const store = createStore(rootReducer);
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
