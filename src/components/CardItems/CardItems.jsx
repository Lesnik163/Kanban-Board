import React from 'react';

import './CardItems.css';

const CardItems = ({cardObj}) => {
    const cardInfoArr =cardObj.issues //массив обьектов, описывающих карточки;
    return(
        <ul className='main-list'>
            {
                cardInfoArr.map((obj) => { 
                    return(<li key={obj.id} className='main-listItem'>{obj.name}</li>)      
            })
            }  
        </ul>
        
    )
}

export default CardItems;