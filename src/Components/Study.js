import React, {Component} from 'react';
import './Study.css';
import {connect} from 'react-redux';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import axios from 'axios';
import Home from '/Components/Home';

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
        const mappedWords = this.words.map(elem => {
            return <div key={elem.id}
                <Home id={elem.id}/> 
            })

        return (
            <div className="study-main">

            <Header/>
                <div className="vocab-study">
                    

                        <div className='study-words'>Study Words (Λέξεις Μελέτης)</div>
                    

                            <div className='study-word-list-container'>

                            {mappedWords}

                            <button className='delete-word-button' onClick={() => this.deleteWord(this.state.words.word_id)}>Delete Word</button> 
                        

                    </div>
                    
                    
                </div>
            <Footer/>
            
        )
    })
    }
}

export default Study;   