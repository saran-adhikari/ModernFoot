import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function Scrolltop() {

    const routePath= useLocation();
    const onTop = () =>{
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        onTop()
    }, [routePath]);
}
return null;