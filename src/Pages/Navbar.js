import React from 'react'
import '../Styles/Navbar.css';
import Navlink from './Navlink';
import MobileLinks from './MobileLinks';
// import Toggletheme from './Toggletheme';


const Navbar = () => {
  return (
   <div>
   <div className='desktop'>
   <Navlink />
   {/* <Toggletheme /> */}
   </div>
    <div className='mobile'>
      <MobileLinks />
    </div>
   </div>
  )
}

export default Navbar