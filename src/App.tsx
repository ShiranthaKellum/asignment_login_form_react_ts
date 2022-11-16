import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/homePage';
import LoginPage from './Pages/loginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/homePage';

function App() {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/homepage' element={<HomePage/>} />


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
