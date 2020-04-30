import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header-main'>
            <h2>RΣMA</h2>
            <link1>Home</link1>
            <link2>Study</link2>
            <link3>Vocab List</link3>
            <select id='settings'>Settings</select>
                <option value='update-password'>Update Password</option>
        </header>
    )
}

export default Header;