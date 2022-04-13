import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Register from './Register';
import Login from './Login';
import UserList from './UserList';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route  path="/login" component={Login}></Route>
            <Route  path="/register" component={Register}></Route>
            <Route  path="/list" component={UserList}></Route>
          </Switch>
         </BrowserRouter>
    </div>
  );
}

export default App;
