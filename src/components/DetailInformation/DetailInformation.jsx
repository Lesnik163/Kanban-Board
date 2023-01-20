import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import crossIcon from "../../logo/crossForClosing.svg";

import './DetailInformation.css'

const DetailInformation = ({boardState}) => {
    const navigate = useNavigate();
    const handleClick = ()=> {
        navigate('/Kanban-Board');
    }
    let [description, setDescription] = useState('This task has no description')
    const changeDescription = (evt) => {
        let newDescription = (prompt('Input new description, my honey!'));
        if(newDescription.length>0) {
            setDescription(newDescription);
        }
    }
    const params=useParams();
    let findColumn = boardState.find(obj => obj.issues.some(issObj=>issObj.id === params.id))
    const issue = findColumn.issues.find(iss=> iss.id === params.id);
    return(
        <div className='fullSizeMain'>
            <div className='fullSizeMain-wrapper'>
                <div className='fullSizeMain-container'>
                    <h2>{issue.name}</h2>
                    <button className='cross-button' onClick={()=>handleClick()}><img src={crossIcon}  style={{scale:4}}alt='Plus'/></button>
                </div>            
                <section 
                className='detail-information-section'
                onClick={(evt)=> changeDescription(evt)}>
                {description}
                </section>
            </div>
        </div>
    )
}
export default DetailInformation;