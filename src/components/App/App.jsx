import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import FullSizePage from '../FullSizePage/FullSizePage';


import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <Header title="Awesome Kanban Board" />
      <Main />
      <Footer />
      <FullSizePage />
    </div>
  );
}

export default App;
