import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import aboutTeamPng from '../../../assets/png/aboutteam.png'
import {StyledImg} from "../TeamPage/SwiperRender";
import backgroundSvg1 from "../../../assets/svg/achievebackground1.svg";
import backgroundSvg2 from "../../../assets/svg/achievebackground2.svg";
import backgroundSvg3 from "../../../assets/svg/achieveBackground3.svg";
import {colorsAvenir} from "../../StyledComponents/colors";

const LONG_TEXT = [
    `
        Команда Avenir - это творческий коллектив профессионалов, специализирующихся 
        на разработке и успешной реализации инновационных IT-проектов. Мы создаем будущее сегодня, преображая сложные идеи в реальные цифровые решения.
    `,
    `
        Наша команда разрабатывала не одно решение вместе, и участвовала в некоторых хакатонах. 
        И победила на одном из краевых хакатонов от воронки иновационных стартапов них заняв 3-е место и реализовав кейс от Центр-инвест.
    `,
    `
        Мы объединяем в себе высококвалифицированных разработчиков, дизайнеров и специалистов по проектному управлению, что позволяет нам охватывать все этапы создания продукта. С нами ваш проект получит высококачественное исполнение, инновационный взгляд и результат, о котором вы мечтали. Давайте вместе создадим будущее уже сегодня!
    `
]

const AboutPage:React.FC = () => {

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
                alignItems:'center',
                marginBottom:'auto',
                boxSizing:'border-box',
                position:'relative'
            }}>
                <Box sx={{
                    padding:'140px 240px 100px 140px',
                    boxSizing:'border-box',
                    width:'100vw',
                    height:'100vh'
                }}>
                    <Grid container height={'100%'} columnSpacing={13}>
                        <Grid item xs={7}>
                            <Grid container columnSpacing={4}>
                                <Grid item xs={3.5}>
                                    <Grid container columnSpacing={2} justifyContent={'end'} alignItems={'end'}>
                                        <Grid item>
                                            <Typography
                                                variant={'h6'} color={'white'}
                                                sx={{
                                                    fontWeight: 300,
                                                    writingMode: 'vertical-rl',
                                                    textOrientation: 'mixed',
                                                    transform:'rotate(-180deg)',
                                                }}
                                            >История создания</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant={'h2'} color={'white'}
                                                sx={{
                                                    writingMode: 'vertical-rl',
                                                    textOrientation: 'mixed',
                                                    transform:'rotate(-180deg)'
                                                }}
                                            >Наша команда</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={8.5}>
                                    <Grid container flexDirection={"column"} spacing={3}>
                                        {LONG_TEXT.map((text) => {
                                            return (
                                                <Grid item>
                                                    <Typography variant={'subtitle1'} color={'white'} sx={{fontSize: '20px'}}>{text}</Typography>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5} height={'100%'}>
                            <Box sx={{width:'100%', height:'100%', position:'relative', borderRadius:'5px', overflow:'hidden'}}>
                                <Box
                                    sx={{
                                        background:colorsAvenir.backgroundBlack,
                                        opacity:'0.3',
                                        position:'absolute',
                                        width:'100%',
                                        height:'100%'
                                    }}
                                />
                                <StyledImg src={aboutTeamPng}/>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>

    )
}

export {AboutPage}
