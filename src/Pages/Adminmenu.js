import React from 'react'
import "../Styles/Admin.css"
import {TbGripVertical} from "react-icons/tb"
import {HiMinus} from "react-icons/hi"
import {BiHeading} from "react-icons/bi"
import {BsPlusLg} from "react-icons/bs"
import {AiOutlineScissor} from "react-icons/ai"
import {MdContentCopy} from 'react-icons/md'
import {FaRegClipboard} from 'react-icons/fa'
import {BsEyeSlash} from 'react-icons/bs'
import {MdOutlineTextSnippet} from "react-icons/md"
import {MdOutlineDocumentScanner} from "react-icons/md"
import {ImTable2} from "react-icons/im"
import {BsImageFill} from "react-icons/bs"

const Adminmenu = () => {
  return (
    <div className='admin-parent'>
      <div className='admin-heading'>
      <div className='admin-select'>
      <select  name="themes" id="A-themes">
    <option  value="theme1">Customize this for ALL</option>
    <option value="theme2">Customize this for ALL</option>
    <option value="theme3">Customize this for ALL</option>
  </select>
      </div>
      </div>
      <div className='admin-body'>
      <div className='admin-body001'>
      <div className='admin-body01'>     
        <div className='dashboard'>
          <p>Dashboard</p>
          <TbGripVertical />
        </div>
        <div className='divider'>
        <div className='divider-icon'>
        <HiMinus  />
        <p>Divider</p> 
        </div>
        <TbGripVertical />
        </div>
        <div className='posts'>
          <p>Posts</p>
          <TbGripVertical />
        </div>
        <div className='pages'>
          <p>Pages</p>
          <TbGripVertical />
        </div>
        <div className='all-page'>
          <p>All Page</p>
          <TbGripVertical />
        </div>
        <div className='add-new'>
          <p>Add New</p>
          <TbGripVertical />
        </div>
        <div className='comments'>
          <p>Comments</p>
          <TbGripVertical />
        </div>
        <div className='link-t'>
          <p>Links</p>
          <TbGripVertical />
        </div>
        <div className='media'>
          <p>Media</p>
          <TbGripVertical />
        </div>
        <div className='divider'>
        <div className='divider-icon'>
        <HiMinus />
        <p>Divider</p> 
        </div>
        <TbGripVertical />
        </div>
        <div className='appearance'>
          <p>Appearance</p>
          <TbGripVertical />
        </div>
        <div className='plugin'>
          <p>Plugins</p>
          <TbGripVertical />
        </div>
        <div className='Heading'>
        <div className='Heading-icon'>
        <BiHeading size="25px" />
        <p>Heading</p> 
        </div>
        <TbGripVertical />
        </div>
        <div className='users'>
          <p>Users</p>
          <TbGripVertical />
        </div>
        <div className='tools'>
          <p>Tools</p>
          <TbGripVertical />
        </div>
        <div className='settings'>
          <p>Settings</p>
          <TbGripVertical />
        </div>
      </div>
      <div className='admin-body002'>
        <div className='body002-heading'>
        <p className='adminbar-text'>ADMIN BAR MENU</p>
        </div>
        <div className='admin-body02'>
        <div className='site'>
          <p>Site Name</p>
          <TbGripVertical />
        </div>
        <div className='menu-comments'>
          <p>Comments</p>
          <TbGripVertical />
        </div>
        <div className='new'>
          <p>New</p>
          <TbGripVertical />
        </div>
        <div className='ap'>
          <p>Ap Rocket</p>
          <TbGripVertical />
        </div>
        </div>
      </div>
      </div>
      <div className='admin-body003'>
        <div className='body003-heading'>
        <BsPlusLg size="40px" />
        </div>
        <div className='admin-body03'>
          <div className='body03-icons'>
            <AiOutlineScissor />
            <MdContentCopy />
            <FaRegClipboard />
            <BsEyeSlash />
            <MdOutlineTextSnippet />
            <MdOutlineDocumentScanner />
          </div>
          <div className='add-menu'>
          <p>Add menu</p>
          <TbGripVertical />
        </div>
        <div className='add-divider'>
          <p>Add divider</p>
          <TbGripVertical />
        </div>
        <div className='add-heading'>
          <p>Add heading</p>
          <TbGripVertical />
        </div>
        </div>
      </div>
      <div className='admin-body004'>
      <div className='undo-changes'>
        <div className='undo-icon'>
        <ImTable2 />
        <p>Undo changes</p> 
        </div>
        <TbGripVertical />
        </div>
        <div className='load-menu'>
        <div className='load-icon'>
        <HiMinus />
        <p>Load default menu</p> 
        </div>
        <TbGripVertical />
        </div>
        <div className='hide-adminmenu'>
        <div className='hide-icon'>
        <HiMinus />
        <p>Hide the admin menu</p> 
        </div>
        <TbGripVertical />
        </div>
        <div className='hide-adminbar'>
        <div className='bar-icon'>
        <BsImageFill />
        <p>Hide the admin bar</p> 
        </div>
        <TbGripVertical />
        </div>
        <div className='ascending-order'>
        <div className='order-icon'>
        <HiMinus />
        <p>Sort in ascending order</p> 
        </div>
        <TbGripVertical />
        </div>
        <div className='descending-order'>
        <div className='des-icon'>
        <BsImageFill />
        <p>Sort in descending order</p> 
        </div>
        <TbGripVertical />
        </div>
        <div className='another-role'>
        <div className='role-icon'>
        <BsImageFill />
        <p>Apply to another role</p> 
        </div>
        <TbGripVertical />
        </div>
        <div className='admin-btn'>
          <button>Save</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Adminmenu