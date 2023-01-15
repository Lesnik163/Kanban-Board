import React from 'react';
import CardItems from '../CardItems/CardItems'
import ColumnBottom from '../ColumnBottom/ColumnBottom';

import './Main.css'
const Main = ({boardState, setBoardState}) => {
    
    const createIssue = (name) => {
        if (!name) return
        setBoardState(boardState.map(column => ({
          ...column, 
          issues: column.title === 'Backlog'
            ? [
                ...column.issues, {
                    id: crypto.randomUUID(),
                    name,
                    description: "This task has no description"
                    }
                ]
            : column.issues
            })
        ))
      }
      const replaceIssue = (currentColumnTitle, targetColumnTitle, issue) => {
        if (!issue) return
        setBoardState(boardState.map(column => ({
          ...column,
          issues: currentColumnTitle === column.title
            ? [...column.issues.filter(({ id }) => id !== issue.id)]
            : targetColumnTitle === column.title
              ? [...column.issues, issue]
              : [...column.issues]
        })))
      }

    return(
        <div className='main'>
            {boardState.map((obj, ind) => (
                <div key={obj.title} className='main-cards'>
                    <h2 className='main-header'>{obj.title}</h2>
                    <CardItems cardObj={obj} />
                    <ColumnBottom 
                        column={obj}
                        previousColumn={ind>0 && boardState[ind-1]}
                        createIssue={createIssue}
                        replaceIssue={replaceIssue}
                    />  {/* Начиная со второго объекта из 4х передаю issues */}  
                </div>      
            ))}
        </div>
    )
}
export default Main