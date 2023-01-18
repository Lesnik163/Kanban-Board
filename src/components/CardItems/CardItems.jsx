import React from 'react';
import { Link } from 'react-router-dom';
import './CardItems.css';

const CardItems = ({cardObj}) => {
    const cardInfoArr =cardObj.issues //массив обьектов, описывающих карточки;
    return(
        <ul className='main-list'>
            {
                cardInfoArr.map((obj) => { 
                    return(<Link to={`tasks/${obj.id}`} key={obj.id}><li  className='main-listItem'>{obj.name}</li></Link>)      
            })
            }  
        </ul>
        
    )
}

export default CardItems;