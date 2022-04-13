import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
          </Switch>
         </BrowserRouter>
    </div>
  );
}

export default App;
