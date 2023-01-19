import React, {useState} from 'react';

import './Avatar.css';

const Avatar = () => {
    const [dropDownHidden, setDropDownHidden] = useState(true);
    const toggleDropDownList = () => {
        setDropDownHidden(dropDownHidden => !dropDownHidden ) 
    }
    return(
        <div className='avatar'>
            <img onClick={toggleDropDownList} 
            src="../Kanban-Board/logo/user-avatar.svg"  
            className='avatar-img' alt="User" />
            <img onClick={toggleDropDownList} 
            className='arrow' 
            src="../Kanban-Board/logo/arrow-down.svg" 
            alt="arrow-down" hidden={!dropDownHidden}/>
            <img onClick={toggleDropDownList} 
            src="../Kanban-Board/logo/arrow-up.svg" 
            alt="arrow-up" 
            className='arrow' hidden={dropDownHidden}/>
            <img  
            src="../Kanban-Board/logo/Diamond.svg" 
            alt="Diamond" hidden={dropDownHidden}/>
            <ul className='avatar-list' hidden={dropDownHidden}>
                <li ><a href='#'>{'Profile'}</a></li>
                <li ><a href='#'>{'Log Out'}</a></li>
            </ul>
        </div>
    )
}
export default Avatar