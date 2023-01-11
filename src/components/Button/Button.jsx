import React from 'react';

import './Button.css';

const Button = ({showHidden, newName}) => {
    return(
        <>
            <button 
            className='main-button'
            onClick={() => showHidden() } ><img src='./logo/Plus.svg' alt='Plus'/>  {newName}</button>
        </>
    )
}
export default Button;