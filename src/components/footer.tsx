import React from 'react';

const Footer = () => {
    return (
        <div className="flex gap-3 p-6 bg-gray-500">
            <p>© 2024 Your Website. All rights reserved.</p>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
        </div>
    );
}

export default Footer;