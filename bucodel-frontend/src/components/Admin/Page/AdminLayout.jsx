import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import './page.css'

export default function AdminLayout({ children }) {
  return (
    <div className='page-root'>
        <div className='page-grid-1-header'>
            <AdminHeader/>
        </div>
        <div className='page-grid-1-body'>
            <AdminSidebar/>
            <div style={{ width: '100%', overflow: 'hidden scroll' }}>{children}</div>
        </div>
    </div>
  )
}
