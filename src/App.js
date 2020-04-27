import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import store from './Redux/store';
import Signin from './Signin';
import Register from './Register';
import Home from './Home';
import Study from './Study';
import Vocab from './Vocab';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.requestUserData()
  }
render() {
  return(
    <div className="App">
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
    </div>
  )
}
};

export default connect(mapStateToProps, mapDispatchToProps)(app);