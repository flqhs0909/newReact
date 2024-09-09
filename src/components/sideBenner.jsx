import React from 'react';


const sideBenner = () => {

    const  scrollTop = () => {
        window.scrollTo ({
            top : 0 ,
            behavior: 'smooth'
        })
    }
    const advice = () => {
        alert('전화상담')
    }

    return (
        <aside className='sideWrap'>
            <ul>
                <li>
                    <img src="../images/icon_kko.png" alt="카톡상담" />
                    <span>카톡상담</span>
                </li>
                <li onClick={advice}>
                    <img src="../images/icon_callCS.png" alt="전화상딤" />
                    <span>전화상담</span>

                </li>
                <li onClick={scrollTop}>
                    <img src="../images/icon_top.png" alt="Top" />
                    <span>TOP</span>

                </li>
            </ul>
        </aside>
    );

};


export default sideBenner;