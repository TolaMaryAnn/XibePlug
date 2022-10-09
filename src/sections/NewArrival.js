import React from "react"
import styled from "styled-components"
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
import gp from "../Assets/Images/gp.jpg";
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


const Section = styled.section`
    min-height:100vh;
    width:100vw;
    margin:0 auto;


    display:flex;
    justify-content:center;
    align-items:center;

    position:relative;
    // background-color:yellow;

    @media(max-width:64em){
        background-color:black;
    }
`

const Overlay = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    // width:30vw;
    // height:90vh;

    // border:3px solid ${props => props.theme.body};
    // background-color:aliceblue;
    z-index:11;
    // box-shadow:0 0 0 3vw ${props => props.theme.text};


    @media (max-width:70em){
        

    }

    @media (max-width:64em){
        margin:1rem 0;

    }

    @media (max-width:48em){
        font-size:${props => props.theme.fontlg};
        margin:0.5rem 0;
    }

    @media (max-width:30em){
        font-size:${props => props.theme.fontmd};

    }
`

const Title = styled.h1 `
    font-size: ${props =>props.theme.fontxxxl};
    font-family:"Kaushan Script";
    font-weight:300;
    
    position:absolute;
    top:1rem;
    left:5%;
    z-index:11;
    color:${props => props.theme.body};
    text-shadow:1px 1px 1px ${props => props.theme.text};

    @media(max-width:64em) {
        font-size: ${props =>props.theme.fontxxl};
    }

    @media(max-width:48em) {
        font-size: ${props =>props.theme.fontxl};
    }

`

const Text = styled.div `
    width:20%;
    font-size:${props => props.theme.fontlg};
    font-weight:300;
    position:absolute;
    padding:2rem;
    top:0;
    right:0;

    z-index:11;

    @media(max-width:48em) {
        display:none;
    }



    
    

`


// const Item = styled.div`
//     display:flex;
//     flex-direction:colunm;
//     justify-content:center;
//     align-items:center;
//     margin:5rem 0;

//     img{
//         width:100%;
//         height:auto;
//         z-index:5;
//     }


// `

// const Product = ({img, title = ''}) => {
//     return(
//         <Item
    
//          >
//             <img src={img} alt={title} />
//             <h2>{title}</h2>
//         </Item>
//     )
// }

const NewArrival = () => {
    return(
        <Section id='new-arrival'>
            <Overlay/>
            <Title data-scroll data-scroll-speed="-2"
            data-scroll-direction="horizontal"
            >New Arrivals</Title>


            {/* <Container> */}
                {/* <Product img={gp} /> */}
                {/* <Product img={two} title="eufbuwufbeu" />
                <Product img={three} title="bububffgge" />
                <Product img={four} title="fnuiwufw" />
                <Product img={five} title="fuweuw" />
                <Product img={six} title="hfuhut" />
                <Product img={seven} title="hfuhughug" />
                <Product img={eight} title="uuhug3u" />
                <Product img={nine} title="32tu2ht" />
                <Product img={Ten} title="gueahgueai" /> */}

<div uk-slideshow="animation: push">

<div class="uk-position-relative uk-visible-toggle uk-dark" tabindex="-1">

    <ul class="uk-slideshow-items" >
        <li>
            < img src={one} alt=""  uk-cover/>
        </li>
        <li>
            < img src={two} alt="" uk-cover/>
        </li>
        <li>
            < img src={three} alt="" uk-cover/>
        </li>
        <li>
            < img src={four} alt="" uk-cover/>
        </li>
        <li>
            < img src={five} alt="" uk-cover/>
        </li>
        <li>
            < img src={six} alt="" uk-cover/>
        </li>
        <li>
            < img src={seven} alt="" uk-cover/>
        </li>
        <li>
            < img src={eight} alt="" uk-cover/>
        </li>
        <li>
            < img src={nine} alt="" uk-cover/>
        </li>
        <li>
            < img src={Ten} alt="" uk-cover/>
        </li>
        <li>
            < img src={Eleven} alt="" uk-cover/>
        </li>
        <li>
            < img src={twelve} alt="" uk-cover/>
        </li>
        <li>
            < img src={thirteen} alt="" uk-cover/>
        </li>
        <li>
            < img src={fourteen} alt="" uk-cover/>
        </li>
        <li>
            < img src={fifteen} alt="" uk-cover/>
        </li>
        <li>
            < img src={sixteen} alt="" uk-cover/>
        </li>
        <li>
            < img src={seventeen} alt="" uk-cover/>
        </li>
        <li>
            < img src={eighteen} alt="" uk-cover/>
        </li>
        <li>
            < img src={ninteen} alt="" uk-cover/>
        </li>
        <li>
            < img src={t1} alt="" uk-cover/>
        </li>
        <li>
            < img src={t2} alt="" uk-cover/>
        </li>
        <li>
            < img src={t4} alt="" uk-cover/>
        </li>
        <li>
            < img src={t5} alt="" uk-cover/>
        </li>
        <li>
            < img src={t6} alt="" uk-cover/>
        </li>
        <li>
            < img src={t7} alt="" uk-cover/>
        </li>
        <li>
            < img src={t9} alt="" uk-cover/>
        </li>
        <li>
            < img src={th} alt="" uk-cover/>
        </li>
        <li>
            < img src={th1} alt="" uk-cover/>
        </li>
        <li>
            < img src={th2} alt="" uk-cover/>
        </li>
        <li>
            < img src={th3} alt="" uk-cover/>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>

<ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div> 
            {/* </Container> */}

            <Text  data-scroll  data-scroll-speed="-4">
                There is new collection available for cool clothes in all sizes.
                This collection is a great way to find a new look for you.
                It offers a variety of cool apparel styles to fit your taste, while you can also find some cool clothes suits that you.
                <br/>
                <br/>

                

                Give it a try and experience a new look.
      
            </Text>

        </Section>
    )
}

export default NewArrival