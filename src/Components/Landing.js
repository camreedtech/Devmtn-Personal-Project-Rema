import React, {Component} from 'react';
import './Landing.css';

class Landing extends Component {
    render () {
        return (
            <div className="App">

                {/* <img className='landing-background-img' */}

                <div className="landing-main">
                    <h1>RΣMA</h1>
                    <p>"The roots of education are bitter, but the fruit is sweet. - Aristotle"</p>
                    <button className='signin-button' onClick={} >Sign In</button> 
                    <button className='register-button' onClick={} >Register</button>
                </div>

            </div>
        )
    }
}

export default Landing;