
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/country/:alpha2Code">
            <CountryDetails></CountryDetails>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
