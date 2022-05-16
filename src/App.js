import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Index from './pages/Index';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route data-testid="index-page" exact path="/" render={props => <Index {...props} />} />
        <Route data-testid="about" exact path="/about" render={props => <About {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
