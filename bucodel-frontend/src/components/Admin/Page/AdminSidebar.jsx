import React from 'react'
import { useState } from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { HiOutlineBookmarkAlt, HiOutlineLogout } from 'react-icons/hi'
import { RiDashboardLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import LogOutModal from '../modals/LogOutModal';

export default function AdminSidebar() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const [active, setActive] = useState("1")
    const handleBtn = (e) => {
        setActive(e.target.getAttribute("name"))
    }

    const SidebarButton = ({ title, icon, link, name }) => {
        return (
            <NavLink to={link}>
                <div onClick={handleBtn} name={name} className={active === name ? 'page-sidebar-button adminactive' : 'page-sidebar-button dull'}>
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
                    <div onClick={handleOpen} name={"5"} className={active === 5 ? 'page-sidebar-button adminactive' : 'page-sidebar-button dull'}>
                        <HiOutlineLogout />
                        <h6 className='page-sidebar-title'>Logout</h6>
                    </div>
                    <LogOutModal open={open} setOpen={setOpen} />
                </div>
            </div>
        </div>
    )
}
