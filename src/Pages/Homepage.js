import React from 'react'
import '../Styles/Homepage.css'
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

const Homepage = () => {
  return (
    <div className='h-parent'>
    <div className='select-parent'>
      <div className='select'>
      <select  name="themes" id="themes">
    <option value="theme1">Apply this theme to ALL</option>
    <option value="theme2">Apply this theme to all</option>
    <option value="theme3">Apply this theme to all</option>
  </select>
      </div>
      <div className='select2'>
      <select  name="themes" id="themes">
    <option  value="theme1">Use this page as welcome page</option>
    <option value="theme2">Use this page as welcome page</option>
    <option value="theme3">Use this page as welcome page</option>
  </select>
      </div>
      </div>
      <div className='body-parent'>
      <h1>
        CHOOSE YOUR ADMIN THEME
      </h1>
<div className='first-images'>
<div>
<img width="325px" height="300px" src={Admin03} alt="admin03" />
<div className='theme-likes'>
<div className='adobe-image'>
<img style={{borderRadius:"15px"}} src={Adobe} alt="adobe" /><p> Theme One</p>
</div>
  <div className='home-image'>
  <p> <AiTwotoneHeart />  12.5k</p> 
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
  <p> <AiTwotoneHeart /> 18.5k</p>
  </div>
</div>
</div>


<div>
<img width="325px" height="300px" src={Admin02} alt="admin02" />
<div className='theme-likes'>
<div className='adobe-image'>
<img style={{borderRadius:"15px"}} src={Adobe3} alt="adobe3" /><p>Theme Three</p>
</div>
  <div className='home-image'>
  <p><AiTwotoneHeart /> 15k </p>  
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
  <p><AiTwotoneHeart />55k</p>
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
  <p>
  <AiTwotoneHeart /> 35.5k
  </p>
    
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
  )
}

export default Homepage