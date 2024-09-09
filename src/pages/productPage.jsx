import React from 'react';
// import Header from '../components/header';
// import styled from 'styled-components';

// import BtnMore from '../components/btnMore';
import ProductTable from '../components/productTable';
import SearchBox from '../components/searchBox';


const Product = ({mainTitle}) => {
    
    // const mainBg = {backgroundImg: "url('./../public/images/main02.png')"}


    return (
        <div className='serviceWrap'>
          <div className='serviceArea'>
               <div className='titleBox'>
                    {/* <h2>고객센터</h2> */}
                   <div className='titleInner'>
                        <h2>{mainTitle}</h2>
                        <p>고객님의 제품 사용에 대한 이해를 돕기 위한 자료들입니다.</p>
                   </div>
               </div>
                <div className='navTitle'>
                    <span>홈</span>
                    <span>고객센터</span>
                    <span>제품사용</span>
                </div>
            </div>
      
            <div className=' width1200 productArea'>
                <div className='videoFrame'>
                    <iframe src="https://www.youtube.com/embed/ua1TQJmzOrE?si=PelSUkoCU75RbTzm" 
                   
                     ></iframe>
                </div>
                <div className='noteBox'>
                    <img src="../images/icon_note.png" alt="공지아이콘" />
                    <p>처음 구입하신 경우 사용설명서를 <strong>1회이상 꼭 읽어보고 사용하십시오.</strong></p>
                </div>
                <SearchBox></SearchBox>
                {/* <div className='searchArea'>
                    <span>전체<b>81</b></span>
                    <select name="" id="">
                        <option value="">전체</option>
                        <option value="">번호</option>
                    </select>
                   <div className=''>
                        <input type="text"   /> 
                        <button className='searchBtn'><img src="../images/icon_search.png" alt="돋보기" /></button>
                   </div>
                   <select name="" id="">
                        <option value="">최신순</option>
                        <option value="">날짜순</option>
                    </select>
                </div> */}
                <ProductTable></ProductTable>
            </div>

   

        </div>
    );
};

export default Product;