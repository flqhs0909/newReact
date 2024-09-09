import React from 'react';
import { useState , useEffect } from 'react';
import dummmy from'../dummy.json';



const NoticeTable = ({ clickTab }) => {

    // const [noticeData , setNoticeData ] = useState([]);
    // const [tabData , setTabData ] = useState({clickTab});
    const [tabList , setTabList] = useState([]);
    
    
    useEffect(()=>{
        setTabList(dummmy.noticeData.filter(tab=>(tab.tab === clickTab)))
        
    },[clickTab])


    return (
        <table >
            <thead>
                <tr>
                    <td>번호</td>
                    <td>제목</td>
                    <td>작성자</td>
                    <td>작성일</td>
                    <td>추천</td>
                    <td>조회</td>
                </tr>
            </thead>
          
            <tbody>
                {tabList.map( noticeData =>(
                    <tr >
                        <td date-label="번호" className='listNum'>{noticeData.num}</td>
                        <td date-label="제목" className='listDateTitle'>{noticeData.title}</td>
                        <td date-label="작성자" className='listwriter'>{noticeData.writer}</td>
                        <td date-label="작성일" className='listDate'>{noticeData.date}</td>
                        <td date-label="추천" className='listRecommend'>{noticeData.recommend}</td>
                        <td date-label="조회" className='listViews'>{noticeData.views}</td>
                    </tr> 
                     ))}
                </tbody>
            </table>
        
        
    );

};

export default NoticeTable;