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
                        <td>{noticeData.num}</td>
                        <td className='listDateTitle'>{noticeData.title}</td>
                        <td>{noticeData.writer}</td>
                        <td>{noticeData.date}</td>
                        <td>{noticeData.recommend}</td>
                        <td>{noticeData.views}</td>
                    </tr> 
                     ))}
                </tbody>
            </table>
        
        
    );

};

export default NoticeTable;