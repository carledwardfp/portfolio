import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from '@material-ui/styles'
import myTheme from './components/myTheme'
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
      <ThemeProvider theme={myTheme}>
      <div className="container">
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Switch >
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </AnimatePresence>
        
      </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
