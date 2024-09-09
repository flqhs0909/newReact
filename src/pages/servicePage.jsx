import React from 'react';

import MoreBtn from '../components/moreBtn';


const ServicePage = (props) => {
    
    // const mainBg = {backgroundImg: "url('./../public/images/main02.png')"}

    

    return (
        <div className='serviceWrap'>
            <div className='serviceArea'>
               <div className='titleBox'>
                    {/* <h2>고객센터</h2> */}
                    <div className='titleInner'>
                        <h2>{props.mainTitle}</h2>
                        <p>㈜우성피앤씨는 고객과의 원활한 소통을 위해 항상 노력합니다.</p>
                    </div>
               </div>
                <div className='navTitle'>
                    <span>홈</span>
                    <span>고객센터</span>
                </div>
            </div>
       
            <div className='width1200 CScenterArea'>
                <div className='serviceCS'>
                    <p>궁금하신 사항은 언제든지 문의하세요.</p>
                    <b>고객의 만족을 위해 최선을 다하겠습니다.</b>
                    <ul >
                        <li>
                            <img src="../images/icon_call.png" alt="" />
                            <small>연락처</small>
                            <strong>1577-5983</strong>
                        </li>
                        <li>
                            <img src="../images/icon_Fax.png" alt="" />
                            <small>팩스</small>
                            <strong>031-776-0648</strong>
                        </li>
                        <li>
                            <img src="../images/icon_email.png" alt="" />
                            <small>이메일</small>
                            <strong>wspnc_1@naver.com</strong>
                        </li>
                    </ul>
                </div>
                <ul className='serviceBanner'>
                    <li>
                        <img src="../images/bannerImg_01.png" alt="제품사용" />
                        <strong>제품사용</strong>
                        <p>제품사용에 관한 설명서와 <br/> 동영상을 확인하실 수 있습니다.</p>
                        <MoreBtn></MoreBtn>
                    </li>
                    <li>
                        <img src="../images/bannerImg_02.png" alt="문의사항" />
                        <strong>문의사항</strong>
                        <p>제품에 대해 궁금하신 사항을<br/> 남겨주세요.</p>
                        <MoreBtn></MoreBtn>
                    </li>
                    <li>
                        <img src="../images/bannerImg_03.png" alt="자주 묻는 질문" />
                        <strong>자주 묻는 질문</strong>
                        <p>고객님들께서 자주 궁금해하시는<br/> 내용들을 모아두었습니다.</p>
                        <MoreBtn></MoreBtn>
                    </li>
                </ul>
             
            </div>
        </div>
    );
};
ServicePage.defaultProps = {
    mainTitle: '고객센터'
  }

export default ServicePage;