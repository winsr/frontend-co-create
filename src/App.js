import './App.scss';

import Login from './LandingPages/Login';
import Register from './LandingPages/Register';
import DashboardContent from './components/DashboardContent';
import DashboardAdmin from './Admin/Dashboard';
import Home from './Member/Home';
import MyArticle from './Member/MyArcticle';
import MyProject from './Member/MyProject';
import CreateProject from './Member/CreateProject';
import LoginAdmin from './LandingPages/LoginAdmin';
import CreateArticle from './Member/CreateArticle';

function App() {
  return (
    <div className="pages">
      <Login />
      <Register />
      <DashboardContent />
      <DashboardAdmin />
      <Home />
      <MyArticle />
      <MyProject />
      <CreateProject />
      <LoginAdmin />
      <CreateArticle />
    </div>
  );
}

export default App;
