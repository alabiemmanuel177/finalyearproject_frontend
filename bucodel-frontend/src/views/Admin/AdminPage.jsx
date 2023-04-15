import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminLayout from '../../components/Admin/Page/AdminLayout'

const AdminPage = ({ admin }) => {
  return (
    <AdminLayout admin={admin}>
      <Outlet />
    </AdminLayout>
  )
}

export default AdminPage