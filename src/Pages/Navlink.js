import React from 'react'
// import {BsToggle2Off} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css';
import Toggletheme from './Toggletheme';

const Navlink = () => {
  return (
    <div>
         <div className='parent'>
    <div className='navlinks'>
    <Link className='link' style={{width:"116px", height:"35px", padding:"10px", paddingRight:"2px", paddingLeft:"10px"}} to="/">Admin Themes</Link>
      <Link className='link' style={{width:"109px", height:"35px", padding:"10px", paddingRight:"2px", paddingLeft:"10px"}} to="Loginthemes">Login Themes</Link>
      <Link className='link' style={{width:"94px", height:"35px", padding:"10px", paddingRight:"2px", paddingLeft:"10px"}} to="Branding">Branding</Link>
      <Link className='link' style={{width:"102px", height:"35px", padding:"10px", paddingRight:"2px", paddingLeft:"10px"}} to="Adminmenu">Admin Menu</Link>
      <Link className='link' style={{width:"172px", height:"35px", padding:"10px", paddingRight:"2px", paddingLeft:"10px"}} to="Metaboxes">Meta Boxes & Widgets</Link>
      <Link className='link' style={{width:"158px", height:"35px", padding:"10px", paddingRight:"2px", paddingLeft:"10px"}} to="Wp">WP Hide & Redirects</Link>
      <Link className='link' style={{width:"77px", height:"35px", padding:"10px", paddingRight:"2px", paddingLeft:"10px"}} to="Settings">Settings</Link>
      {/* <Link className='link' style={{width:"77px", height:"35px", padding:"10px", paddingRight:"2px", paddingLeft:"10px"}} to="Settings">Settings</Link> */}
    </div>
      <div className='navbtn'>
       {/* <button className='btn'>Dark Mode <BsToggle2Off size="20px" /></button>  */}
       <Toggletheme />
      </div>

    </div>
    </div>
  )
}

export default Navlink