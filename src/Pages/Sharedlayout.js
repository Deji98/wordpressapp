import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import "../App.css"



const Sharedlayout = () => {
  return (
  <div className='layout'>
  <Navbar />
 <Outlet /> 
  </div>
   
    
    
    
    
  );
};
export default Sharedlayout;