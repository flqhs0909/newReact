import { BrowserRouter, Route, Routes } from 'react-router-dom';


// css//
import './styles/reset.css'
import './styles/guide.css'
import './styles/global.css'
import './styles/main.css'
import './styles/fonts.css'

// page//
import Header from './components/header';
import SideBenner from './components/sideBenner';
import Main from './pages/mainPage';
import Footer from './components/footer';
import ServicePage from './pages/servicePage';
import Inquiry from './pages/inquiryPage';
import Product from './pages/productPage';
import Question from './pages/questionPage';
import CommunityPage from './pages/communityPage';



function App() {

  return (


    <div className="App">
        <Header></Header>
        <SideBenner></SideBenner>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/servicePage' element={<ServicePage/>}></Route>
          <Route path='/communityPage' element={<CommunityPage  />}></Route>

          <Route path='/inquiry' element={<Inquiry mainTitle ='문의사항'/>}></Route>
          <Route path='/product' element={<Product mainTitle ='제품사용'/>}></Route>
          <Route path='/question' element={<Question mainTitle ='자주묻는 질문'/>}></Route>
     
    
        </Routes>
        <Footer></Footer>  

    </div>
  );
}



export default App;
