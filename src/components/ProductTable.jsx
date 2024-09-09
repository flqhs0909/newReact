import React from 'react';
import { useState , useEffect } from 'react';

import ProductUseList from './productUseList';
const ProductTable = () => {
    return (
        <table >
            {/* <colgroup>
                <col width="5%"/>
                <col width="60%"/>
                <col width="10%"/>
                <col width="10%"/>
                <col width="10%"/>
            </colgroup> */}
            <thead >
                <tr>
                    <td>번호</td>
                    <td>제목</td>
                    <td>작성자</td>
                    <td>작성일</td>
                    <td>추천</td>
                    <td>조회</td>
                </tr>
            </thead>
            {list.map((list) => <ProductUseList listDate={list} ></ProductUseList>) }
      
        </table>
        
        
    );

};

const list = [
    {
    num: 1,
    title: '골관절염 자가진단표',
    writer: '작성자',
    date: '2021.04.16',
    recommend: 0,
    views: 15
    },
    {
    num: 2,
    title: '골관절염 자가진단표',
    writer: '작성자',
    date: '2021.04.16',
    recommend: 0,
    views: 12
    },
    {
    num: 3,
    title: '4월29일(목) 오전 06시00분 홈앤쇼핑 생방송 예정입니다.',
    writer: '작성자',
    date: '2021.04.16',
    recommend: 0,
    views: 5
    },
];

export default ProductTable;