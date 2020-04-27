import React from 'react';
import {connect} from 'react-redux';
import {signout} from '../../redux/reducers/' // check this line 

class Signout extends React.Component {
    constructor(props) {
        super(props)
        this.signoutHandler = this.signoutHandler.bind(this)
    }
    signoutHandler(){
        this.props.signout().then(() => {

        }).catch(err => console.log('Error Signing out', err))
    }
    render() {
        return(
            <div>
                <button className='signout-button' onClick={this.signoutHandler}
                >Signout</button>
                <div className='Welcome-username'>Welcome, {this.props.user.data.email}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state

const mapDispatchToProps = {signout}

export default connect (mapStateToProps, mapDispatchToProps)(Signout);
