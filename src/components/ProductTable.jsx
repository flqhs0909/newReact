import React from 'react';
import { useState , useEffect } from 'react';

import ProductUseList from './ProductUseList';
const ProductTable = () => {
    return (
        <table >
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
            
            {/* <tbody>
                <tr>
                    <td>{list.num}</td> 
                    <td>{list.title}</td>
                    <td>{list.writer}</td>
                    <td>{list.date}</td>
                    <td>{list.recommend}</td>
                    <td>{list.views}</td>
                </tr>
                <tr>
                    <td>67</td>
                    <td>골관절염자가진단표</td>
                    <td>작성자</td>
                    <td>2021.04.16</td>
                    <td>0</td>
                    <td>15</td>
                </tr>
            </tbody> */}
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