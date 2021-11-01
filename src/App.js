import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Login from './LandingPages/Login';
import Register from './LandingPages/Register';
import DashboardContent from './components/DashboardContent';
import DashboardAdmin from './Admin/Dashboard';
import MyArticle from './Member/MyArcticle';
import MyProject from './Member/MyProject';
import CreateProject from './Member/CreateProject';
import LoginAdmin from './LandingPages/LoginAdmin';
import CreateArticle from './Member/CreateArticle';
import Home from './Member/Home';

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
