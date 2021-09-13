import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Homepage from './components/Homepage';
import Nav from './components/Nav';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Nav />
        <Homepage />
      </Route>
    </Switch>
  </Router>
);

export default App;
