import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import {motion} from 'framer-motion'
import logo from "../Assets/Images/logo.png";

const Container = styled.div `
    position:absolute;
    top:0.2rem;
    left:1rem;

    width:100%;
    color:${props => props.theme.text};
    z-index:5;

   
    img{
      width:80px;
      height:auto;
      overflow:visible;
      stroke-linejoin:round;
      stroke-linecap:round;
      @media (max-width:40em) {
        width:50px;

      }
    }
`

const textVariants={
  hidden:{
    opacity:0,
    x:-50,
  },

  visible: {
    opacity:1,
    x:-5,

  },

  transition:{
    duration:2,
    delay:3,
    ease:'easeInOut'
  }
}
const Text=styled(motion.span)`
    font-size:${props => props.theme.fontlg};
    // color:${props => props.theme.text};
    color:wheat;
    padding-bottom:0.5rem;
    font-family:'Kaushan Script';
`

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <motion.img
        initial={{
          opacity:0,
         
        }}
        animate={{
          opacity:1,
          
        }}
        transition={{
          duration:5,
          ease:'easeInOut'
        }}
        src={logo}/>
        <Text 
        Variants={textVariants}
        initial='hidden'
        animate='visible'
        >
          Xibe plug
        </Text>
      </Link>
    </Container>
  )
}

export default Logo
