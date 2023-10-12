import React from "react";
import {Outlet} from "react-router-dom";
import {CustomNavBar} from "./CustomNavBar";

const options = [
    {
        label:'О нас',
        path:'../nav/team'
    },
    {
        label:'Достижения',
        path:'../nav/achievements'
    },
    {
        label:'Команда',
        path:'../nav/contacts'
    },
    // {
    //     label:'Услуги',
    //     path:'../nav/service'
    // }
]

const NavLayout:React.FC<any> = () => {
    return (
        <>
            <CustomNavBar options={options} logo={{text:'Avenir'}} fixed/>
            <Outlet/>
        </>
    )
}

export {NavLayout}