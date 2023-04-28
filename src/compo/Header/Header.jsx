import React from 'react';

const Header = () => {
    return (
        <div>
            <ul style={{display:'flex',gap:'20px'}}>
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
            </ul>
        </div>
    );
};

export default Header;