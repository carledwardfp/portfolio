import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path='/porfolio/' exact component={Home} />
          <Route path='/porfolio/about' exact component={About} />
          <Route path='/porfolio/services' exact component={Services} />
          <Route path='/porfolio/projects' exact component={Projects} />
          <Route path='/porfolio/contact' exact component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
