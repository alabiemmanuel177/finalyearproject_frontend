import React from 'react'
import { useState } from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { HiOutlineBookmarkAlt, HiOutlineLogout } from 'react-icons/hi'
import { RiDashboardLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

export default function AdminSidebar() {
    const [active, setActive] = useState("1")
    const handleBtn = (e) => {
        setActive(e.target.getAttribute("name"))
    }

    const SidebarButton = ({ title, icon, link, name }) => {
        return (
               <NavLink to={link}>
                    <div onClick={handleBtn} name={name} className={active === name ? 'page-sidebar-button adminactive': 'page-sidebar-button dull'}>
                        {icon}
                        <h6 className='page-sidebar-title'>{title}</h6>
                    </div>
               </NavLink>
        )
    }

  return (
    <div className='page-sidebar-root'>
        <div className='page-sidebar-wrapper'>
            <div className='page-sidebar-upper'>
                <SidebarButton name={"1"} link={'/admindashboard'} title={'Dashboard'} icon={<RiDashboardLine />} />
                <SidebarButton name={"2"} link={'/admincourses'} title={'Courses'} icon={<HiOutlineBookmarkAlt />} />
                <SidebarButton name={"3"} link={'/admindatabase'} title={'Database'} icon={<AiOutlineSetting />} />
            </div>
            <div className="page-sidebar-lower">
                <SidebarButton name={"4"} link={'/adminsettings'} title={'Settings'} icon={<AiOutlineSetting />} />
                <SidebarButton name={"5"} link={'/logout'} title={'Logout'} icon={<HiOutlineLogout />} />
            </div>
        </div>
    </div>
  )
}
