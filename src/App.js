import logo from './logo.svg';
// import './App.css';
import './styles/reset.css'

// import {
//   HashRouter as Router,
//   Route
// } from 'react-router-dom';

// import ReactDOM from "react-dom";

import './styles/guide.css'
import './styles/global.css'
import './styles/main.css'
import './styles/fonts.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Main from './pages/main';
import Footer from './pages/footer';
import ServicePage from './pages/servicePage';





function App() {
  return (
    <div className="App">
  

        {/* <Header></Header> */}
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='pages/servicePage' element={<ServicePage/>}>
            
          </Route>
    
        </Routes>
            {/* <Footer></Footer>   */}

    </div>
  );
}

export default App;
