import React from 'react';
import '../../css/nav-bar.css';

const Nav = () => {
    return (
        <nav className="simple-nav">
            <div className="nav-inner">
                <a href="#Hero" className="nav-logo">{'{Dev.Louis}'}</a>
                <div className="nav-links">
                    <a href="#About">About</a>
                    <a href="#Services">Services</a>
                    <a href="#Clients">Projects</a>
                    <a href="#Partnerships">Partners</a>
                    <a href="#Contacts" className="nav-cta">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
