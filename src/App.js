import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Homepage from './components/Homepage';
import Nav from './components/Nav';
import Countrypage from './components/Countrypage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Nav display="none" />
        <Homepage />
      </Route>
      <Route path="/europe">
        <Nav display="block" route="/" />
        <Countrypage />
      </Route>
      <Route path="/africa">
        <Nav display="block" route="/" />
        <Countrypage />
      </Route>
      <Route path="/asia">
        <Nav display="block" route="/" />
        <Countrypage />
      </Route>
      <Route path="/northamerica">
        <Nav display="block" route="/" />
        <Countrypage />
      </Route>
      <Route path="/southamerica">
        <Nav display="block" route="/" />
        <Countrypage />
      </Route>
    </Switch>
  </Router>
);

export default App;
