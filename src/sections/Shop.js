import React, {useLayoutEffect} from 'react';
import {useRef} from 'react';

import styled from 'styled-components';
import ScrollTrigger from 'gsap/ScrollTrigger';

import gsap from 'gsap/dist/gsap';
import one from "../Assets/Images/one.png";
import two from "../Assets/Images/two.png";
import three from "../Assets/Images/three.jpg";
import four from "../Assets/Images/four.jpg";
import five from "../Assets/Images/five.jpg";
import six from "../Assets/Images/six.jpg";
import eight from "../Assets/Images/eight.jpg";
import seven from "../Assets/Images/seven.jpg";
import nine from "../Assets/Images/nine.jpg";
import Ten from "../Assets/Images/Ten.jpg";
import Eleven from "../Assets/Images/Eleven.jpg";
import twelve from "../Assets/Images/twelve.jpg";
import thirteen from "../Assets/Images/thirteen.png";
import fourteen from "../Assets/Images/fourteen.jpg";
import fifteen from "../Assets/Images/fifteen.jpg";
import sixteen from "../Assets/Images/sixteen.jpg";
import eighteen from "../Assets/Images/eighteen.jpg";
import seventeen from "../Assets/Images/seventeen.jpg";
import ninteen from "../Assets/Images/ninteen.jpg";
import twenty from "../Assets/Images/twenty.jpg";
import t1 from "../Assets/Images/t1.jpg";
import t2 from "../Assets/Images/t2.jpg";
import t5 from "../Assets/Images/t5.jpg";
import t4 from "../Assets/Images/t4.jpg";
import t6 from "../Assets/Images/t6.jpg";
import t7 from "../Assets/Images/t7.jpg";
import t9 from "../Assets/Images/t9.jpg";
import th1 from "../Assets/Images/th1.png";
import th from "../Assets/Images/th.jpg";
import th2 from "../Assets/Images/th2.jpg";
import th3 from "../Assets/Images/th3.jpg";


const Section = styled.section `
    min-height:100vh;
    height:auto;
    width:100vw;
    margin:0 auto;
    overflow:hidden;

    display:flex;
    justify-content:flex-start;
    align-items:flex-start;

    position:relative;
`

const Title = styled.h1 `
    font-size: ${props =>props.theme.fontxxxl};
    font-family:"Kaushan Script";
    font-weight:300;
    
    position:absolute;
    top:1rem;
    left:5%;
    z-index:11;
    color:${props => props.theme.text};
    text-shadow:1px 1px 1px ${props => props.theme.body};

    @media (max-width:64em) {
        font-size:${props => props.theme.fontxxl};
       
    }

    @media (max-width:48em) {
        font-size:${props => props.theme.fontxl};
       
    }

`

const Right = styled.div `
    position:absolute;
    left:35%;
    min-height:100vh;
    padding-left:8%;
    background-color: ${props => props.theme.grey};
    
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width:65%;

     h1{
        width:5rem;
        margin:0 2rem;
    }



  
`

const Left = styled.div `
    width:35%;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};

    min-height:100vh;
    z-index:5;

    position:fixed;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;

    p{
        font-size:${props => props.theme.fontlg};
        font-weight:300;
        width:80%;
        margin:0 auto;
    }

    @media (max-width: 64em) {
        p{
            font-size:${props => props.theme.fontmd};
        }
    }

    @media (max-width: 48em) {
        width: 40%;
        p{
            font-size:${props => props.theme.fontsm};
        }
    }

    @media (max-width 64em) {
        p{
            font-size:${props => props.theme.fontxs};
        }
    }
`

const Shop = () => {
 
  return (
    <Section id='shop' >
      <Title data-scroll data-scroll-speed="-1">New collection</Title>

      <Left>
        <p>
            The brand new collection is currently being developed in Lagos,Nigeria.
            We create our product using best quality materials, including the use of some of the pure fabrics products.
            All products are made using the best material, from the finest cotton and finest fabrics.
            <br/>
            <br/>

            We have lots of different clothing options like shoes, jewelries and dresses.
            Not only clothes but we also provide unique jewellery as well.
           
        </p>
      </Left>
      <Right >
        {/* <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1> */}
 <div uk-slideshow="animation: push">

    <div class="uk-position-relative uk-visible-toggle uk-dark" tabindex="-1">

        <ul class="uk-slideshow-items" >
            <li>
                <img src={one} alt=""  uk-cover/>
            </li>
            <li>
                <img src={two} alt="" uk-cover/>
            </li>
            <li>
                <img src={three} alt="" uk-cover/>
            </li>
            <li>
                <img src={four} alt="" uk-cover/>
            </li>
            <li>
                <img src={five} alt="" uk-cover/>
            </li>
            <li>
                <img src={six} alt="" uk-cover/>
            </li>
            <li>
                <img src={seven} alt="" uk-cover/>
            </li>
            <li>
                <img src={eight} alt="" uk-cover/>
            </li>
            <li>
                <img src={nine} alt="" uk-cover/>
            </li>
            <li>
                <img src={Ten} alt="" uk-cover/>
            </li>
            <li>
                <img src={Eleven} alt="" uk-cover/>
            </li>
            <li>
                <img src={twelve} alt="" uk-cover/>
            </li>
            <li>
                <img src={thirteen} alt="" uk-cover/>
            </li>
            <li>
                <img src={fourteen} alt="" uk-cover/>
            </li>
            <li>
                <img src={fifteen} alt="" uk-cover/>
            </li>
            <li>
                <img src={sixteen} alt="" uk-cover/>
            </li>
            <li>
                <img src={seventeen} alt="" uk-cover/>
            </li>
            <li>
                <img src={eighteen} alt="" uk-cover/>
            </li>
            <li>
                <img src={ninteen} alt="" uk-cover/>
            </li>
            <li>
                <img src={t1} alt="" uk-cover/>
            </li>
            <li>
                <img src={t2} alt="" uk-cover/>
            </li>
            <li>
                <img src={t4} alt="" uk-cover/>
            </li>
            <li>
                <img src={t5} alt="" uk-cover/>
            </li>
            <li>
                <img src={t6} alt="" uk-cover/>
            </li>
            <li>
                <img src={t7} alt="" uk-cover/>
            </li>
            <li>
                <img src={t9} alt="" uk-cover/>
            </li>
            <li>
                <img src={th} alt="" uk-cover/>
            </li>
            <li>
                <img src={th1} alt="" uk-cover/>
            </li>
            <li>
                <img src={th2} alt="" uk-cover/>
            </li>
            <li>
                <img src={th3} alt="" uk-cover/>
            </li>
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

    </div>

    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div> 


        
      </Right>
    </Section>
  )
}

export default Shop
