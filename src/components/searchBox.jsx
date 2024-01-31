import React from 'react';


const SearchBox = () => {

    
    return (
        <div className='searchArea'>
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
        </div>
       
    );
};

export default SearchBox;