import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Main from './main';

const Routes = () => (
  <div>
    <Route path="/" component={Main} />
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
