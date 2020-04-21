import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/store';
import Signin from './Signin';
import Register from './Register';
import Home from './Home';
import Study from './Study';
import Vocab from './Vocab';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path="/Signin" component={Signin}/>
      <Route path="/Register" component={Register}/>
      <Route path="/Home" component={Home}/>
      <Route path="/Study" component={Study}/>
      <Route path="/Vocab" component={Vocab}/>
        
    </Switch>
  </Router>

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();