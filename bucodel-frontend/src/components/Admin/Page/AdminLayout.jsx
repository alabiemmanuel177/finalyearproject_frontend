import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import './page.css'

export default function AdminLayout({ children, admin }) {
  return (
    <div className='page-root'>
      <div className='page-grid-1-header'>
        <AdminHeader admin={admin} />
      </div>
      <div className='page-grid-1-body'>
        <AdminSidebar />
        <div className='page-output'>{children}</div>
      </div>
    </div>
  )
}
