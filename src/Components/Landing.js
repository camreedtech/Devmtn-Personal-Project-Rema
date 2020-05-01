import React, {Component} from 'react';
import './Landing.css';
import Auth from './Auth/Auth';
import background from '../background.jpg'

class Landing extends Component {
    constructor () {
        super();
        this.state = {
            auth: false
        }
        this.toggleAuth = this.toggleAuth.bind(this)
    }

toggleAuth() {
    let {auth} = this.state
    this.setState({auth: !auth})
}

    render () {
        return (
            <div className="App">

                <img src={background} alt="Background"/>

                <div className="landing-main">
                    <h1>RΣMA</h1>
                    <p>"The roots of education are bitter, but the fruit is sweet." -Aristotle</p>
                    <button className='signin-button' onClick={this.toggleAuth} >Sign In/Register</button> 
                    {this.state.auth && <Auth/>}
                    
                </div>

            </div>
        )
    }
} 

export default Landing;


