import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import AppContainer from './app_container';
import ScrollToTop from 'react-router-scroll-top';

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop>
        <AppContainer />
      </ScrollToTop>
    </HashRouter>
  </Provider>
);

export default Root;