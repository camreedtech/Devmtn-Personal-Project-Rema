import React, {Component} from 'react';
import './Home.css';

// Math.random() somewhere in here 

class Home extends Component {
    render () {
        return (
            <div className="App">
                 <div className="App-header">
                    <h2>Welcome to the Home page</h2>
                </div>
                <div>
                    <button className='left-arrow-button'> 'left-arrow' </button>
                    {/* I need to figure out what kind of button can go here that will react onClick and will display different words */}
                </div>
                <button className="study-add-word-button">Add Word to Study List</button>
                <div className='study-footer'></div>
            </div>
        )
    }
}

export default Home;