import React from 'react';
import Header from '../components/header';
import styled from 'styled-components';

import BtnMore from '../components/btnMore';


const Inquiry = ({mainTitle}) => {
    
    // const mainBg = {backgroundImg: "url('./../public/images/main02.png')"}

    

    return (
        <div className='serviceWrap'>
          <div className='serviceArea'>
               <div className='titleBox'>
                    {/* <h2>고객센터</h2> */}
                    <h2>{mainTitle}</h2>
                    <p>궁금하신 내용을 여기에 남겨주세요.</p>
               </div>
            </div>
            <section className='subNavArea'>
                <div className='navTitle'>
                    <span>홈</span>
                    <span>고객센터</span>
                    <span>문의사항</span>
                </div>
           </section>
            <div className='contentArea inquiryArea'>
               <section>
                    <p>(주)우성피엔씨에 문의주셔서 감사드립니다.</p>
                    <span>담당자가 빠른 시일 내에 답변드릴 예정입니다.</span>
               </section>
               <form>
                    <div>
                        <label htmlFor="name">이름</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="e-mail">이메일</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="poneNem">전화번호</label>
                        <input type="text" />
                    </div>
                    <div className='question'>
                        <label htmlFor="question">문의사항</label>
                        <input type="text" />
                        
                    </div>
                    <label>
                        <input type="checkbox" />
                        <span>개인정보보호정책과 마케팅활용에 동의합니다.</span>
                    </label>
                </form>
                <button >제출하기</button>

            </div>
           

        </div>
    );
};

export default Inquiry;