import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound.js';
import Header from './pages/components/Header';
import Footer from './pages/components/Footer';
import Gallery from './pages/components/Gallery';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={Gallery} />
          <Route component={NotFound} status={404} />
        </Switch>
      </Router>
      {/* header */}
      <Header />
      <Footer />
    </div>
  );
}

export default App;
