import React from 'react';
import Avatar from '../Avatar/Avatar';
import './Header.css';
const Header = ({title}) => {
    return(
        <div className='header'>
            <span>{title}</span>
            <Avatar />
        </div>
    )
    
}

export default Header;