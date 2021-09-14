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
        <Nav />
        <Homepage />
      </Route>
      <Route path="/europe">
        <Nav />
        <Countrypage />
      </Route>
    </Switch>
  </Router>
);

export default App;
