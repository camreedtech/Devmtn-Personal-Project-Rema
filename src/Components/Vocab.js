import React, {Component} from 'react';
import './Home.css';
import axios from 'axios';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class Vocab extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,      
            words: [],
            greek: true
        }

    } 

    componentDidMount() {
        axios.get('/api/words').then((res) => this.setState({words: res.data}))
    }

    render () {
        
        return (
            <div className="vocab-base">
                
            <Header/>

            <div className='vocab-main-div'>
                
                <div className='vocab-word-container'>
               
                    {
                    this.state.words
                    ?
                    <p>{this.state.words}</p>   
                    : 
                    <p>Loading...</p> 
                    }
                </div>

                
                    <button className='delete-word-button'
                
                
                
                <Footer/>
                
                </div>
                </div>
        )
    }
}

export default Vocab;  