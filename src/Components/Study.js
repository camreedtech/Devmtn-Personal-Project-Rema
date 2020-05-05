import React, {Component} from 'react';
import './Study.css';
import {connect} from 'react-redux';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import axios from 'axios';

class Study extends Component {
    constructor() {
        super();
        this.state = {
            words: []
        }

    }

    componentDidMount() {
        axios.get('/api/study').then((res) => 
        this.setState({words: res.data}) 
        )
    }

    deleteWord(id) {
        axios.delete(`/api/words/${id}`).then(() => console.log('Word deleted!')) 
    }


    render () {
        console.log(this.state)
        return (
            <div className="study-main">

            <Header/>
                <div className="vocab-study">
                    

                        <div className='vocab-words'>Vocab Words</div>
                    

                    <div className='study-word-list-container'>

                        {/* code here */}
                        {/* reference nodb for mapping the words  */}

                        <button className='delete-word-button' onClick={() => this.deleteWord()}>Delete Word</button> 
                        

                    </div>
                    
                    
                </div>
            <Footer/>
            </div>
        )
    }
}

export default Study;   