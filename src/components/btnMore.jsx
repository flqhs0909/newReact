import React from 'react';

import iconMore from '../image/icon_more.png'; 

const BtnMore = () => {
    return (
        <div>
            <a className='btn_rink'>
                <b>자세히보기</b>
                <img src={iconMore} alt="" />
            </a>
        </div>
    );
};

export default BtnMore;