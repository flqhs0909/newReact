import React from 'react';

import logo from '../image/logo_W.png'
import icon_call from '../image/icon_call.png'


const Footer = () => {
    return (
        <footer className=''>
            <div className='width1200 footerWrap'>
                <div className=''>
                    <ul className=''>
                        <li> <a href="">이용약관</a></li>
                        <li> <a href="">개인정보보호정책</a></li>
                        <li> <a href="">문의하기</a></li>
                    </ul>
                    <div>
                        <ul className='socialArea'>
                            <li><a href="">facebook</a></li>
                            <li><a href="">instagram</a></li>
                            <li><a href="">blog</a></li>
                        </ul>
                        
                        <a className='contact' >
                            <img src={icon_call} alt="icon_call" />
                            <span>대표번호 1577-5983</span>
    
                        </a>
                    </div>
                </div>
                
                <address>
                    <a href="">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className='footer_info'>
                        <p>(주)우성피앤씨</p>
                        <span>대표자: 박도현</span>
                        <span>개인정보보호책임자: 박도현</span>
                        <span>주소:경기도 용인시 기흥구 중부대로 184, 힉스유타워 A동 901-1호,1206호</span>
                        <span>사업자등록번호 : 129-86-58447</span>
                        
                        <span>FAX: 031-630-5226</span>
                        <a href='mailto:wspnc_1@naver.com'>E-mail:wspnc_1@naver.com</a>
                        <small>Copyright(c) (주)우성피앤씨. All Rights Reserved.</small>
                    </div>
                </address>
            </div>
        </footer>
    );
};

export default Footer;