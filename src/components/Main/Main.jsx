import React, {useState} from 'react';
import CardItems from '../CardItems/CardItems'
import mockData from '../../mock-data/mock-data'
import ColumnBottom from '../ColumnBottom/ColumnBottom';

import './Main.css'
const Main = () => {
    const [columnData, setColumnData] = useState(mockData);
    const createCard = (card) => {
        const indx = Math.round(Math.random() * 100 + 10);
        const newCard = {
            id: indx,
            name: card,
            description: 'Полное описание'
        }
        let newColumnData = [...columnData.map(el=>{
        if(el.title === 'Backlog') {
                el.issues.push(newCard)
                }
                return el
            }
        )];    
    setColumnData(newColumnData)
    }
    const replaceCard = (cardId, columnName) => {
        let targetCard 
        const preveusColumnIndex = columnData.findIndex(el=>el.title === columnName)
        let newColumnData = [...columnData.map((el,index)=>{
            if((preveusColumnIndex - 1) === index) {
                targetCard = el.issues.find(el=>el.id === cardId);
                el.issues = el.issues.filter(el=>el.id !== cardId)
            }
            if(el.title === columnName) {
                    el.issues.push(targetCard)
                    }
                    return el
                }
            )];    
        setColumnData(newColumnData)
    }
    return(
        <div className='main'>
            {columnData.map((obj, ind) => { 
                return(
                    <div key={obj.title} className='main-cards'>
                        <h2 className='main-header'>{obj.title}</h2>
                        <CardItems cardObj={obj}/>
                        <ColumnBottom 
                        title={obj.title} 
                        taskList={ind>0 && mockData[ind-1].issues}
                        createCard={createCard}
                        replaceCard={replaceCard}                       
                        />  {/* Начиная со второго объекта из 4х передаю issues */}  
                    </div>      
                    )
                } 
            )}
        </div>
    )
}
export default Main