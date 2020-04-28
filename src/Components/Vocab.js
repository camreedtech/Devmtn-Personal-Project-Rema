import React, {Component} from 'react';
import './Vocab.css';


class Vocab extends Component {
    render () {
        return (
            <div className="App">
                <div className="master-vocab-list-header">Master Vocab List</div>
                <div className='master-vocab-list-container'>
                    
                    <ul>
                        <li></li> 
                        {/* All of the DB words go into the above list */}
                    </ul>
                    
                </div>
                
            </div>
        )
    }
}

export default Vocab;    