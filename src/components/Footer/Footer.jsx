import React from 'react';

import './Footer.css';
const Footer = ({ activeTasks, finishedTask}) => {
    return(
        <div className='footer'>
            <span>Active tasks {activeTasks} Finished tasks {finishedTask}</span>
            <span>Kanban Board by Dmitrii , 2023</span> 
        </div>
    )
}
export default Footer;