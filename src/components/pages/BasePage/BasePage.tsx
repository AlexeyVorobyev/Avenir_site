import React from "react";
import {Outlet} from "react-router-dom";
import {Background} from "../../StyledComponents/Background";
import {colorsAvenir} from "../../StyledComponents/colors";
const BasePage:React.FC<any> = () => {
    return (
        <Background color={colorsAvenir.backgroundBlack}>
            <Outlet/>
        </Background>
    )
}

export {BasePage}