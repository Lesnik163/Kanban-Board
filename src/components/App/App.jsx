import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import DetailInformation from '../DetailInformation/DetailInformation';

import './App.css';
const initialBoardState = ['Backlog', 'Ready', 'In Progress', 'Finished'].map(title=>({title, issues:[]}))

function App() {
  const localStorageData = localStorage.getItem('boardState');
  const initialState = localStorageData ? JSON.parse(localStorageData) : initialBoardState;
  const [boardState, setBoardState] = useState(initialState);
  
  return (  
      <div className='wrapper'>
        <Header title="Awesome Kanban Board" />
        <Routes>
          <Route path='/' element={<Main boardState={boardState} setBoardState=  {setBoardState} />} />
          <Route path='tasks/:id' element={<DetailInformation boardState={boardState} />}/>
        </Routes>
        <Footer 
        activeTasks={boardState[0].issues.length} 
        finishedTask={boardState[3].issues.length}
        />
      </div>
  );
}

export default App;
