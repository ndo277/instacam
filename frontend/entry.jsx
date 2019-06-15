import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'; 
import {fetchComment} from './actions/comment_actions';


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

  window.state = store.getState;
  window.dispatch = store.dispatch;
  window.fetchComment = fetchComment;
  

  ReactDOM.render(<Root store={store}/>, root);
});