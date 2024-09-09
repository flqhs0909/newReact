import React from 'react';

const ProductUse = ({listDate}) => {
    
    return (
        <tbody>
            <tr>
                <td date-label="번호" className='listNum'>{listDate.num}</td>
                <td date-label="제목" className='listDateTitle'>{listDate.title}</td>
                <td date-label="작성자" className='listwriter'>{listDate.writer}</td>
                <td date-label="작성일" className='listDate'>{listDate.date}</td>
                <td date-label="추천" className='listRecommend'>{listDate.recommend}</td>
                <td date-label="조회" className='listViews'>{listDate.views}</td>
            </tr>
        </tbody>
    );
};

export default ProductUse;