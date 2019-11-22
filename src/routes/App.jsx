import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../scenes/Home';
import Login from '../scenes/Auth';
import MainLayout from '../components/templates/BasicLayout';
import Search from '../scenes/Search';
import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/search" component={Search} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
