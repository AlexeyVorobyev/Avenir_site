import {Box, Grid, Typography} from "@mui/material";
import {NavLink, useLocation} from "react-router-dom";
import styled from "styled-components";
import React from "react";

type Logo = {
    text: string
    image?: never
} | {
    text?: never
    image:string
};

type Option = {
    label:string
    path:string
}

interface Props {
    logo?:Logo
    options:Option[]
    fixed?:boolean
}

const CustomNavBar:React.FC<Props> = ({
                                          logo,
                                          fixed = false,
                                          options,
                                      }) => {

    const location = useLocation()
    const comparePaths = (path1:string, path2:string):boolean => {
        path1 = path1.split('/')[path1.split('/').length - 1]
        path2 = path2.split('/')[path2.split('/').length - 1]
        return path1 === path2
    }

    return (
        <Box sx={{
            width:'100%',
            padding:'30px 250px 30px 70px',
            boxSizing:'border-box',
            position:`${fixed ? 'fixed' : 'static'}`
        }}>
            <Grid container justifyContent={'space-between'} alignItems={'center'}>
                {logo && <Grid item>
                    {logo.text ? <Typography variant={'h4'} color={'#FFFFFF'}>{logo.text}</Typography> : <img src={logo.image}/>}
                </Grid>}
                <Grid item>
                    <Grid container justifyContent={'space-between'} spacing={3}>
                        {options.map((option:Option) =>
                            <Grid item key={option.path}>
                                <CustomNavLink to={option.path} $isActive={comparePaths(location.pathname, option.path)}>
                                    <Typography variant={'h6'} color={'#FFFFFF'}>{option.label}</Typography>
                                </CustomNavLink>
                            </Grid>)}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export {CustomNavBar}

const CustomNavLink = styled(NavLink)<{$isActive:boolean}>`
    text-decoration: ${props => props.$isActive ? 'underline' : 'none'};
    position: relative;
    
    ${props => props.$isActive ?`&::after {
      background: linear-gradient(to right, transparent 0%, #7875FF00, #8684FF, #FD4AAB, #4C48FF, #9F9EE800, transparent 100%);
      content: "";
      position: absolute;
      bottom: 0;
      left: -32vw;
      height: 2px;
      width: calc(64vw + 100%);
    }` : ''}
  
`