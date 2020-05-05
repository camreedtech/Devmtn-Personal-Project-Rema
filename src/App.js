import React from 'react';
import './reset.css'
import {Route, Switch} from 'react-router-dom';
import './index.css';

import Landing from './Components/Landing';
import Signin from './Components/Auth/Signin';
import Register from './Components/Auth/Register';
import Home from './Components/Home';
import Study from './Components/Study';
import Vocab from './Components/Vocab';



const App = () => { 
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}/>
        {/* <Route path="/Signin" component={Signin}/>
        <Route path="/Register" component={Register}/> */}
        <Route path="/Home" component={Home}/>
        <Route path="/Study" component={Study}/>
        {/* <Route path="/Vocab" component={Vocab}/> */}
      </Switch>
    </div>
  )
};

export default App;
  