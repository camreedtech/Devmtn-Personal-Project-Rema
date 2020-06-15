import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='home-footer'>
        <div id="copyright">
        <ul>
            <li className="copyr">&copy; RΣMA. All rights reserved | Developed and Designed by Cameron Reed.</li>
            {/* <li className=>Design: <a href="https://html5up.net">HTML5 UP</a></li> */}
            </ul>
        </div>
        </footer>

    )
}

export default Footer;