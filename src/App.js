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
import AddQuestion from './scenes/AddQuestions';


export const ADD_QUESTION = '/add-questions'


function App() {
  return (
    <Router> 
      <div className="App">
       <Navbar />
       <Switch>
      <Route exact path={ADD_QUESTION} component={AddQuestion} />
    </Switch>
      </div>
    </Router>
   
  );
}








export default App;
