import React from 'react';

class Password extends Component {
    constructor() {
        super();
        this.state = {
            password: []
        }
        this.updatePassword = this.updatePassword.bind(this)
    }

    updatePasswordHandler () {
        this.props
        .update(this.state)
        .then(() => {
            this.props.redirect();
        })
        .catch((err) => console.log('Error updating password', err));
    }

    changeHandler(e) {
        this.setState({
            [e.target.password]: e.target.value
        });
    }


    render() {
        return (
            <div className='update-password-main'>

                <form onSubmit={this.updatePasswordHandler}>
                    <input 
                    className='update-password-input'
                    placeholder='New Password'
                    type='text'
                    name='newPassword'
                    value={this.state.password}
                    onChange={(e) => this.changeHandler(e)}
                    />
                </form>

                {/* <button> </button> // do I need the button here?  */}

            </div>
            
        )
    }
}

export default Password;