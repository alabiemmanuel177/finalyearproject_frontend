import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminLayout from '../../components/Admin/Page/AdminLayout'

const AdminPage = () => {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  )
}

export default AdminPage