import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import {colorsAvenir} from "../../StyledComponents/colors";
import styled from "styled-components";
import achievementsPng from '../../../assets/png/achievements.png';
import contactsPng from '../../../assets/png/contacts.png';
import servicePng from '../../../assets/png/service.png';
import teamPng from '../../../assets/png/team.png';
import {useNavigate} from "react-router-dom";
const LandingPage:React.FC<any> = () => {

    const navigate = useNavigate()

    return (
        <>
            <Grid container sx={{
                width:'100%',
                position:'absolute',
                justifyContent:'space-between',
                padding:'35px 40px 0 70px',
                zIndex:20
            }}>
                <Grid item>
                    <Typography variant={'h4'} color={'white'} fontWeight={'800'}>Avenir</Typography>
                </Grid>
                <Grid item>
                    <Typography variant={'h3'} color={'white'} fontWeight={'800'}>ПОМОЖЕМ ВАМ <br/>СОЗДАТЬ БУДУЩЕЕ</Typography>
                </Grid>
            </Grid>
            <Grid container height={'100%'}>
                <Grid item xs={3} position={"relative"}>
                    <BackgroundImage src={teamPng}/>
                    <ContainBox
                        borderRight
                        onClick={() => {
                            navigate('../nav/team')
                        }}
                    >
                        <Typography variant={'h3'} color={'white'}>Наша команда</Typography>
                    </ContainBox>
                </Grid>
                <Grid item xs={3} position={"relative"}>
                    <BackgroundImage src={servicePng}/>
                    <ContainBox
                        borderRight
                        onClick={() => {
                            navigate('../nav/service')
                        }}
                    >
                        <Typography variant={'h3'} color={'white'}>Наши услуги</Typography>
                    </ContainBox>
                </Grid>
                <Grid item xs={3} position={"relative"}>
                    <BackgroundImage src={achievementsPng}/>
                    <ContainBox
                        borderRight
                        onClick={() => {
                            navigate('../nav/achievements')
                        }}
                    >
                        <Typography variant={'h3'} color={'white'}>Наши достижения</Typography>
                    </ContainBox>
                </Grid>
                <Grid item xs={3} position={"relative"}>
                    <BackgroundImage src={contactsPng}/>
                    <ContainBox
                        onClick={() => {
                            navigate('../nav/contacts')
                        }}
                    >
                        <Typography variant={'h3'} color={'white'}>Наши контакты</Typography>
                    </ContainBox>
                </Grid>
            </Grid>
        </>
    )
}

export {LandingPage}

const BackgroundImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 0;
`

const ContainBox = styled(Box)<{borderRight:boolean}>`
    position: relative;
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:end;
    padding:0 40px 80px 40px;
    box-sizing:border-box;
    align-items:center;
    background-color : ${colorsAvenir.backgroundBlack};
    border-right: ${props => props.borderRight ? '1px solid white' : ''};
    z-index: 10;
    transition: background-color 250ms;
    
    &:hover {
      background: none;
      cursor: pointer;
    }
`