

import React from 'react'
import styled from 'styled-components';
import fashion from '../Assets/fashion.mp4';
import {motion} from 'framer-motion'
const  VideoContainer = styled.section `
     width:100%;
     height:100vh;
     position:relative;


     video{
        width:100%;
        height:100vh;
        object-fit:cover;

        @media (max-width:48em) {
            object-position:center 10%;

        }

        @media (max-width:30em) {
            object-position:center 50%;

        }
     }
`
const DarkOverlay = styled.section `
     position:absolute;
     top:0;
     bottom:0;
     left:0;
     right:0;
     z-index:5;

     background-color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
`
const Title = styled(motion.div) `
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:5;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color: ${props => props.theme.text};
    

    div{
        display:flex;
        flex-direction:row;
    }

    h1{
        font-family:'Kaushan Script';
        font-size: ${props => props.theme.fontBig};
        text-shadow:1px 1px 1px ${props => props.theme.body};
        color:white;

        @media (max-width:30em) {
            font-size:calc(5rem - 8vw);
            

        }
     }
    }

    h2{
        font-family:'Sirin-Stencil';
        font-size: ${props => props.theme.fontlg};
        text-shadow:1px 1px 1px ${props => props.theme.body};
        font-weight:200;
        text-transform:capitalize;
        color:white;

        
        @media (max-width:30em) {
            font-size:${props => props.theme.fontmd};
            margin-top:0.5rem;
            

        }
        }

`

const container = {
    hidden:{
        opacity: 0,
    },
    show: {
        opacity:1,
        

        transition:{
            delayChildren: 2,
            staggerChildren:0.3,
        }
    }
}

const item = {
    hidden:{
        opacity: 0,
    },
    show: {
        opacity:1,
    }
}


const CoverVideo = () => {
  return (
    <VideoContainer>
        <DarkOverlay/>
        <Title variants ={container} initial="hidden" animate="show" >
            <div>                
                <motion.h1 variants={item} data-scroll='0.13' data-scroll-speed='4'>X</motion.h1>
                <motion.h1 variants={item}  data-scroll='0.09' data-scroll-speed='4'>i</motion.h1>
                <motion.h1 variants={item}  data-scroll='0.08' data-scroll-speed='4'>b</motion.h1>
                <motion.h1 variants={item}  data-scroll='0.07' data-scroll-speed='4'>e</motion.h1>
                <motion.h1 variants={item}  data-scroll='0.06' data-scroll-speed='4'>P</motion.h1>
                <motion.h1 variants={item}  data-scroll='0.05' data-scroll-speed='4'>l</motion.h1>
                <motion.h1 variants={item}  data-scroll='0.04' data-scroll-speed='4'>u</motion.h1>
                <motion.h1 variants={item}  data-scroll='0.02' data-scroll-speed='4'>g</motion.h1>


            </div>
            <motion.h2 variants={item} data-scroll='0.04' data-scroll-speed='2'>Create . Inspire . Beautify . Believe</motion.h2>
        </Title>
        <video src={fashion} type='video/mp4' autoPlay muted loop />
    </VideoContainer>
  )
}

export default CoverVideo
