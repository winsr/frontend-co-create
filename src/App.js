import './App.scss';

import Login from './LandingPages/Login';
import Register from './LandingPages/Register';
import DashboardContent from './components/DashboardContent';
import DashboardAdmin from './Admin/Dashboard';
import Home from './Member/Home';
import MyArticle from './Member/MyArcticle';
import MyProject from './Member/MyProject';

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
    </div>
  );
}

export default App;
