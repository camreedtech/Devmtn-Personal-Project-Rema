import React from 'react';
import {connect} from 'react-redux';
import {signin} from '../../redux/user';


class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.signinHandler = this.signinHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }
    signinHandler(e) {
        e.preventDefault();
        console.log(this.state)
        this.props
            .signin(this.state)
            .then(() => {
                this.props.redirect();
            })
            .catch((err) => console.log('Error signing in', err));
    }
    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render() {
        return(
            <div className='Signin-container'>
                <form onSubmit={this.signinHandler}>
                    <input
                        placeholder='email'
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={(e) => this.changeHandler(e)}
                    />
                    <input
                        placeholder="password"
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={(e) => this.changeHandler(e)}
                    />
                    {/* <button className='first-signin-button'>Sign In</button> */}
                </form>
                {/* {this.props.location ? null : 
                <button className='click-register-button' onClick={this.props.toggle}>Need to Register?</button>
                } */}
            </div>
        );
    }
}

export default connect(null, {signin})(Signin);