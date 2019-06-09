import React from 'react';

import {Navbar} from './components/'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'
import StartPage from './scenes/StartPage'




function App() {
  return (
    <Router> 
      
      <div className="App">
       <Navbar />
      </div>
    </Router>
   
  );
}







export default App;
