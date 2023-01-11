import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './index.css'

export default function index({ children }) {
  return (
    <div className="layout-root">
        <Header/>
        <div className="layout-body">
          <Sidebar/>
          <div className='layout-child'>{children}</div>
        </div>
    </div>
  )
}
