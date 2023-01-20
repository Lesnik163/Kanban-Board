import React, {useState} from 'react';
import userAvatar from "../../logo/user-avatar.svg";
import arrowDawn from "../../logo/arrow-down.svg";
import arrowUp from "../../logo/arrow-up.svg";
import diamond from "../../logo/Diamond.svg";

import './Avatar.css';

const Avatar = () => {
    const [dropDownHidden, setDropDownHidden] = useState(true);
    const toggleDropDownList = () => {
        setDropDownHidden(dropDownHidden => !dropDownHidden ) 
    }
    return(
        <div className='avatar'>
            <img onClick={toggleDropDownList} 
            src={userAvatar} 
            className='avatar-img' alt="User" />
            <img onClick={toggleDropDownList} 
            className='arrow' 
            src={arrowDawn} 
            alt="arrow-down" hidden={!dropDownHidden}/>
            <img onClick={toggleDropDownList} 
            src={arrowUp} 
            alt="arrow-up" 
            className='arrow' hidden={dropDownHidden}/>
            <img  
            src={diamond} 
            alt="Diamond" hidden={dropDownHidden}/>
            <ul className='avatar-list' hidden={dropDownHidden}>
                <li ><a href='#'>{'Profile'}</a></li>
                <li ><a href='#'>{'Log Out'}</a></li>
            </ul>
        </div>
    )
}
export default Avatar