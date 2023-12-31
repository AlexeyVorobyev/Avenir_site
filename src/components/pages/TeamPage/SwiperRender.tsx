import { Swiper, SwiperSlide} from 'swiper/react';
import React, {useCallback, useRef, useState} from "react";
import 'swiper/css';
import {Box, Grid, Link, Typography} from "@mui/material";
import styled from "styled-components";
import alexPng from '../../../assets/png/team/alex.png'
import katePng from '../../../assets/png/team/kate.png'
import sophiePng from '../../../assets/png/team/sophie.png'
import ivanPng from '../../../assets/png/team/ivan.png'
import nekitPng from '../../../assets/png/team/nekit.png'
import nextSvg from '../../../assets/svg/swiper/next.svg'
import prevSvg from '../../../assets/svg/swiper/prev.svg'
import background1 from '../../../assets/svg/achievebackground1.svg'
import background2 from '../../../assets/svg/teambackground1.svg'
import telegramSvg from '../../../assets/svg/telegram.svg'
import {colorsAvenir} from "../../StyledComponents/colors";

interface SlideData {
    img:string | null,
    name:string,
    profession:string,
    telegram:string
}

const slidesData:SlideData[] = [

    {
        img:sophiePng,
        name:'Sophie',
        profession:'UI/UX Дизайнер',
        telegram:'art3midas'
    },
    {
        img:katePng,
        name:'Kate',
        profession:'Cистемный Аналитик',
        telegram:'katerina_makone'
    },
    {
        img:alexPng,
        name:'Alexey',
        profession:'FrontEnd Разработчик',
        telegram:'Kurt_Alexis_23'
    },
    {
        img:ivanPng,
        name:'Ivan',
        profession:'Проджект менеджер',
        telegram:'skoro0977'
    },
    {
        img:nekitPng,
        name:'Nikita',
        profession:'BackEnd Разработчик',
        telegram:'nikitaVoV'
    },
]

const INITIAL_SLIDE = 1

const SwiperRender:React.FC = () => {

    const [currentSlide, setCurrentSlide] = useState<number>(INITIAL_SLIDE)
    const sliderRef = useRef<any>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const slidesDataRepeated = (() => {
        const res:SlideData[] = []
        for (let i = 0; i < 10; i++) {
            res.push(...slidesData)
        }
        return res
    })()

    return (
        <Box sx={{
            width:'100%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            position:'relative'
        }}>
            <Box sx={{
                width:'120%',
                height:'20%',
                position:'absolute',
                top:0,
                background: colorsAvenir.backgroundBlack,
                borderRadius: '1000px / 100px',
                zIndex:15
            }}/>
            <Swiper
                ref={sliderRef}
                spaceBetween={50}
                slidesPerView={3}
                initialSlide={INITIAL_SLIDE + 5 * 5}
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                style={{
                    paddingRight:'140px',
                    paddingLeft:'140px'
                }}
            >
                {slidesDataRepeated.map((slideData, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <StyledSlideBox>
                                {slideData.img && <StyledImg src={slideData.img}/>}
                            </StyledSlideBox>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <img
                src={nextSvg}
                style={{
                    position:'absolute',
                    right:0,
                    zIndex:100,
                    cursor:"pointer"
                }}
                onClick={handleNext}
            />
            <img
                src={prevSvg}
                style={{
                    position:'absolute',
                    left:0,
                    zIndex:100,
                    cursor:"pointer"
                }}
                onClick={handlePrev}
            />
            <Box sx={{
                width:'120%',
                height:'20%',
                position:'absolute',
                bottom:0,
                background: colorsAvenir.backgroundBlack,
                borderRadius: '1000px / 100px',
                zIndex:15,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                clipPath: 'ellipse(62% 63% at 51% 63%)',
            }}>
                <img
                    src={background1}
                    style={{
                        position:'absolute',
                        bottom:'-50px',
                        left:'5%',
                    }}
                />
                <img
                    src={background2}
                    style={{
                        position:'absolute',
                        bottom:'-20px',
                        right:'10%',
                    }}
                />
                <Grid container flexDirection={'column'} justifyContent={'center'} rowSpacing={1} maxWidth={'fit-content'}>
                    <Grid item>
                        <Typography variant={'h4'} color={'white'} textAlign={'center'}>{slidesDataRepeated[currentSlide + 1].name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'h6'}color={'white'} textAlign={'center'}>{slidesDataRepeated[currentSlide + 1].profession}</Typography>
                    </Grid>
                    <Grid item alignItems={'center'} justifyContent={'center'} display={'flex'}>
                        <Link href={`https://t.me/${slidesDataRepeated[currentSlide + 1].telegram}`}
                              sx={{textDecoration:'none', display:'block', maxWidth:'fit-content'}}>
                            <Grid container alignItems={"center"} justifyContent={'center'} columnSpacing={1}>
                                <Grid item>
                                    <img src={telegramSvg}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant={'subtitle1'} color={'white'} textAlign={'center'}
                                                sx={{textDecoration:'underline 1px solid white', textUnderlineOffset: '3px'}}>
                                        {slidesDataRepeated[currentSlide + 1].telegram}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export {SwiperRender}

const StyledSlideBox = styled(Box)`
  height:70vh;
  width:100%;
`

export const StyledImg = styled.img`
    width: inherit;
    height: inherit;
    object-fit: cover;
`