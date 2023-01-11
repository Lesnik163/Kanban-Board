import React, {useState} from 'react';
import Button from '../Button/Button'

const ColumnBottom = ({title, taskList, createCard, replaceCard}) => {
    const [hidden, setHidden] = useState(true);
    const [buttonName, setButtonName] = useState('Add card')
    let initialValue = ''; 
    if(title !== 'Backlog'){
        initialValue = taskList[0].name;
        console.log(initialValue, 'initialValue')
    }
    const [value, setValue] = useState(initialValue)
    console.log(title , value)
    const showHiddenAndRename = () => { 
        let newButtonName = 'Submit';
        setButtonName(newButtonName)
        setHidden(false);
        
        if(title === 'Backlog' && buttonName === 'Submit') {
            if(value) {
                createCard(value);
                let oldButtonName = 'Add card';
                setButtonName(oldButtonName);
                setHidden(true);
                setValue('');
                   
            }
            return 
        }
        if(buttonName === 'Submit') {
            const cardId = taskList.find(el => el.name === value).id
            replaceCard(cardId, title);
            let oldButtonName = 'Add card';
            setButtonName(oldButtonName); 
            setHidden(true);
           
        }

    }
    const onInputHandle = (evt) => {
        console.log(evt.target.value, 'fff') 
        let newValue = evt.target.value; 
        if(newValue !== '') return setValue(newValue)  
    }

    return(
        <>
                {!hidden && (title === 'Backlog'
                    ? <input type='text' placeholder='add card' 
                    onChange={(evt) => onInputHandle(evt)} value={value}/>
                    : <select onChange={(evt) => onInputHandle(evt)} value={value}>
                        {taskList.map(cardInfo =><option key={cardInfo.id} >{cardInfo.name}</option>)}
                    </select>
                    ) 
                }   
                <Button 
                showHidden={showHiddenAndRename}
                newName={buttonName}
                />
        </>
        
                        
    )
}
export default ColumnBottom;