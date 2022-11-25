import React from 'react'
import "../Styles/Branding.css"
import { Link } from 'react-router-dom'
import {BsFillImageFill} from "react-icons/bs"
import Texteditor from '../components/drop-file-input/Texteditor'

const Branding = () => {
  return (
    <div className='b-parent'>
    <div className='heading'>
    <div className='flex-heading'>
      <div className='branding-select'>
      <select  name="themes" id="b-themes">
    <option  value="theme1">Customize this for ALL</option>
    <option value="theme2">Customize this for ALL</option>
    <option value="theme3">Customize this for ALL</option>
  </select>
      </div>
      <button>save</button>
      </div>
      <div className='branding-links'>
      <Link  className='b-link' style={{width:"45px", height:"35px",  border:"1px solid #DFDFDF", borderRadius:"8px", display:"flex", alignItems:"center",  justifyContent:"center"}}   to="/">All</Link>
      <Link  className='b-link' style={{width:"116px", height:"35px",  border:"1px solid #DFDFDF", borderRadius:"8px",  display:"flex", alignItems:"center",  justifyContent:"center"}}  to="/Loginthemes">Administrator</Link>
      <Link  className='b-link' style={{width:"66px", height:"35px",  border:"1px solid #DFDFDF", borderRadius:"8px",  display:"flex", alignItems:"center",  justifyContent:"center"}} to="Branding">Editor</Link>
      <Link  className='b-link' style={{width:"73px", height:"35px",  border:"1px solid #DFDFDF", borderRadius:"8px",  display:"flex", alignItems:"center",  justifyContent:"center"}}  to="Adminmenu">Author</Link>
      <Link  className='b-link' style={{width:"103px", height:"35px",  border:"1px solid #DFDFDF", borderRadius:"8px",  display:"flex", alignItems:"center",  justifyContent:"center"}} to="Metaboxes">Contributor</Link>
      <Link  className='b-link' style={{width:"94px", height:"35px",  border:"1px solid #DFDFDF", borderRadius:"8px",  display:"flex", alignItems:"center",  justifyContent:"center"}} to="Wp">Subscriber</Link>
      <Link  className='b-link' style={{width:"158px", height:"35px",  border:"1px solid #DFDFDF", borderRadius:"8px",  display:"flex", alignItems:"center",  justifyContent:"center"}} to="Settings">Current user(Demo)</Link>
      <Link  className='b-link' style={{width:"107px", height:"35px",  border:"1px solid #DFDFDF", borderRadius:"8px",  display:"flex", alignItems:"center",  justifyContent:"center"}}  to="Wp">Choose user</Link>
      </div>
      <div className='mobile-branding-links'>
      <Link  className='b-link' style={{width:"45px", height:"35px",  border:"1px solid #DFDFDF", borderRadius:"8px", display:"flex", alignItems:"center",  justifyContent:"center"}}   to="/">All</Link>
      <Link  className='b-link' style={{width:"116px", height:"35px",  border:"1px solid #DFDFDF", borderRadius:"8px",  display:"flex", alignItems:"center",  justifyContent:"center"}}  to="/Loginthemes">Administrator</Link>
      <Link  className='b-link' style={{width:"66px", height:"35px",  border:"1px solid #DFDFDF", borderRadius:"8px",  display:"flex", alignItems:"center",  justifyContent:"center"}} to="Branding">Editor</Link>
      <Link  className='b-link' style={{width:"73px", height:"35px",  border:"1px solid #DFDFDF", borderRadius:"8px",  display:"flex", alignItems:"center",  justifyContent:"center"}}  to="Adminmenu">Author</Link>
      <Link  className='b-link' style={{width:"103px", height:"35px",  border:"1px solid #DFDFDF", borderRadius:"8px",  display:"flex", alignItems:"center",  justifyContent:"center"}} to="Metaboxes">Contributor</Link>
      <Link  className='b-link' style={{width:"94px", height:"35px",  border:"1px solid #DFDFDF", borderRadius:"8px",  display:"flex", alignItems:"center",  justifyContent:"center"}} to="Wp">Subscriber</Link>
      <Link  className='b-link' style={{width:"158px", height:"35px",  border:"1px solid #DFDFDF", borderRadius:"8px",  display:"flex", alignItems:"center",  justifyContent:"center"}} to="Settings">Current user(Demo)</Link>
      <Link  className='b-link' style={{width:"107px", height:"35px",  border:"1px solid #DFDFDF", borderRadius:"8px",  display:"flex", alignItems:"center",  justifyContent:"center"}}  to="Wp">Choose user</Link>
      </div>
      </div>
      <div className='body01'>
      <div>
      <p className='branding-text'>BRANDING & CUSTOMIZATION</p>
      <div className='half-body01'>
     
      <div>
        <h3 style={{fontSize:"small", marginLeft: "20px"}}>General</h3>
        <div>
        <hr />
        </div>
        

        <div className='b-checkbox'>
        <div className='b-checkbox1'>
        <input type="checkbox"  id="b-hide" name="hide" />
        <label htmlFor="hide screen"> Hide screen meta links</label>
        </div>
        <div className='b-checkbox2'>
        <input type="checkbox" id="b-hide2" name="hide" />
        <label htmlFor="hide screen"> Hide the "Screen Options" button</label>
        </div>
        <div className='b-checkbox3'>
        <input type="checkbox" id="b-hide3" name="hide" />
        <label htmlFor="hide screen"> Hide the "Help" button</label>
        </div>
        </div>
        <div className='admin-notices'>   
        <input type="checkbox" id="notices-hide" name="hide" />
        <label htmlFor="hide screen"> Hide ALL admin notices</label>
        </div>
        <div className='option-menu'>   
        <input type="checkbox" id="option-hide" name="hide" />
        <label htmlFor="hide screen"> Hide the Gutenberg options menu (three vertical dots)</label>
        </div>
        <div className='wordpress-logo'>   
        <input type="checkbox" id="logo-hide" name="hide" />
        <label htmlFor="hide screen"> Hide the wordpress logo in Gutenberg fullscreen mode</label>
        </div>

        <hr />

        <div className='hide-footer'>
        <div className='admin-footer'>   
        <input type="checkbox" id="admin-hide" name="hide" />
        <label htmlFor="hide screen"> Hide the entire admin footer</label>
        </div>
        <div className='wordpress-version'>   
        <input type="checkbox" id="version-remove" name="hide" />
        <label htmlFor="hide screen"> Remove WordPress version information from the admin footer</label>
        </div>
        <div className='wordpress-version2'>   
        <input type="checkbox" id="version-remove2" name="hide" />
        <label htmlFor="hide screen"> Remove the WordPress version from the "At a Glance" widget</label>
        </div>
        </div>
      </div>
      </div>
     </div>
     <div>
     <p className='branding-text'>COLOR SCHEME</p>
     <div className='second-body01'>
     <div className='color01-parent' style={{paddingTop:"43px", paddingBottom:"10px"}}>
     <div className='color01-text'>Base</div>
     <div className='color01'>
     <input type="color" id="colorpicker" defaultValue="#2e96ff"  />
   <label for="colorpicker">select color</label>
     </div>
    </div>
  
    <div style={{marginLeft:"20px", marginRight:"20px"}}>
     <hr />
     </div>

     <div className='color02-parent'>
     <div className='color02-text'>Text</div>
     <div className='color02'>
     <input type="color" id="colorpicker" defaultValue="#FFEA2E"  />
   <label for="colorpicker">select color</label>
     </div>
     </div>

     <div style={{marginLeft:"20px", marginRight:"20px"}}>
     <hr />
     </div>

     <div className='color03-parent'>
     <div className='color03-text'>Highlight</div>
     <div className='color03'>
     <input type="color" id="colorpicker" defaultValue="#8BE816"  />
   <label for="colorpicker">select color</label>
     </div>
     </div>

     <div style={{marginLeft:"20px", marginRight:"20px"}}>
     <hr />
     </div>

     <div className='color04-parent'>
     <div className='color04-text'>Icon</div>
     <div className='color04'>
     <input type="color" id="colorpicker" defaultValue="#80FF94"  />
   <label for="colorpicker">select color</label>
     </div>
     </div>

     <div style={{marginLeft:"20px", marginRight:"20px"}}>
     <hr />
     </div>

     <div className='color05-parent'>
     <div className='color05-text'>Notification</div>
     <div className='color05'>
     <input type="color" id="colorpicker" defaultValue="#2EFFD9"  />
   <label for="colorpicker">select color</label>
     </div>
     </div>

     <div style={{marginLeft:"20px", marginRight:"20px"}}>
     <hr />
     </div>

     <div className='color06-parent'>
     <div className='color06-text'>Menu text</div>
     <div className='color06'>
     <input type="color" id="colorpicker" defaultValue="#EF9A4C"  />
   <label for="colorpicker">select color</label>
     </div>
     </div>

     <div style={{marginLeft:"20px", marginRight:"20px"}}>
     <hr />
     </div>

     <div className='color07-parent'>
     <div className='color07-text'>Menu Icon</div>
     <div className='color07'>
     <input type="color" id="colorpicker" defaultValue="#EF4C4C"  />
   <label for="colorpicker">select color</label>
     </div>
     </div>

     <div style={{marginLeft:"20px", marginRight:"20px"}}>
     <hr />
     </div>

     <div className='color08-parent'>
     <div className='color08-text'>Menu Background</div>
     <div className='color08'>
     <input type="color" id="colorpicker" defaultValue="#FF2EDE"  />
   <label for="colorpicker">select color</label>
     </div>
     </div>

     <div style={{marginLeft:"20px", marginRight:"20px"}}>
     <hr />
     </div>

     <div className='color09-parent'>
     <div className='color09-text'>Menu hover</div>
     <div className='color09'>
     <input type="color" id="colorpicker" defaultValue="#712EFF"  />
   <label for="colorpicker">select color</label>
     </div>
     </div>

     </div>
     </div>
    </div>
   <div className='body02'>
    <div className='half-body02'>
      <div>
      <p>WordPress Logo</p>
      </div>
      <div className='wordlogo'>
      <input type="checkbox" id="b-hide3" name="hide" />
      <label htmlFor="hide screen"> Remove the WordPress logo from the <a className='wordlogo-admin' href='#admin' target="_blank">admin bar</a></label>
        </div>
    </div>
    <hr />
    <div className='second-body02'>
      <div>
        <p>Custom logo</p>
      </div>
      <div className='fill-image'>
      <BsFillImageFill /> No image selected
      </div>
      <div className='select-fill-image'>
      <div className='fill-image1'>
       select image
      </div>
      <div className='fill-image2'>
       select external url
      </div>
      </div>
    </div>
    <p className='recommended-size'>Recommended Size: 16x16 px.</p>
    <hr />
    <div className='logo-url'>
      <div>
        <p>Logo Link url</p>
      </div>
      <div className='text'>
        <textarea  rows="1" column="40" placeholder='Enter or paste a link URL' />
      </div>
    </div>
    <hr />
    <div className='custom-howdy'>
      <div>
        <p>Custom <a className='text-color' href='#b' target="_blank">"Howdy"</a>  text</p>
      </div>
      <div className='text'>
        <textarea  rows="1" column="40" placeholder='Enter or paste a link URL' />
      </div>
      </div>
      <p className='custom-howdy-text'>Enter the greeting to use instead of “howdy”. Example: <a className='branding-text' href='#b' target="_blank">Welcome.</a><br />
      Alternatively, you can enter a sentence like <a className='branding-text' href='#b' target="_blank">Hi, %s!</a><br />
      The <a className='branding-text' href='#b' target="_blank">%s!</a> will be replaced with the user’s display name.
      </p>
      <hr />

      <div className='footer-parent'>
      <div className='footer-text'>
        <p>Footer text</p>
      </div>
      <div className='keyboard-parent'>
      <div className='V-checkbox'>
      <input type="checkbox" id="v-hide" name="checkbox" />
        <div className='visual-text'>
      <div className='v-label'> 
      <p style={{paddingTop:"10px", paddingLeft:"10px", paddingRight:"10px"}}>Visual</p> 
      <p className='Vertical'>Text</p>
      </div>
        </div>
      </div>
      <div className='keyboard'>
      <Texteditor />
      </div>
      </div>
      </div>

      <div className='footer-update'>
      <div className='update-text'>
        <p>WordPress update <br /> notifications</p>
      </div>
      <div className='user-radio'>
      <div className='wordPress-rad'> 
      <input type="radio" name="radio" id='input-radio' />
      <label htmlFor='text'>Show to all users</label> </div>
      <div className='wordPress-rad2'>
      <input type="radio" name="radio" id='input-radio' />
      <label htmlFor='text'>Show to users who can install updates</label>
      </div>
     <div className='wordPress-rad3'>
     <input type="radio" name="radio" id='input-radio' />
      <label htmlFor='text'>Hide from all users</label>
     </div>
    
      </div>
      </div>
      <hr />
      <div>
      <div>
      <p style={{fontSize:"18px"}}>WordPress Emails</p>
      <p className='branding-text' style={{fontSize:"15px"}}>You can change the  <span  style={{fontWeight:"600"}}>“From”</span> header for all emails sent by WordPress. These setting will also affecr any plugings that specify their own  <span style={{fontWeight:"600"}}>“From”</span> header.</p>
      </div>
      <div className='sender'>
      <div>
        <p>Sender name</p>
      </div>
      <div className='text2'>
        <textarea  rows="2" column="40" />
        <p style={{marginTop:"5px"}}>The default is <span className='wordpress-color' style={{fontWeight:"600"}}>wordPress</span></p>
      </div>
      </div>
      <div className='from-email'>
      <div>
        <p><span style={{fontWeight:"600"}}>"From"</span> email</p>
      </div>
      <div className='text2'>
        <textarea  rows="2" column="40" />
        <p style={{marginTop:"5px"}}>The default is <span className='wordpress-color' style={{fontWeight:"600"}}>wordPress@amedemo.com</span></p>
      </div>
      </div>
     <div className='save-themes'>
     <button>Save Changes</button>
      </div>
   </div>
   </div>
    </div>
  )
}

export default Branding