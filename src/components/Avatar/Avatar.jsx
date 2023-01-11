import React from 'react';

import './Avatar.css'

const Avatar = () => {
    return(
        <div className='avatar'>
            <img src="logo/user-avatar.svg" className='avatar-img' alt="User" />
            <img src="logo/arrow-down.svg" alt="show" />
            <img src="logo/arrow-up.svg" alt="hide" hidden/>
            <img src="logo/Dimont.svg" alt="hide" />
            <ul className='avatar-list'>
                <li ><a href='#'>{'Profile'}</a></li>
                <li ><a href='#'>{'Log Out'}</a></li>
            </ul>
        </div>
    )
}
export default Avatar