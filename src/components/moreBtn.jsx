import React from 'react';
import { Link } from 'react-router-dom';
import iconMore from '../images/icon_more.png'; 

const MoreBtn = () => {
    return (
        <div>
            <Link className='moreBtn'>
                <b>자세히보기</b>
                <img src={iconMore} alt="" />
            </Link>
        </div>
    );
};

export default MoreBtn;