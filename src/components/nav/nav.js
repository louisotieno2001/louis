import React, { useState } from 'react';
import '../../css/nav-bar.css'; // Import your CSS file if you have one

const Nav = () => {
    const [isSubHomeVisible, setSubHomeVisible] = useState(false);
    const [isTrapezoidHovered, setTrapezoidHovered] = useState(false);

    // Handle mouse enter for About and Contact links
    const handleMouseEnterAbout = () => {
        setSubHomeVisible(true);
        setTrapezoidHovered(true);
    };

    const handleMouseEnterContact = () => {
        setSubHomeVisible(true);
        setTrapezoidHovered(true);
    };

    // Handle mouse leave for About and Contact links
    const handleMouseLeaveAbout = () => {
        setSubHomeVisible(false);
        setTrapezoidHovered(false);
    };

    const handleMouseLeaveContact = () => {
        setSubHomeVisible(false);
        setTrapezoidHovered(false);
    };

    return (
        <div>
            <nav className="navbar">
                <div
                    id="trapezoid"
                    style={{ marginTop: isTrapezoidHovered ? '0px' : '-53px' }} // Adjust margin based on hover state
                    onMouseEnter={() => setTrapezoidHovered(true)} // Keep trapezoid hovered when mouse enters
                    onMouseLeave={() => {
                        setTrapezoidHovered(false);
                        setSubHomeVisible(false); // Hide Home link when leaving trapezoid
                    }}
                >
                    <a className="sub-home" style={{ display: isSubHomeVisible ? 'block' : 'none' }} href="#">Home</a>
                    <a
                        href="#About"
                        className="expandHome"
                        onMouseEnter={handleMouseEnterAbout}
                        onMouseLeave={handleMouseLeaveAbout}
                    >
                        About
                    </a>
                    <div className="subnav">
                        <button className="subnavbtn">
                            Clients<i className="fa fa-caret-down"></i>
                        </button>
                        <div className="subnav-content">
                            <div id="subnav-trapezoid">
                                <a href="#Clients">Pema-Kenya</a>
                                <a href="#Clients">Ticketsphere</a>
                                <a href="#Clients">Hustlerati</a>
                            </div>
                        </div>
                    </div>

                    <div className="subnav">
                        <button className="subnavbtn">
                            Services<i className="fa fa-caret-down"></i>
                        </button>
                        <div className="subnav-content">
                            <div className="subnav-trapezoid">
                                <a href="#Services">Web Dev</a>
                                <a href="#Services">Web & App Design</a>
                                <a href="#Services">Mobile App Dev</a>
                            </div>
                        </div>
                    </div>
                    <a
                        href="#Contacts"
                        className="expandHome"
                        onMouseEnter={handleMouseEnterContact}
                        onMouseLeave={handleMouseLeaveContact}
                    >
                        Contact
                    </a>
                </div>
            </nav>

           
        </div>
    );
};

export default Nav;
