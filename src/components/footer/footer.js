import React, { useState, useEffect } from 'react';
import '../../css/footer.css';

const Footer = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {date.getFullYear()} Louis The Developer. All rights reserved.</p>
                <p className="footer-date">{date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/louis-ochieng-947698357/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/louisotieno2001" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
