import React, {Component} from 'react';
import './Home.css';
import axios from 'axios';



class Home extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,      
            words: []
        }
    }

    //func that will handleClick when I click to show next word and updates state of index+1


    componentDidMount() {
        axios.get('/api/words').then((res) => this.setState({words: res.data}))
    }

    toggleHandler()

    render () {
        // console.log(this.state.index)
        return (
            <div className="App">
                
                <div className='home-main'>
               
                    {this.state.words[this.state.index]
                    ?
                    <p>{this.state.words[this.state.index].greek_word}</p>   
                    :
                    <p>Loading...</p> 
                    }

                    
                
                    <button ></button>
                </div>
                <button className="study-add-word-button">Add Word to Study List</button>
                <div className='study-footer'></div>
            </div>
        )
    }
}

export default Home;