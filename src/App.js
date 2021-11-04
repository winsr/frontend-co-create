import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Login from './pages/landingpages/Login';
import Register from './pages/landingpages/Register';
import DashboardContent from './components/DashboardContent';
import DashboardAdmin from './pages/admin/Dashboard';
import MyArticle from './pages/member/MyArcticle';
import MyProject from './pages/member/MyProject';
import CreateProject from './pages/member/CreateProject';
import LoginAdmin from './pages/landingpages/LoginAdmin';
import CreateArticle from './pages/member/CreateArticle';
import Home from './pages/member/Home';
import LandingPage from './pages/landingpages';

function App() {
  return (
    <Router>
      <Switch>
        <LandingPage />
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <DashboardContent>
          <Route path="/home">
            <Home />
          </Route>
        </DashboardContent>
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

        <DashboardAdmin>
          <Route path="/admin">
            <LoginAdmin />
          </Route>
          <Route path="/admin/dashboard"></Route>
        </DashboardAdmin>
      </Switch>
    </Router>
  );
}

export default App;
