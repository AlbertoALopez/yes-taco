import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import Main from './main';

const Routes = () => (
  <div>
    <Route path="/" component={Main} />
  </div>
);

const App = () => (
  <AppContainer>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </AppContainer>
);

export default App;
