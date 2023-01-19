import React from 'react';
import './Button.css';

const Button = ({ name, ...rest }) => {
    return(
            <button 
                className='main-button'
                {...rest}
            >
                <img src='../Kanban-Board/logo/Plus.svg' alt='Plus'/>
                {name}
            </button>
    )
}
export default Button;