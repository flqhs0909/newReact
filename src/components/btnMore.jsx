import React from 'react';

import iconMore from '../images/icon_more.png'; 

const BtnMore = () => {
    return (
        <div>
            <a className='RinkBtn'>
                <b>자세히보기</b>
                <img src={iconMore} alt="" />
            </a>
        </div>
    );
};

export default BtnMore;