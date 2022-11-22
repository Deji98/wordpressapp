import React from 'react'
import "../App.css"
// import '../Styles/Homepage.css'
import {AiTwotoneHeart} from 'react-icons/ai'
import Admin01 from '../Images/Admin01.png'
import Admin02 from '../Images/Admin02.png'
import Admin03 from '../Images/Admin03.png'
import Admin04 from '../Images/Admin04.png'
import Admin05 from '../Images/Admin05.png'
import Admin06 from '../Images/Admin06.png'
import Adobe from "../Images/Adobe.png"
import Adobe2 from "../Images/Adobe2.png"
import Adobe3 from "../Images/Adobe3.png"
import Adobe4 from "../Images/Adobe4.png"
import Adobe5 from "../Images/Adobe5.png"
import Adobe6 from "../Images/Adobe6.png"
import DropFileInput from "../components/drop-file-input/DropFileInput"
import {BsToggle2On} from "react-icons/bs"
import {HiOutlineArrowRight} from "react-icons/hi"




const Loginthemes = () => {
  const onFileChange = (files) => {
    console.log(files);
  }
  return (
    <div className='themes-parent'>

    <div className='themes'>

    
            <div className='body-parent'>
      <h1>
        CHOOSE YOUR ADMIN THEME
      </h1>
<div className='first-images'>
<div>
<img width="325px" height="300px" src={Admin03} alt="admin03" />
<div className='theme-likes'>
<div className='adobe-image'>
<img style={{borderRadius:"15px"}} src={Adobe} alt="adobe" /> <p>Theme One</p>
</div>
  <div className='home-image'>
    <p><AiTwotoneHeart /> 12.5k</p>
  </div>
</div>

</div>
<div>
<img width="325px" height="300px" src={Admin01} alt="admin01" />
<div className='theme-likes'>
<div className='adobe-image'>
<img style={{borderRadius:"15px"}} src={Adobe2} alt="adobe2" /> <p>Theme Two</p>
</div>
  <div className='home-image'>
    <p><AiTwotoneHeart /> 18.5k</p>
  </div>
</div>
</div>


<div>
<img width="325px" height="300px" src={Admin02} alt="admin02" />
<div className='theme-likes'>
<div className='adobe-image'>
<img style={{borderRadius:"15px"}} src={Adobe3} alt="adobe3" /> <p>Theme Three</p>
</div>
  <div className='home-image'>
    <p><AiTwotoneHeart /> 15k</p>
  </div>
</div>
</div>


</div>
      </div>

      <div className='body2'>
<div className='first-images'>
<div>
<img width="325px" height="300px" src={Admin04} alt="admin04" />
<div className='theme-likes'>
<div className='adobe-image'>
<img style={{borderRadius:"15px"}} src={Adobe4} alt="adobe4" /> <p>Theme Four</p>
</div>
  <div className='home-image'>
   <p> <AiTwotoneHeart /> 55k</p>
  </div>
</div>

</div>
<div>
<img width="325px" height="300px" src={Admin05} alt="admin05" />
<div className='theme-likes'>
<div className='adobe-image'>
<img style={{borderRadius:"15px"}} src={Adobe5} alt="adobe5" /> <p>Theme Five</p>
</div>
  <div className='home-image'>
    <p><AiTwotoneHeart /> 35.5k</p>
  </div>
</div>
</div>


<div>
<img width="325px" height="300px" src={Admin06} alt="admin06" />
<div className='theme-likes'>
<div className='adobe-image'>
<img style={{borderRadius:"15px"}} src={Adobe6} alt="adobe6" /> <p>Theme Six</p>
</div>
  <div className='home-image'>
    <p><AiTwotoneHeart /> 85.5k</p>
  </div>
</div>
</div>


</div>
</div>
</div>
<div style={{paddingLeft:"20px", paddingRight:"30px"}}><hr /></div>
 <div className="boxx">
 <div className='box'>
 <DropFileInput
        onFileChange={(files) => onFileChange(files)}
    />
 </div>
 <div>
 
      <div className='url-example'>
      <div>
      <h3 style={{fontSize:"small"}}>Login URL</h3>
      </div>
      <div className='url-example-child'>
       <div>
       <p>https://example.com/</p>
       </div>
        
        <div style={{display:"flex", flexDirection:"column", marginTop:"-10px"}}>
        <div>
        <input type="text" id="log" name="log" value="Log In" />
        </div>
        <div className='url-text'>
        <a href='/' target="_blank">
        Protect your website by changing the login  URL. This <br /> will also prevent access to /wp-login.php & /wp-admin. <br />php pages.</a>
        </div>

        </div>
        </div>
      </div>

   
      <div className='url-example2'>
      <div>
      <h3 style={{fontSize:"small"}}>Redirect URL</h3>
      </div>
      <div className='url-example2-child'>
       <div>
       <p>https://example.com/</p>
       </div>
        
        <div style={{display:"flex", flexDirection:"column", marginTop:"-10px"}}>
        <div>
        <input type="text" id="error" name="log" value="404" />
        </div>
        <div className='url-text'>
        <a href='/' target="_blank">
        Redirect visitor to this URL if they try to access wp-login.<br />php OR wp-admin.php pages.</a>
        </div>

        </div>
        </div>
      </div>

    

    <div className='checkbox'>

<div className='sudo-reg'>
    <div className='hide-register'>
    <input  type="checkbox" id="hide" name="hide" />
    <label  htmlFor="vehicle1"> Hide register / lost your password link</label>
    </div>
</div>

<div className='sudo-back'>
    <div className='hide-back'>
    <input type="checkbox" id="hide" name="hide" />
    <label htmlFor="vehicle1"> Hide back to link which appears below the login form</label>
    </div>
</div>
    </div>
<div className='active-parent'>
<div className='sudo-active'>


    <div className='active'>
    <p style={{fontSize:"small"}}>Active</p>
 <BsToggle2On size="25px" color="blue" />
</div>
</div>
<div className='sudo-edit'>
<div className='edit-text'>
<p style={{fontSize:"small"}}>Edit with elementor</p>
<HiOutlineArrowRight />
</div>
</div>
</div>

 </div>
 </div>

  </div>
 
  )
}

export default Loginthemes