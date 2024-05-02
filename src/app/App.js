import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Results from './Components/Results';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import Chat from './Components/Chat';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Results' element={<Results />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Chat' element = {<Chat/>}/>
      </Routes>
    </div>
  );
}

export default App;
