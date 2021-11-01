import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Login from './landingpages/Login';
import Register from './landingpages/Register';
import DashboardContent from './components/DashboardContent';
import DashboardAdmin from './admin/Dashboard';
import MyArticle from './member/MyArcticle';
import MyProject from './member/MyProject';
import CreateProject from './member/CreateProject';
import LoginAdmin from './landingpages/LoginAdmin';
import CreateArticle from './member/CreateArticle';
import Home from './member/Home';

function App() {
  return (
    <Router>
      <DashboardContent />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/member/artikel-saya">
          <MyArticle />
        </Route>
        <Route path="/member/project-saya">
          <MyProject />
        </Route>
        <Route path="/member/buat-project">
          <CreateProject />
        </Route>
        <Route path="/member/buat-artikel">
          <CreateArticle />
        </Route>

        <Route path="/admin">
          <LoginAdmin />
        </Route>
        <Route path="/admin/dashboard">
          <DashboardAdmin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
