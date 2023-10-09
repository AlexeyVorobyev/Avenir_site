import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import backgroundSvg1 from '../../../assets/svg/achievebackground1.svg'
import backgroundSvg2 from '../../../assets/svg/achievebackground2.svg'
import backgroundSvg3 from '../../../assets/svg/achievebackground3.svg'
import circleSvg from '../../../assets/svg/achievecircle.svg'
import achieveCapSvg from '../../../assets/svg/achievecap.svg'
import achieveCapBlurSvg from '../../../assets/svg/achievecapblur.svg'
import styled from "styled-components";
import {colorsAvenir} from "../../StyledComponents/colors";

const CircleNum:React.FC<{num:number}> = ({
                                              num
                                            }) => {
    return (
        <Box sx={{
            position:'relative',
            height:'60px',
            width:'60px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            background:colorsAvenir.backgroundBlack
        }}>
            <StyledImg src={circleSvg} alt={''}/>
            <Typography color={'#7399FC'} variant={'h4'}>{num}</Typography>
        </Box>
    )
}
const AchievementsPage:React.FC = () => {

    return (
        <>
            <Box sx={{
                position:'absolute',
                top:'50%',
                left:0
            }}>
                <img src={backgroundSvg1} alt={''}/>
            </Box>
            <Box sx={{
                position:'absolute',
                top:'15%',
                right:0
            }}>
                <img src={backgroundSvg2} alt={''}/>
            </Box>
            <Box sx={{
                position:'absolute',
                bottom:'2%',
                right:0
            }}>
                <img src={backgroundSvg3} alt={''}/>
            </Box>
            <Box sx={{
                width:'100%',
                height:'100%',
                display:'flex',
                justifyContent:'center',
                alignItems:'end',
                marginBottom:'auto',
                boxSizing:'border-box',
            }}>
                <Box sx={{
                    position:'absolute',
                    top:'120px',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'column',
                }}>
                    <Box sx={{
                        width: '450px',
                        height: '65px',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                    }}>
                        <StyledImg src={achieveCapSvg} alt={''} style={{zIndex:'0'}}/>
                        <img src={achieveCapBlurSvg} alt={''} style={{zIndex:'0', position:'absolute'}}/>
                        <Typography variant={'h4'} color={'white'} style={{zIndex:'2'}}>Наши Достижения</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    maxWidth:'1020px',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'column',
                    overflow:'clip'
                }}>
                    <Box sx={{
                        height:'85%',
                        width:'3px',
                        background:'#7499FC',
                        position:'absolute',
                        left:'calc(50% - 6px)',
                        bottom:0
                    }}/>
                    <Grid container columnSpacing={15} rowSpacing={20} sx={{
                        paddingBottom:'160px'
                    }}>
                        <Grid item xs={5} sx={{
                            display:'flex',
                            alignItems:'center'
                        }}>
                            <Typography variant={'h4'} color={'white'}>Основание команды</Typography>
                        </Grid>
                        <Grid item xs={2} sx={{
                            display:'flex',
                            alignItems:'center',
                        }}>
                            <CircleNum num={1}/>
                        </Grid>
                        <Grid item xs={5} sx={{
                            display:'flex',
                            alignItems:'center'
                        }}>
                            <Typography variant={'h5'} color={'white'}>У нас собранная команда с которой мы решили уже не один кейс</Typography>
                        </Grid>

                        <Grid item xs={5} sx={{
                            display:'flex',
                            alignItems:'center'
                        }}>
                            <Typography variant={'h5'} color={'white'}>Команда Avenir заняла 3 место, учавствовав в хакатоне от Аквариума и решив проект от банка Центр-Инвест</Typography>
                        </Grid>
                        <Grid item xs={2} sx={{
                            display:'flex',
                            alignItems:'center'
                        }}>
                            <CircleNum num={2}/>
                        </Grid>
                        <Grid item xs={5} sx={{
                            display:'flex',
                            alignItems:'center'
                        }}>
                            <Typography variant={'h4'} color={'white'}>Победа на хакатоне</Typography>
                        </Grid>

                        <Grid item xs={5} sx={{
                            display:'flex',
                            alignItems:'center'
                        }}>
                            <Typography variant={'h4'} color={'white'}>Победа на хакатоне в Ростове</Typography>
                        </Grid>
                        <Grid item xs={2} sx={{
                            display:'flex',
                            alignItems:'center'
                        }}>
                            <CircleNum num={3}/>
                        </Grid>
                        <Grid item xs={5} >
                            <Typography variant={'h5'} color={'white'}>Наша команда постоянно развивается и сейчас выходит за пределы края, побеждая на всероссийских хакатонах</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

const StyledImg = styled.img`
    position: absolute;
    top:0;
    left: 0;
    height:inherit;
    width: inherit;
`

export {AchievementsPage}