import './App.css';
import Header from './Components/Header';
import './Styles/belowHeader.css';
import {Route, Routes  } from 'react-router-dom';
import BelowHeader from './Components/BelowHeader';
import Sidebar from './Components/Sidebar';
import Search from './Components/Search';

function App() {
  return (
    <div className="app">
      <Header/>
       <Routes>
          <Route path='/search/:searchTerm' element={<Search/>} >Home page</Route>
          <Route path='/' element={<BelowHeader/>} ></Route>
       </Routes>
    </div>
  );
}

export default App;
