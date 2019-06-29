import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'; 
import {createLike, fetchLike, deleteLike} from './actions/like_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  /** 
   * FOR TESTING
  */
  window.state = store.getState;
  window.dispatch = store.dispatch;
  window.createLike = createLike;
  window.fetchLike = fetchLike;
  window.deleteLike = deleteLike;

  ReactDOM.render(<Root store={store}/>, root);
});