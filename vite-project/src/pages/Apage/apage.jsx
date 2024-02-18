import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {unionpay,test} from '../../util/Images';
import './apge.less';

function Apage (){
    const navigate = useNavigate();

    function goToBPage(){
        navigate('/bpage', { state: { key: "value" } });
    };
    return <div className='container'>这是a页面
        <div onClick={goToBPage}>跳转到b页面的按钮</div>
        <img src={unionpay} className='smallImge'></img>
        <img src={test} className='bigImge'></img>
    </div>
}

export default Apage;