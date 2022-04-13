import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Register from './Register';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route  path="/register" component={Register}></Route>
          </Switch>
         </BrowserRouter>
    </div>
  );
}

export default App;
