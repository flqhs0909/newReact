import React from 'react';
// import LogoImage from '../../public/image/logo.png';

function Header(props) {
    return (
        <div className="main_container">
            <header>
                <div className='header_container'>
                    <div className='header_inner'>
                        <h1><a href=""><img src="image/logo.png" alt="logo" /></a></h1>
                        <nav>
                            <ul className='main_menu'>
                                <li>
                                    <a href="">제품소개</a>
                                    <ul className='sub_menu'>
                                        <li><a href=''>닥터88</a></li>
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
                                <li><a href="">고객센터</a>
                                    <ul className='sub_menu'>
                                        <li><a  href=''>제품사용</a></li>
                                        <li><a  href=''>문의사항</a></li> 
                                    </ul>
                                </li>
                            </ul>
                            <div className='sub_bg'></div>
                        </nav>
                    </div>
                </div>
            </header>
            
            <div className='main_tBox'>
                <p className="">With Us for your comfort life</p>
                <span>우성피앤씨와 함께 삶의 질을 높이세요</span>
            </div>
            
        </div>
    );
}

export default Header;