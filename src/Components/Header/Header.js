import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Header.css';

const Header = () => {
    return (
        <header className='header-main'>
            <h2>RΣMA</h2>
            <Link>Home</Link>
            <Link>Study</Link>
            <Link>Vocab List</Link>
            <select id='settings'>Settings</select>
                <option value='update-password'>Update Password</option>
        </header>
    )
}

export default Header;