import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Header.css';

const Header = () => {
    return (
        <header className='header-main'>
            <div className='app-name'>
                 <h2>RΣMA</h2>
            </div>
            <div className='home-links'>
                <Link className='links'>Home</Link>
                <Link className='links'>Study</Link>
                <Link className='links'>Vocab</Link>
                <Link className='links'>Settings</Link>
            </div>
        </header>
    )
}

export default Header;