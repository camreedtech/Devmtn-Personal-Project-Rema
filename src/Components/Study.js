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
        this.getStudyWords()
    }

    deleteWord(id) {
        axios.delete(`/api/words/${id}`).then(() => this.getStudyWords()) 
    }

    getStudyWords() {
        axios.get('/api/study').then((res) => 
        this.setState({words: res.data}) 
        )
    }

    render () {
        const mappedWords = this.state.words.map((elem, i) => {
            return <div className='word-box' key={i}>
                     <p className='english-word'> {elem.english_word} </p>
                     <p className='greek-word'> {elem.greek_word} </p>
                     <button className='study-delete-word-button' onClick={() => this.deleteWord(elem.word_id)}>Delete Word</button>
                    </div>
        })

        return (
            <div className="study-main">

                <Header/>
                <div className="vocab-study">
                    

                    <div className='study-words'>Study Words (Λέξεις Μελέτης)</div>
                         <div className='study-word-list-container'>
                             {mappedWords}
                        </div>
                </div>    
                    
                <Footer/>
            </div>
            
        )
    
    }
}

export default Study;   

                             
                        
                    

