import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound.js';
import Project from './pages/Project';
import Pratiksha from './pages/Pratiksha';
import Harshada from './pages/Harshada';
import RutujaA from './pages/RutujaA';
import Rutuja1 from './pages/Rutuja1';
import Nikita from './pages/Nikita';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project-info" component={Project} />
          <Route exact path="/pratiksha" component={Pratiksha} />
          <Route exact path="/harshada" component={Harshada} />
          <Route exact path="/rutuja" component={RutujaA} />
          <Route exact path="/rutuja-shinde" component={Rutuja1} />
          <Route exact path="/nikita" component={Nikita} />
          <Route component={NotFound} status={404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
