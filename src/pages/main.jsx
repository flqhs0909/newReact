
//컴포넌트
// rsc ( 화살표 함수 컴포넌트 생성) 


import React from 'react';
import { useState } from 'react';

import MoreBtn from '../components/btnMore';
// import ReactDOM from "react-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/main.css'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import drimg from '../image/DR.88.png'; // 이미지를 컴포넌트로 임포트 하기 *단, 이미지가 버블릭에 있으면 안됨.
import iconMore from '../image/icon_more.png'; 
import step1 from '../image/main_step01.png'; 
import step2 from '../image/main_step02.png'; 
import step3 from '../image/main_step03.png'; 
import result01 from '../image/main_result01.png'; 
import result02 from '../image/main_result02.png'; 
import company from '../image/main_company.png'; 
import plus from '../image/icon_plus.png'; 


import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { plus } from "src/image";


import BtnMore from '../components/btnMore';
import Header from '../components/header';
import Footer from './footer';
import { BrowserRouter } from 'react-router-dom';
  
// ReactDOM.render(<App />, document.getElementById("app"));
// const btnCompany ={
//     marginBottom: "100px"
// }


const Main = () => {
    const [notiTitle , setNotiTitle] = useState('홈쇼핑방송일정test');



    return (
        
       <div className=' main_content '>

            <Header></Header>

           <section className=' wdith1790'>
                <div className='main_tBox '>
                    <p className="">With Us for your comfort life</p>
                    <span>우성피앤씨와 함께 삶의 질을 높이세요</span>
                </div>
           </section>
          
           <div className='wdith1790'>
                <Swiper
                    // spaceBetween={30}
                    //margin-right: 30px;
                    centeredSlides={true}
                    // autoplay={{
                    //   delay: 2500,
                    //   disableOnInteraction: false,
                    // }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    // modules={[Autoplay, Pagination, Navigation]}
                    modules={[ Navigation]}
                    // className="mySwiper"
                >
                    <SwiperSlide>
                        <div className=''>
                            <span>DR.88</span>
                            <img className='slide_img' src={drimg} alt=""/>
                            
                        </div>
                        <div className='Dr_title width800'>
                            <div>
                                <strong>닥터88</strong>
                                <BtnMore></BtnMore>
                            </div>
                            <b>1MHz의 저강도 초음파로 연골세포의 활성화/증식을 유도하여 “골 관절염 치료”</b>
                            <small> (대학병원 2곳에서의 8주간 임상시험 결과 <b> 90% 이상 치료효과</b> 확인)</small>
                        </div>
                    
                    
                    </SwiperSlide>
                    <SwiperSlide>
                    
                        <div>
                            <span>22</span>
                            <img src={drimg} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    
                    <div>
                        <span>333</span>
                        <img src={drimg} alt=""/>
                    </div>
                    </SwiperSlide>
                </Swiper>
             
           </div>
        
      
        
      
            <div className='main_therapy '>
               <div className='therapy_inner'>
                    <p>골관절염? 치료됩니다!</p>
                    <a className='btn_rink'>
                        <b>제품구매 바로가기</b>
                        <img src={iconMore} alt="" />
                    </a>

               </div>
            </div>

            <section className='main_Principle width1200'>
                <h3 className='main_tit'>Principle</h3>
                <span>닥터케어 88플러스의 치료원리</span>
                <ul>
                    <li>
                        <span>step1</span>
                        <img src={step1} alt="" />
                        <p>닥터88플러스는 프로브를 통해<br/>1MHz의 저강도 초음파를 발생</p>

                    </li>
                    <li>
                        <span>step2</span>
                        <img src={step2} alt="" />
                        <p>저강도 초음파가 관절 내<br/> 연골세포를 자극하여 활성화 및 증식</p>

                    </li>
                    <li>
                        <span>step3</span>
                        <img src={step3} alt="" />
                        <p>활성화된 연골세포는 교원질을 생성하여 결과적으로 연골의 재생을 유도</p>

                    </li>
                </ul>
            </section>

           <div className='main_result'>
                <section className=' width1200'>
                    <h3 className='main_tit'>result</h3>
                    <span>임상실험 결과</span>
                    <div className='result_inner'>
                        <h4>국내 2개 대학병원 임상시험 완료</h4>
                        <p>A대학병원 91.7%, C대학병원 90.9%, 골관절염 치료효과 확인</p>
                        <ul>
                            <li>
                                <img src={result01} alt="" />
                                <ul className='resultImg_list'>
                                    <li>혈액부피 <mark>70.8%</mark> 감소 </li>
                                    <li>단백질량 <mark>25%</mark> 감소</li>
                                    <li>PGE2 <mark>33%</mark> 감소</li>
                                </ul>
                            </li>
                            <li>
                                <img src={result02} alt="" />
                                <ul className='resultImg_list'>
                                    <li>혈액부피 <mark>81.8%</mark> 감소  </li>
                                    <li>단백질량 <mark>40.9%</mark> 감소</li>
                                    <li>PGE2  <mark>31.8%</mark> 감소</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <ul className='result_btm'>
                        <li>가톨릭대학교 성바오로병원 2004.6.11-2004.8.6 무릎환부 기기+초음파용 젤 20분간 사용/22명/개인차 있음</li>
                        <li>아주대학교 병원 2004.6.1-2004.8.6 무릎환부 기기+초음파용 젤 20분간 사용/24명/개인차 있음</li>
                        <li>피시험자 선정기준 : 무릎 통증이 있는 환자, Kellgren-Lawrence radiographic grade 1~3인 슬관절 고관절염 환자, 피험자 동의서에 서명한 환자</li>
                        <li>WOMAC Survey(주관적 통증, 뻣뻣함, 기능에 대한 평가)를 통한 치료만족도(설문조사) 및 혈액검사를 한 내용임 </li>
                    </ul>

                </section>
           </div>
           <figure className='main_company width1200'>
                <div>
                    <h3 className='main_tit'>Woosung<br/> people & company </h3>
                    <BtnMore></BtnMore>
                    <p>(주)우성피앤씨는 연골세포, 심장세포, 신경세포를 연구개발하는<br/> 바이오벤처 회사입니다.</p>
                    <blockquote>
                        하버드 메디컬스쿨등 해외투자자가 투자한 외국인 투자 기업으로 <br/>
                        아주대학교와 가톨릭대학교 2곳의 대학병원에서 임상시험을 거쳐<br/> 
                        골관절염 초음파치료기를 식약처로부터 품목 허가를 받았고<br/> 
                        자가연골세포치료제 아티셀을 개발한 바이오벤처회사입니다.<br/>
                        의료기기 제조업체로서 의료기기법으로 정한 제조품질관리기준에
                        적합한 품질시스템을 운영함으로서 안전하고 품질이 검증된 
                        의료기기를 제조 공급하고 있습니다.
                    </blockquote>
                </div>
                <img src={company} alt="companyImg" />
           </figure>
           <div className='main_order'>
               <section className='main_notice width1200'>
                    <h3 className='main_tit'>notice</h3>
                    <span>공지사항</span>
                    <a href=""><img src={plus} alt="" /></a>
                    <ul>
                        <li>
                            <a href="" > 
                                <p> {notiTitle}  </p>
                                <time>2020-07-28 </time>
                            </a>
                        </li>
                        <li>
                            <a href="" > 
                                <p> 홈쇼핑 방송일정 입니다  </p>
                                <time>2020-07-28 </time>
                            </a>
                        </li>
                        <li>
                            <a href="" > 
                                <p>CJ오쇼핑 라이브방송일정입니다 </p>
                                <time>2020-07-28 </time>
                            </a>
                        </li>
                        <li>
                            <a href="" > 
                                <p> 홈앤쇼핑 라이브 방송 일정입니다  </p>
                                <time>2020-07-28 </time>
                            </a>
                        </li>
                    </ul>
               </section>
               <section className='main_archives width1200'>
                    <h3 className='main_tit'>archives</h3>
                    <span>자료실</span>
                    <a href=""><img src={plus} alt="" /></a>
                    <ul>
                        <li>
                            <a href="" > 
                                <p> 홈쇼핑 방송일정 입니다  </p>
                                <time>2020-07-28 </time>
                            </a>
                        </li>
                        <li>
                            <a href="" > 
                                <p> 홈쇼핑 방송일정 입니다  </p>
                                <time>2020-07-28 </time>
                            </a>
                        </li>
                        <li>
                            <a href="" > 
                                <p>CJ오쇼핑 라이브방송일정입니다 </p>
                                <time>2020-07-28 </time>
                            </a>
                        </li>
                        <li>
                            <a href="" > 
                                <p> 홈앤쇼핑 라이브 방송 일정입니다  </p>
                                <time>2020-07-28 </time>
                            </a>
                        </li>
                    </ul>
               </section>
           </div>
           <Footer></Footer>

       </div>
    );
};

export default Main;