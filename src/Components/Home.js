import React, {Component} from 'react';
import './Home.css';
import axios from 'axios';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,      
            words: [],
            greek: true
        }
        this.toggleHandler = this.toggleHandler.bind(this)
        this.nextWord = this.nextWord.bind(this)
    } 

    componentDidMount() {
        axios.get('/api/words').then((res) => this.setState({words: res.data}))
    }

    toggleHandler() {
        let {greek} = this.state
        this.setState({greek: !greek})
    } 

    nextWord() {
        let {index} = this.state
        this.setState({index: index + 1})
    }

    addWord(id) {
        axios.post(`/api/words/${id}`).then(() => console.log('Word added!'))
    }

    render () {
        console.log(this.state.words)
        return (
            <div className="home-base">
                
            <Header/>

            <div className='main-div'>
                
                <div className='word-container'>
               
                    {
                    this.state.words[this.state.index] && this.state.greek
                    ?
                    <p onClick={this.toggleHandler}>{this.state.words[this.state.index].greek_word}</p>   
                    : 
                    this.state.words[this.state.index] && !this.state.greek
                    ?
                    <p onClick={this.toggleHandler}>{this.state.words[this.state.index].english_word}</p> 
                    :
                    <p>Loading...</p> 
                    }
                    
                </div>

                <button className='next-word-button' onClick={this.nextWord}>Next Word</button>

                <button className='add-word-button' onClick={() => this.addWord(this.state.words[this.state.index].word_id)}>Add Word to Study List</button>

                </div>   

                <Footer/>
            </div>
        )
    }
}

export default Home;   