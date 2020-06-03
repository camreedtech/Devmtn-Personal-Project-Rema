import React, {Component} from 'react';
import './Landing.css';
// import Auth from './Auth/Auth';
import Signin from './Auth/Signin';
import Register from './Auth/Register';


class Landing extends Component {
    constructor () {
        super();
        this.state = {
            auth: false,
            signin: false,
            register: false
        }
        this.toggleAuth = this.toggleAuth.bind(this)
        this.toggleSignin = this.toggleSignin.bind(this)
        this.toggleRegister = this.toggleRegister.bind(this)
    }

toggleAuth() {
    let {auth} = this.state
    this.setState({auth: !auth})
}

    render () {
        return (
            <div className="landing-base">

                <div className="landing-main">

                    <h1>RΣMA</h1>

                    <p1>The roots of education are bitter, but the fruit is sweet - Aristotle</p1>

                    <button className='signin-button' onClick={this.toggleSignin} >SIGN IN</button> 
                    {this.state.auth && <Signin/>}

                    <button className='register-button' onClick={this.toggleRegister}>REGISTER</button>
                    {this.state.auth && <Register/>}
                    
                </div>

            </div>
        )
    }
} 

export default Landing;