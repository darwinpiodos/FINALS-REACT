import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Register from './Register';
import Login from './Login';
import UserList from './UserList';
import DashboardPage from './DashboardPage';
import ProfilePage from './ProfilePage';
import EditProfile from './EditProfile';
 

function App() {
  return (
    <div className="App">
         <BrowserRouter>
         
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route  path="/login" component={Login}></Route>
            <Route  path="/register" component={Register}></Route>
            <Route  path="/list" component={UserList}></Route>
            <Route  path="/dashboard" component={DashboardPage}></Route>

            <Route  path="/profile" component={ProfilePage}></Route>
            <Route  path="/editprofile/:id" component={EditProfile}></Route>
            
          </Switch>
         </BrowserRouter>
    </div>
  );
}

export default App;

