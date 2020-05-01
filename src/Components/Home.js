import React, {Component} from 'react';
import './Home.css';
import axios from 'axios';
import Header from './Header/Header';



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

    //func that will handleClick when I click to show next word and updates state of index+1


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

    render () {
        // console.log(this.state.index)
        return (
            <div className="App">
                
                <div className='home-main'>
               
                    {this.state.words[this.state.index] && this.state.greek
                    ?
                    <p onClick={this.toggleHandler}>{this.state.words[this.state.index].greek_word}</p>   
                    : 
                    this.state.words[this.state.index] && !this.state.greek
                    ?
                    <p onClick={this.toggleHandler}>{this.state.words[this.state.index].english_word}</p> 
                    :
                    <p>Loading...</p> 
                    }

                    
                
                    <button className='NEXT-WORD-BUTTON' onClick={this.nextWord}>Next Word</button>
                </div>
                <button className="study-add-word-button">Add Word to Study List</button>
                <div className='study-footer'></div>
            </div>
        )
    }
}

export default Home;