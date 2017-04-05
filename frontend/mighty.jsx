import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchEntries } from './actions/entry_action';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  store = configureStore();
  window.fetchEntries = fetchEntries ;
  window.store = store;
  const root = document.getElementById('root');
  ReactDom.render( <Root store={store} />, root);
});
