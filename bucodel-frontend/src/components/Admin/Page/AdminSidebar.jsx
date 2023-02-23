import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { HiOutlineBookmarkAlt, HiOutlineLogout } from 'react-icons/hi'
import { RiDashboardLine } from 'react-icons/ri'

export default function AdminSidebar() {
    const SidebarButton = ({ name, icon }) => {
        return (
            <div className='page-sidebar-button'>
                {icon}
                <h6 className='page-sidebar-title'>{name}</h6>
            </div>
        )
    }

  return (
    <div className='page-sidebar-root'>
        <div className='page-sidebar-wrapper'>
            <div className='page-sidebar-upper'>
                <SidebarButton name={'Dashboard'} icon={<RiDashboardLine />} />
                <SidebarButton name={'Courses'} icon={<HiOutlineBookmarkAlt />} />
                <SidebarButton name={'Database'} icon={<AiOutlineSetting />} />
            </div>
            <div className="page-sidebar-lower">
                <SidebarButton name={'Settings'} icon={<AiOutlineSetting />} />
                <SidebarButton name={'Logout'} icon={<HiOutlineLogout />} />
            </div>
        </div>
    </div>
  )
}
