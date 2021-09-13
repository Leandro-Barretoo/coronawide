import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Homepage from './components/Homepage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  </Router>
);

export default App;
