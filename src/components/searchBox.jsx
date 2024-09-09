import React, { useState , useEffect } from 'react';
import dummmy from'../dummy.json';

const SearchBox = () => {

    const [searchInput , setsearchInput] =useState('');


    const searchItems = (searchValue) => {
        setsearchInput(searchValue)
      
        console.log("searchValue", searchValue);
    }
    return (
        <div className='searchArea'>
            <p>전체<span>81</span></p>
            <select name="" id="">
                <option value="">전체</option>
                <option value="">번호</option>
            </select>
            <div className=''>
                    <input type="text"
                        onChange={(e)=>searchItems(e.target.value)}
                    /> 
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