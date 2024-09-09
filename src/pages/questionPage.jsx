import React, { useState } from "react";


const Question = ({mainTitle}) => {
    
    // const mainBg = {backgroundImg: "url('./../public/images/main02.png')"}
    const [ toggle , setToggle] = useState(false);
    

    const dropDown = (e) => {
       e.currentTarget.classList.toggle('active')
    }



  


   
    


    return (
        <div className='serviceWrap'>
          <div className='serviceArea'>
               <div className='titleBox'>
                    {/* <h2>고객센터</h2> */}
                   <div className='titleInner'>
                        <h2>{mainTitle}</h2>
                        <p>고객님들께서 자주 질문하시는 내용들을<br/> 보기 쉽게 정리 했습니다</p>
                   </div>
               </div>
                <div className='navTitle'>
                    <span>홈</span>
                    <span>고객센터</span>
                    <span>자주묻는 질문</span>
                </div>
            </div>
          
            <div className='width1200 questionArea'>
                <div className='searchBox'>
                    <input type="text" placeholder = '검색어를 입력하세요'  /> 
                    <button className='searchBtn'><img src="../images/icon_search.png" alt="돋보기" /></button>
                </div>
                <section className='questionInner'>
                    <ul>
                        <li>
                            <div
                           
                                onClick={dropDown}
                                // className={toggle ? 'active ': ""}
                                // onClick={handleClick}.
                                
                                // className = { toggle === false ? '' : 'active'  }  
                                >
                                <p>11닥터88을 만든회사는 어떤 회사인가요?</p>
                                <img src="../images/icon_open.png" alt="열기버튼" />
                                <img src="../images/icon_close.png" alt="닫기버튼" />
                            </div>
                            <div className='hidenBox'>
                                <p>
                                    닥터88을 제조하는 ㈜우성피앤씨는 연골세포, 심장세포, 신경세포를 연구개발하는 바이오벤처 회사이며
                                    하버드 메디컬스쿨등 해외투자자가 투자한 외국인 투자 기업입니다.
                                    아주대학교와 가톨릭대학교 2곳의 대학병원에서 임상시험을 거쳐 골관절염 초음파치료기를
                                    식약처로부터 품목 허가를 받은 개발업체입니다.
                                    또한 자가연골세포치료제 아티셀을 개발한 바이오벤처회사입니다.
                                    의료기기 제조업체로서 의료기기법으로 정한 제조품질관리기준에 적합한 품질시스템을 운영함으로서
                                    안전하고 품질이 검증된 의료기기를 제조 공급하고 있습니다.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div
                               
                               onClick={dropDown}
                                // className={toggle === false ? '' : 'active'  }
                                >
                                <p>22닥터88을 만든회사는 어떤 회사인가요?</p>
                                <img src="../images/icon_open.png" alt="열기버튼" />
                                <img src="../images/icon_close.png" alt="닫기버튼" />
                            </div>
                            <div className='hidenBox'>
                                <p>
                                    닥터88을 제조하는 ㈜우성피앤씨는 연골세포, 심장세포, 신경세포를 연구개발하는 바이오벤처 회사이며
                                    하버드 메디컬스쿨등 해외투자자가 투자한 외국인 투자 기업입니다.
                                    아주대학교와 가톨릭대학교 2곳의 대학병원에서 임상시험을 거쳐 골관절염 초음파치료기를
                                    식약처로부터 품목 허가를 받은 개발업체입니다.
                                    또한 자가연골세포치료제 아티셀을 개발한 바이오벤처회사입니다.
                                    의료기기 제조업체로서 의료기기법으로 정한 제조품질관리기준에 적합한 품질시스템을 운영함으로서
                                    안전하고 품질이 검증된 의료기기를 제조 공급하고 있습니다.
                                </p>
                            </div>
                        </li>
                    </ul>

                </section>
            </div>
           

        </div>
    );
};


    
export default Question;