import React, { useEffect }  from 'react';
import { useState } from 'react';



import NoticeTable from '../components/noticeTable';
import SearchBox from '../components/searchBox';

import dummy from '../dummy.json';
// import { tab } from '@testing-library/user-event/dist/tab';



const CommunityPage = () => {
    const [clickTab , setClickTab] =useState('공지사항');


    return (
        <div className='serviceWrap'>
       
            <div className='serviceArea'>
               <div className='titleBox'>
                    {/* <h2>고객센터</h2> */}
                    <div className='titleInner'>
                        <h2>{clickTab}</h2>
                        <p>(주)우성피앤씨는 고객과의 원활한 소통을 위해 항상 노력합니다.</p>
                    </div>
               </div>
                <div className='navTitle'>
                    
                    <span>홈</span>
                    <span>커뮤니티</span>
                    <span >{clickTab}</span>
                </div>
            </div>
         
       

            <section className='commSectionArea  width1200'>
                <ul>
                    { dummy.communityTitle.map(communityTitle =>
                    <li key={communityTitle.id}
                        onClick={()=> setClickTab(communityTitle.tab)}
                        // onClick={change}
                        
                    >
                        <span >{communityTitle.tab}</span>
                    </li>
                    )}
                </ul>
                <SearchBox></SearchBox>
                <NoticeTable clickTab={clickTab} ></NoticeTable>


        
            </section>
            
        </div>
    );
};




export default CommunityPage;