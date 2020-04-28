import React, {Component} from 'react';
import './Study.css';
import {connect} from 'react-redux';

class Study extends Component {
    render () {
        console.log(this.props)
        return (
            <div className="App">
                <div className="vocab-study">Vocab Study</div>
                <div className='study-word-list-container'>
                    {/* <input> .filter() */}
                    <ul>
                        <li></li> 
                        {/* The dynamic study greek/english word list goes into the above list */}
                    </ul>
                    <button className='study-delete-button' onClick="">Delete Word</button>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Study);    