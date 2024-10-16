import React from 'react'
import Navbar from './Navbar';
// import Category from './components/Category';
import Category2 from './Category2';

import Info from './Info';
import Tophead from './Tophead';
import Blank from './Blank';
import Slider from './Slider';
import Social from './Social';
import Footer from './Footer';


export default function Home() {
  return (
    <div className='App'>
   
      <Tophead/>
      <Category2/>
      <Info/> 
      <Slider/>
      <Social/>
    
    </div>
  )
}
