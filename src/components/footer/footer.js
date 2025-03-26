import React from 'react';
import '../../css/footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2025 Louis The Developer. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#privacy">LinkedIn</a>
                    <a href="#terms">Github</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
