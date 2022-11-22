import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import MobileNavLink from '../Pages/MobileNavlink'
import '../Styles/Navbar.css';


const MobileLinks = () => {

const hamburgerIcon = <div className='menu'>
 <AiOutlineMenu className='burger' size='40px'
    onClick={() => setOpen(!open)}
     />
</div>

const closeIcon = <div className='menu'>
<GrClose className='burger' size='40px'
    onClick={() => setOpen(!open)}
     />
</div>

  const [open, setOpen] = useState(false);

  return (
    <div className='menu'>
        <div className='menu'> 
        {open ? closeIcon : hamburgerIcon}
         {open && <MobileNavLink />}
         </div>
    </div>
  ) 
}

export default MobileLinks