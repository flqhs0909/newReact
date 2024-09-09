import React from 'react';
import Header from '../components/header';
import styled from 'styled-components';
import MoreBtn from '../components/moreBtn';


const Inquiry = ({mainTitle}) => {
    
    // const mainBg = {backgroundImg: "url('./../public/images/main02.png')"}

    

    return (
        <div className='serviceWrap'>
          <div className='serviceArea'>
               <div className='titleBox'>
                    {/* <h2>고객센터</h2> */}
                 <div className='titleInner'>
                        <h2>{mainTitle}</h2>
                        <p>궁금하신 내용을 여기에 남겨주세요.</p>
                 </div>
               </div>
                <div className='navTitle'>
                    <span>홈</span>
                    <span>고객센터</span>
                    <span>문의사항</span>
                </div>
            </div>
         
            <div className='width1200 inquiryArea'>
               <section>
                    <p>(주)우성피엔씨에 문의주셔서 감사드립니다.</p>
                    <span>담당자가 빠른 시일 내에 답변드릴 예정입니다.</span>
               </section>
               <form>
                    <div>
                        <label htmlFor="userName">이름</label>
                        <input id='userName' type="text" placeholder="이름"/>
                    </div>
                    <div>
                        <label htmlFor="userEmail">이메일</label>
                        <input id='userEmail' type="email" placeholder="이메일"/>
                    </div>
                    <div>
                        <label htmlFor="userPoneNumb">전화번호</label>
                        <input id='userPoneNumb' type="" placeholder="전화번호"/>
                    </div>
                    <div className='question'>
                        <label htmlFor="userQuestion">문의사항</label>
                        <textarea id='userQuestion' defaultValue="문의사항을 입력하세요"/>
                        
                    </div>
                    <div className='consentBox'>
                        <input id='consent' type="checkbox" />
                        <label htmlFor='consent'>개인정보보호정책과 마케팅활용에 동의합니다.</label>
                    </div>
                </form>
                <button type='submit' >제출하기</button>

            </div>
           

        </div>
    );
};

export default Inquiry;