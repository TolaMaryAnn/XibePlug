import { ThemeProvider } from 'styled-components'
import  GlobalStyles  from './styles/GlobalStyles';
import {dark} from './styles/Themes';
import {useRef, useState, useEffect} from 'react';
import {LocomotiveScrollProvider} from 'react-locomotive-scroll'
import Home from  './sections/Home';
import About from './sections/About';
import Shop from './sections/Shop';
import Banner from './sections/Banner';
import NewArrival from './sections/NewArrival';
import ScrollTriggerProxy from './components/ScrollTriggerProxy';


import 'locomotive-scroll/dist/locomotive-scroll.css'
import {AnimatePresence} from 'framer-motion'
import Footer from './sections/Footer';




function App() {

  const containerRef = useRef(null);


  return (
    < >
      <GlobalStyles/>
      
      <ThemeProvider theme={dark}>
      {/* <main class="App">
      I love you
      </main>  */}
      
      <LocomotiveScrollProvider
  options={
    {
      smooth: true,
      smartphone:{
        smooth:true,
      },
      tablet:{
        smooth:true,
      }
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
>
  
  <ScrollTriggerProxy/>
  <AnimatePresence>
  <main className='App'  data-scroll-container ref={containerRef}>

    {/* ...your app */}
    <Home/>
    <About/>
    <Shop/>
    <Banner/>
    <NewArrival/>
    <Footer/>
  </main>
  </AnimatePresence>
  
</LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
