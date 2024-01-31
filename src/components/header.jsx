import React, { useState ,useEffect } from 'react';

// import '../styles/global.css'
import { Link, useNavigate , useLocation} from 'react-router-dom';

import ServicePage from '../pages/servicePage'

import dummy from '../dummy.json';


// import Main from '../pages/main';
 

function Header() {
    let Navigate = useNavigate();
    const [commTitle , setCommTitle] = useState([]);
    const [scrolling , setScrolling] = useState(false);

    const header = document.querySelector("header");

    useEffect(()=>{
    window.addEventListener('scroll', function(){
        setScrolling(window.scrollY > 0) 
    }) 
    },[])


    return (

     
        <header className ={  scrolling === true ? "active" : null}>
            <div className='headerContainer'>
                
                <div className='headerInner'>
                    <h1>
                        <Link to ='/'>
                            <img src="/images/logo.png" alt="logo" />
                        </Link>
                    </h1> 
                    
                        <nav>
                            <div className='subBg'></div>
                            <ul className='mainMenu'>
                                <li>
                                    <span >제품소개</span> 
                                    <ul className='subMenu'>
                                        {/* <li><Link to='../pages/servicePage'>닥터88</Link></li> */}
                                        <li>< span >닥터88</span></li>
                                        <li><span >닥터소닉</span></li>
                                        <li><span >닥터케이</span></li>
                                        <li><span >전용젤</span></li>
                                    </ul>
                                </li>
                                <li><span >초음파 치료</span>
                                    <ul  className='subMenu'>
                                        <li><span>치료원리</span></li>
                                        <li><span>관절염이란</span></li>
                                        <li><span>특허 및 허가증</span></li>
                                
                                    </ul>
                                </li>
                                <li><span onClick={()=> {Navigate('/communityPage')}} >커뮤니티</span>
                                    <ul className='subMenu'>
                                        { dummy.communityTitle.map(communityTitle =>
                                        <li key={communityTitle.id}
                                            onClick={()=> setCommTitle(communityTitle.tab)}
                                    
                                            
                                        >
                                            <span >{communityTitle.tab}</span>
                                        </li>
                                        )}
                                    </ul>

                                    {/* <ul  className='sub_menu'>
                                        <li><span onClick={()=> {Navigate('/communityPage')}} >공지사항</span></li>
                                        <li><span  onClick={()=> {Navigate('/communityPage')}}>컨텐츠</span></li> 
                                        <li><span  onClick={()=> {Navigate('/communityPage')}}>미디어</span></li> 
                                    </ul> */}
                                </li>
                                <li><span  onClick={()=>{Navigate('/ServicePage')} } >고객센터</span>
                                    <ul className='subMenu'>
                                        <li><span  onClick={()=>{Navigate('/Product')}}>제품사용</span></li>
                                        <li><span onClick={()=>{Navigate('/Inquiry')}}>문의사항</span></li> 
                                        <li><span onClick={()=>{Navigate('/Question')}}>자주묻는 질문</span></li> 
                                    </ul>
                                </li>
                            </ul>

                         
                        </nav> 
                    
                        {/* < Route path='/servicePage' element={<ServicePage/>}> </Route > */}
                
                    
                    
                </div>
                
            </div>
        </header>
     
    );
}


 

export default Header;