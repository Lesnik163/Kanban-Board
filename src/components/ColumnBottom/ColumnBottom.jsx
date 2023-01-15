import React, {useState} from 'react';
import Button from '../Button/Button'

const buttonNames = { add: 'Add card', submit: 'Submit' }
const buttonClickTypes = { createIssue: 'CREATE_ISSUE', replaceIssue: 'REPLACE_ISSUE', showInput: 'SHOW_INPUT' }

const ColumnBottom = ({ column, previousColumn, createIssue, replaceIssue}) => {
    const [buttonName, setButtonName] = useState('Add card')
    const [issueNameValue, setIssueNameValue] = useState('')
    const isBacklog = column.title === 'Backlog'
    const [selectedIssue, setSelectedIssue] = useState(!isBacklog ? previousColumn.issues[0] : undefined)

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
            case buttonClickTypes.replaceIssue:
                replaceIssue(previousColumn.title, column.title, selectedIssue)
                setSelectedIssue(previousColumn.issues.filter(({ id }) => id !== selectedIssue?.id)[0]);

                setButtonName(buttonNames.add);
                break;
        
            default:
                setButtonName(buttonNames.add);
                break;
        }
    }
    const isInputComponentHidden = buttonName === buttonNames.add;
    const buttonDisabled = isInputComponentHidden && !isBacklog && !previousColumn.issues.length;
     
    if(isBacklog) {
        console.log(column.issues.length)  
    }
    return(
        <>
            {isInputComponentHidden || (
                isBacklog
                    ? (
                        <input
                            type='text'
                            onChange={e => setIssueNameValue(e.target.value)}
                        />
                    )
                    : (
                        <select 
                            onChange={e => setSelectedIssue(previousColumn.issues.find(({ id }) => id === e.target.value))}
                        >
                            {previousColumn.issues.map(issue => (
                                <option key={issue.id} value={issue.id}>
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