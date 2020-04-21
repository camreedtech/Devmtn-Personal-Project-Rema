import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import store from './Redux/store';
import Signin from './Signin';
import Register from './Register';
import Home from './Home';
import Study from './Study';
import Vocab from './Vocab';

function App() {
  return (
    <div className="App">
    
    
    </div>
  );
}

export default App;



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