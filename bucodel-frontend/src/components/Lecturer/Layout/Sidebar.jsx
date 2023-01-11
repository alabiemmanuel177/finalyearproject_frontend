import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { HiOutlineBookmarkAlt, HiOutlineClipboardList, HiOutlineDocumentText, HiOutlineLogout } from 'react-icons/hi'
import { RiDashboardLine } from 'react-icons/ri'

export default function Sidebar() {
  return (
    <div className="layout-sidebar">
        <div className="sidebar-wrapper">
            <div className='top-links'>
                <button className='side-button'>
                    <RiDashboardLine className='sidebar-icon'/>
                    Dashboard
                </button>
                <button className='side-button'>
                    <HiOutlineBookmarkAlt className='sidebar-icon'/>
                    Courses
                </button>
                <button className='side-button'>
                    <HiOutlineClipboardList className='sidebar-icon'/>
                    Assignments
                </button>
                <button className='side-button'>
                    <HiOutlineDocumentText className='sidebar-icon'/>
                    Resources
                </button>
            </div>
            <div className='bottom-links'>
                <button className='side-button'>
                    <AiOutlineSetting className='sidebar-icon'/>
                    Settings
                </button>
                <button className='side-button'>
                    <HiOutlineLogout className='sidebar-icon'/>
                    Log Out
                </button>
            </div>
        </div>
    </div>
  )
}
