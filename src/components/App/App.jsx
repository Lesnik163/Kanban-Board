import React, {useState} from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import mockData from '../../mock-data/mock-data';

import './App.css';

function App() {
  const [boardState, setBoardState] = useState(mockData)
  return (
    <div className='wrapper'>
      <Header title="Awesome Kanban Board" />
      <Main boardState={boardState} setBoardState={setBoardState} />
      <Footer 
      activeTasks={boardState[0].issues.length} 
      finishedTask={boardState[3].issues.length}
      />
    </div>
  );
}

export default App;
