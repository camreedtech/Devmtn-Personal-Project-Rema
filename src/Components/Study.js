import React, {Component} from 'react';
import './Study.css';


class Study extends Component {
    render () {
        return (
            <div className="App">
                <div className="vocab-study">Vocab Study</div>
                <div className='study-word-list-container'>
                    {/* <add a word search function> */}
                    <ul>
                        <li></li> 
                        {/* The dynamic study greek/english word list goes into the above list */}
                    </ul>
                    <button className='study-delete-button'onClick="">Delete Word</button>
                </div>
                
            </div>
        )
    }
}

export default Study;    