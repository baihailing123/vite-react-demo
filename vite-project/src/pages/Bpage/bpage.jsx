import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

function Bpage (){

    useEffect(() => {
        console.log('Bpage component mounted.');
      }, []);


    const navigate = useNavigate();
    const goBack=()=>{
        navigate(-1)
    }
    return <div>这是b页面
        <div onClick={goBack}>回到上一个页面</div>
    </div>
}

export default Bpage;