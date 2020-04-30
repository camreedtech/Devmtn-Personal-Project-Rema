import React, {Component} from 'react';
import './Landing.css';

class Landing extends Component {
    constructor () {
        super();
        this.state = {
            auth: 'signin'
        }



    }
    render () {
        return (
            <div className="App">

                {/* <img className='landing-background-img' */}

                {this.state.auth === 'signin' ? <div>This is login</div> : <div>This is register</div>}

                <div className="landing-main">
                    <h1>RΣMA</h1>
                    <p>"The roots of education are bitter, but the fruit is sweet. - Aristotle"</p>
                    <button className='signin-button' onClick={() => this.setState({auth: 'signin'})} >Sign In</button> 
                    <button className='register-button' onClick={() => this.setState({auth: 'register'})} >Register</button>
                </div>

            </div>
        )
    }
} 

export default Landing;