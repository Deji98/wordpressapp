import React from 'react'
import "../Styles/Wp.css"

const Wp = () => {
  return (
    <div className='Wp-parent'>
    <div className='flex-parent'>
    <div> 
    <div>
      <p className='login-text'>LOGIN REDIRECT</p>
      <div className='wp-body01'>
      <div className='wp-users'>
      <p>Users</p>
      <div>
      <select  name="themes" id="wp-themes">
    <option  value="theme1">Add a user</option>
    <option value="theme2">Add a user</option>
    <option value="theme3">Add a user</option>
     </select>
      </div>
      </div>
      <hr />
      <div className='wp-roles'>
      <p>Roles</p>
      <div>
      <select  name="themes" id="wp-themes">
    <option  value="theme1">Add a role</option>
    <option value="theme2">Add a role</option>
    <option value="theme3">Add a role</option>
     </select>
      </div>
      </div>
      <hr />
      <div className='wp-default'>
      <p>Default</p>
      <div className='default-text'>
      <p>the default setting will be applied to users who don't match any of the above rules. Leave the field empty to let WordPress or other plugins choose the redirect</p>
      <div>
      <select  name="themes" id="wp-themes">
    <option  value="theme1"></option>
    <option value="theme2"></option>
    <option value="theme3"></option>
     </select>
      </div>
      <div className='wp-checkbox'>
        <input type="checkbox" id="b-hide" name="hide" />
        <label htmlFor="shortcuts"> [/] Enable shortcuts </label>
      </div>
      </div>
      </div>
      </div>
      </div>


      <div className='wp-body002'>
      <p className='logout-text'>LOGOUT REDIRECT</p>
      <div className='wp-body02'>
      <div className='wp-users'>
      <p>Users</p>
      <div>
      <select  name="themes" id="wp-themes">
    <option  value="theme1">Add a user</option>
    <option value="theme2">Add a user</option>
    <option value="theme3">Add a user</option>
     </select>
      </div>
      </div>
      <hr />
      <div className='wp-roles'>
      <p>Roles</p>
      <div>
      <select  name="themes" id="wp-themes">
    <option  value="theme1">Add a role</option>
    <option value="theme2">Add a role</option>
    <option value="theme3">Add a role</option>
     </select>
      </div>
      </div>
      <hr />
      <div className='wp-default'>
      <p>Default</p>
      <div className='default-text'>
      <p>the default setting will be applied to users who don't match any of the above rules. Leave the field empty to let WordPress or other plugins choose the redirect</p>
      <div>
      <select  name="themes" id="wp-themes">
    <option  value="theme1"></option>
    <option value="theme2"></option>
    <option value="theme3"></option>
     </select>
      </div>
      <div className='wp-checkbox'>
        <input type="checkbox" id="b-hide" name="hide" />
        <label htmlFor="shortcuts"> [/] Enable shortcuts </label>
      </div>
      </div>
      </div>
  
      
   
      
      </div>
      </div>

      <div className='wp-body003'>
      <p className='reg-text'>REGISTRATION REDIRECT</p>
      <div className='wp-body03'>
      <div className='wp-default'>
      <p>All Users</p>
      <div className='default-text'>
      <p>the registration redirects happens immediately after someone register a new user account but before they log in for the first time. By default, the user is redirect to a 'check your email' page</p>
      <div>
      <select  name="themes" id="wp-themes">
    <option  value="theme1"></option>
    <option value="theme2"></option>
    <option value="theme3"></option>
     </select>
      </div>
      <div className='wp-checkbox'>
        <input type="checkbox" id="b-hide" name="hide" />
        <label htmlFor="shortcuts"> [/] Enable shortcuts </label>
      </div>
      </div>
      </div>
  
      
   
      
      </div>
      </div>
      </div>

<div>
     <p className='login-text'>FIRST LOGIN REDIRECT</p>
      <div className='wp-body04'>
      <div className='wp-body004'>
      <div className='wp-firstroles'>
      <p>Roles</p>
      <div>
      <select  name="themes" id="wp-first">
    <option  value="theme1">Add a role</option>
    <option value="theme2">Add a role</option>
    <option value="theme3">Add a role</option>
     </select>
      </div>
      </div>
      <hr />
      <div className='first-default'>
      <p>Default</p>
      <div className='default-text'>
      <p>the default setting will be applied to users who don't match any of the above rules. Leave the field empty to let WordPress or other plugins choose the redirect</p>
      <div>
      <select  name="themes" id="wp-first">
    <option  value="theme1"></option>
    <option value="theme2"></option>
    <option value="theme3"></option>
     </select>
      </div>
      <div className='wp-checkbox'>
        <input type="checkbox" id="b-hide" name="hide" />
        <label htmlFor="shortcuts"> [/] Enable shortcuts </label>
      </div>
      </div>
      </div>
      </div>
     
      </div>
      <div className='wp-body05'>
        <div className='core-contents'>
        <p>Core Contents Path: <span>/wp-content =&gt; </span></p>
        <textarea  rows="2" column="40" value="/core" />
        </div>
        <hr />
        <div className='core-contents'>
        <p>Core Includes Path: <span>/wp-Includes =&gt; </span></p>
        <textarea  rows="2" column="40" value="/lib" />
        </div>
        <hr />
        <div className='core-contents'>
        <p>Upload Path: <span>/wp-content/uploads =&gt; </span></p>
        <textarea  rows="2" column="40" value="/storage" />
        </div>
        <hr />
        <div className='core-contents'>
        <p>Author Path: <span>/author =&gt; </span></p>
        <textarea  rows="2" column="40" value="/writer" />
        </div>
        <hr />
        <div className='core-contents'>
        <p>Plugin Path: <span>/wp-content/plugins =&gt; </span></p>
        <textarea  rows="2" column="40" value="/core/modules" />
        </div>
        <hr />
        <div className='core-contents'>
        <p>Themes Path: <span>/wp-content/theme =&gt; </span></p>
        <textarea  rows="2" column="40" value="/core/views" />
        </div>
        <hr />
        <div className='core-contents'>
        <p>Comments Path: <span>/wp-comments-post.php =&gt; </span></p>
        <textarea  rows="2" column="40" value="/comments" />
        </div>
      </div>
      <div className='wp-body06'>
      <div className='wp-roles'>
      <p>Simulate</p>
      <div>
      <select  name="themes" id="last-checkbox">
    <option  value="theme1">Joomla 1.5</option>
    <option value="theme2">Joomla 1.5</option>
    <option value="theme3">Joomla 1.5</option>
     </select>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className='wp-btn'>
        <button>Save</button>
      </div>
    </div>
  )
}

export default Wp