import React from 'react'
import "../Styles/Metaboxes.css"

const Metaboxes = () => {
  return (
    <div className='parent-meta'>
      <div className='meta-heading'>
      <div className='meta-select'>
      <div>
      <select  name="themes" id="M-themes">
    <option  value="theme1">Select the <span style={{fontWeight:"700", fontSize:"24px"}}>ROLE</span></option>
    <option value="theme2">Select the <span style={{fontWeight:"700", fontSize:"24px"}}>ROLE</span></option>
    <option value="theme3">Select the <span style={{fontWeight:"700", fontSize:"24px"}}>ROLE</span></option>
     </select>
     <p style={{ color:"#1C3387"}}>Uncheck the box to hide that element</p>
      </div>
     
     <div className='meta-btn'>
          <button>Save</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Metaboxes