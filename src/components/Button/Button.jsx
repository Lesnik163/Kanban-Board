import React from 'react';
import './Button.css';
import plus from "../../logo/Plus.svg";

const Button = ({ name, ...rest }) => {
    return(
            <button 
                className='main-button'
                {...rest}
            >
                <img src={plus} alt='Plus'/>
                {name}
            </button>
    )
}
export default Button;