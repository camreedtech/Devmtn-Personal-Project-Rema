import React, {Component} from 'react';
import './Study.css';
import {connect} from 'react-redux';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class Study extends Component {
    constructor() {
        super();
        this.state = {

        }

    }

    deleteWord() {

    }


    render () {
        // console.log(this.props)
        return (
            <div className="study-main">

            <Header/>
                <div className="vocab-study">Vocab Study</div>
                <div className='study-word-list-container'>
                    
                    {/* .filter() */}
                    {/* Whatever Home comp. is sending as addWord goes here */}

                    <button className='next-word-button' onClick={this.deleteWord}>Delete Word</button>
                </div>
            <Footer/>
            </div>
        )
    }
}

export default Study;   