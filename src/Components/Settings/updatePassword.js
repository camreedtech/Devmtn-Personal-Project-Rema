import React, {Component} from 'react';
import './updatePassword.css';
import {connect} from 'react-redux';
import axios from 'axios';


// Change handler and update password funcs
// state 

class Password extends Component {
    constructor() {
        super();
        this.state = {
            password: ''
        }

    }

    changeHandler() {
        
    }

    updatePassword() {
        axios.put(`/auth/update_password`).then(() => console.log('Password updated!'))

    }

    render () {
        return (
            
            <div> 



            </div>
        )
    }


}

export default Password;