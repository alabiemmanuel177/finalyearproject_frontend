import React from 'react';
import Layout from '../../../components/Lecturer/Layout'
import { Outlet } from 'react-router-dom';

const LecturerClassroom = () => {
  return (
    <Layout>
      <Outlet/>
    </Layout>
  )
}

export default LecturerClassroom