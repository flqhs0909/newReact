import React from 'react';

// import '../styles/global.css'
import { BrowserRouter, Link, Route, Routes  } from 'react-router-dom';

import ServicePage from '../pages/servicePage'

//컴포넌트
// rsf ( props 를 가진 컴포넌트 생성 ) 



// import Main from '../pages/main';

function Header(props) {
    
    // const servicePage =() =>{
    //     document.location.href('/pages/servicePage')
    // }
    // console.log(servicePage);
    return (
        <div className="main_container">
                <header>
                    <div className='header_container wdith1790'>
                      
                        <div className='header_inner '>
                            <h1>
                                <a>
                                    <img src="image/logo.png" alt="logo" />
                                </a>
                            </h1> 
                          
                                <nav>
                        
    
                                        <ul className='main_menu'>
                                            <li>
                                                <a >제품소개</a> 
                                                <ul className='sub_menu'>
                                                    <li><Link to='../pages/servicePage'>닥터88</Link></li>
                                                    <li><a href=''>닥터소닉</a></li>
                                                    <li><a href=''>닥터케이</a></li>
                                                    <li><a href=''>전용젤</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="">초음파 치료</a>
                                                <ul  className='sub_menu'>
                                                    <li><a  href=''>치료원리</a></li>
                                                    <li><a  href=''>관절염이란</a></li>
                                                    <li><a  href=''>특허 및 허가증</a></li>
                                            
                                                </ul>
                                            </li>
                                            <li><a href="">커뮤니티</a>
                                                <ul  className='sub_menu'>
                                                    <li><a  href=''>공지사항</a></li>
                                                    <li><a  href=''>컨텐츠</a></li> 
                                                </ul>
                                            </li>
                                            <li><a href="" >고객센터</a>
                                                <ul className='sub_menu'>
                                                    <li><a href="">제품사용</a></li>
                                                    <li><a  href=''>문의사항</a></li> 
                                                </ul>
                                            </li>
                                        </ul>
        
                                    <div className='sub_bg'></div>
                                </nav> 
                          
                                {/* < Route path='/servicePage' element={<ServicePage/>}> </Route > */}
                       
                            
                         
                        </div>
                        
                    </div>
                </header>
            

          
        
        </div>
    );
}

export default Header;