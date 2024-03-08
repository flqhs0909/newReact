import React from 'react';

const ProductUse = ({listDate}) => {
    
    return (
        <tbody>
            <tr>
                <td>{listDate.num}</td>
                <td className='listDateTitle'>{listDate.title}</td>
                <td>{listDate.writer}</td>
                <td>{listDate.date}</td>
                <td>{listDate.recommend}</td>
                <td>{listDate.views}</td>
            </tr>
        </tbody>
    );
};

export default ProductUse;