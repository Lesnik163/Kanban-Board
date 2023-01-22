import React, {useState, useEffect} from 'react';
import Button from '../Button/Button';

import './ColumnBottom.css';

const buttonNames = { add: 'Add card', submit: 'Submit' };
const buttonClickTypes = { createIssue: 'CREATE_ISSUE', replaceIssue: 'REPLACE_ISSUE', showInput: 'SHOW_INPUT' }

const ColumnBottom = ({ column, previousColumn, createIssue, replaceIssue}) => {
    const [buttonName, setButtonName] = useState('Add card')
    const [issueNameValue, setIssueNameValue] = useState('')
    const isBacklog = column.title === 'Backlog'
    const [selectedIssue, setSelectedIssue] = useState(!isBacklog ? previousColumn.issues[0] : undefined);
    useEffect(() => {
        if (!isBacklog && !selectedIssue) {
            setSelectedIssue(previousColumn?.issues[0])
        }
    }, [isBacklog, previousColumn.issues, selectedIssue]);

    const buttonClickType = buttonName === buttonNames.add
        ? buttonClickTypes.showInput
        : isBacklog
            ? buttonClickTypes.createIssue
            : buttonClickTypes.replaceIssue;

    const handleClick = () => {
        switch (buttonClickType) {
            case buttonClickTypes.showInput:
                setButtonName(buttonNames.submit)
                break;
            case buttonClickTypes.createIssue:
                createIssue(issueNameValue);
                setButtonName(buttonNames.add);
                setIssueNameValue('');
                break;
            case buttonClickTypes.replaceIssue:{
                replaceIssue(previousColumn.title, column.title, selectedIssue)
                setSelectedIssue(previousColumn.issues.find(({ id }) => id !== selectedIssue?.id));
                setButtonName(buttonNames.add);
                break;
            }
                
        
            default:
                setButtonName(buttonNames.add);
                break;
        }
    }
    const isInputComponentHidden = buttonName === buttonNames.add;
    const buttonDisabled = isInputComponentHidden && !isBacklog && !previousColumn.issues.length;
     
    return(
        <>
            {isInputComponentHidden || (
                isBacklog
                    ? (
                        <input 
                            className='columnbottom-input'
                            type='text'
                            onChange={e => setIssueNameValue(e.target.value)}
                        />
                    )
                    : (
                        <select 
                            className='columnbottom-section'
                            onChange={e => setSelectedIssue(previousColumn.issues.find(({ id }) => id === e.target.value))}
                        >
                            {previousColumn.issues.map(issue => (
                                <option className='columnbottom-option' key={issue.id} value={issue.id}>
                                    {issue.name}
                                </option>
                            ))}
                        </select>
                    )
                )
            }
            <Button 
                name={buttonName}
                onClick={handleClick}
                disabled={buttonDisabled}
            />
        </>
        
                        
    )
}

export default ColumnBottom