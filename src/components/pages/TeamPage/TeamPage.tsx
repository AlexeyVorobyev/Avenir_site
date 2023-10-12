import React from "react";
import {Box} from "@mui/material";
import {SwiperRender} from "./SwiperRender";

const TeamPage:React.FC = () => {

    return (
        <Box sx={{
            width:'100%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:'auto',
            boxSizing:'border-box',
        }}>
            <SwiperRender/>
        </Box>
    )
}

export {TeamPage}