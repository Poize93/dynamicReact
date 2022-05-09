import React from 'react';
import web from "../src/images/homepage.webp"
import {NavLink} from "react-router-dom"
import Common from './Common'

const About=()=>{
  return(
    <>
     <Common 
     name='Welcome to About Page of' 
     imgsrc={web} 
     visit='/contact' 
     btname="Contact Now"/>
    </>
  )
}

export default About;