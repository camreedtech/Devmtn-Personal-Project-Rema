import React from 'react';
import {connect} from 'react-redux';
import {register} from '../..' // check this line 

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.registerHandler = this.registerHandler.bind(this);
    }
    registerHandler(e) {
        e.preventDefault();
        this.props
            .register(this.state)
            .then(() => {
                this.props.redirect();
            })
            .catch((err) => console.log('Error registering', err));
    }
    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render() {
        return(
            <div className='register-container'>
                <form onSubmit={this.registerHandler}>
                    <input
                        placeholder='email'
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={(e) => this.changHandler}
                    />
                    <input
                        placeholder='password'
                        type='text'
                        name='password'
                        onChange={(e) => this.changeHandler(e)}
                    />
                    <button className='signin-button'>Register</button>
                </form>
                <button className='clicl-register-button' onClick={this.props.display}>Click to Register</button>
            </div>
        );
    }
}

export default connect(null, {register})(Register);