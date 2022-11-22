import React from 'react'
import '../Styles/Settings.css'

const Settings = () => {
  return (
  <div className='settings-parent'>
    <div className='settings-body'>
<div className='access-flex'>
  <p>Who can access this plugin</p>
  <div className='superadmin-parent'> 
  <div className='superadmin-checkbox'>
  <input type="radio" name="radio" />
  <label htmlFor="hide screen">Super Admin</label>
  </div>
  <p style={{marginTop:"10px"}}>On a single site installation this is usually the same as the Administrator role</p>

  <div className='manageoptions-checkbox'>
  <input type="radio" name="radio" />
  <label htmlFor="hide screen">Anyone with the <span style={{fontWeight:"400", fontSize:"20px"}}>"manage_options"</span> capability</label>
  </div>
  <p style={{marginTop:"10px"}}>By default only Administrator have this capability</p>

  <div className='superadmin-checkbox'>
  <input type="radio" name="radio" />
  <label htmlFor="hide screen">Only the curent user</label>
  </div>
  <p style={{marginTop:"10px"}}>Login: Demo, user ID: 1</p>

  <div className='hidepluggins-checkbox'>
  <input type="checkbox" name="checkbox" />
  <label htmlFor="hide screen">Hide this pluggin from the PLUGGINS page for other users</label>
  </div>
  </div>
</div>
 <hr />
 <div className='multisite-flex'>
  <p>Multisite settings</p>
  <div className='multisite-parent'> 
  <div className='multisite-checkbox'>
  <input type="radio" name="radio" />
  <label htmlFor="hide screen">Global - use the same admin menu settings fro all network sites</label>
  </div>
  <div className='multisite-checkbox2'>
  <input type="radio" name="radio" />
  <label htmlFor="hide screen">Pre-site - Use different admin menu settings for each use</label>
  </div>
  </div>
</div>
  <hr />
  <div className='bbPress-flex'>
  <p>bbPress override</p>
  <div className='multisite-parent'> 
  <div className='multisite-checkbox'>
  <input type="checkbox" name="checbox" />
  <label htmlFor="hide screen">Prevent bbPress from resetting role capacity</label>
  </div>
  <p style={{marginTop:"10px"}}>By deafult , bbPress will automatically undo any changes that are made to dynamic bbPress roles. Enable this override that behaviour and make it possible to change bbPress role capabilities.</p>
  <div className='multisite-checkbox2'>
  <input type="checkbox" name="checkbox" />
  <label htmlFor="hide screen">Attempt to override menu icon CSS that was added by other pluggins</label>
  </div>
  </div>
</div>
<hr />
<div className='roles-flex'>
  <p>Roles</p>
  <div>
    <p>PHP error log:</p>
    <textarea  rows="2" column="40" value="/home/amedome/php-errors.log" />
  </div>
</div>
    </div>
    <div className='settings-btn'>
      <button>Save</button>
    </div>
  </div>
);
}

export default Settings



