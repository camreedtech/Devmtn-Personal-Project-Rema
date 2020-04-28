import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    render () {
        return (
            <div className="App">
                <div className="home-main">
                    {/* <img  */}
                    <h2>RΣMA</h2>
                    <h3>"The roots of education are bitter, but the fruit is sweet. - Aristotle"</h3>
                    <button className='signin-button'>Sign In</button> <button className='register-button'>Register</button>
                </div>
            </div>
        )
    }
}

export default Home;