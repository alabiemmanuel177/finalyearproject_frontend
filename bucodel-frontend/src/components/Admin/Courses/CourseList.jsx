import { Avatar, AvatarGroup, Card, CardActions, CardContent, CardHeader } from '@mui/material'
import React from 'react'
import { GrMoreVertical } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'
import { Search } from '@mui/icons-material'
import { AiOutlineFunnelPlot } from 'react-icons/ai'

const CourseCard = () => {
    return (
        <NavLink to='/adminclass'>
            <Card variant='outlined' sx={{ borderRadius: 2, maxWidth: 245, margin: '15px 10px' }}>
                <CardHeader 
                    sx={{ bgcolor: '#0A3697', color: 'white' }}
                    action={<GrMoreVertical/>}
                    title={<h5 style={{ fontWeight: 'bold',}} >SENG 302</h5>}
                    subheader={<h6 style={{ fontWeight: 'bold', fontSize: '0.95rem', color: 'white' }}>Object Oriented Software Development</h6>}
                />
                <CardContent sx={{ display: 'flex', alignItems: 'center', padding: '8px'}}>
                    <div style={{ margin: '0 5px 0 0', padding: 0, width: '24px', height: '24px', borderRadius: '50%', position: 'relative' }} className='admin-coursecard-avatar'>
                        <img style={{ height: '100%', width: '100%', position: 'relative', borderRadius: '50%', }} src="https://mui.com/static/images/avatar/1.jpg" alt="man" />
                    </div>
                    <h6 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 'bold' }}>Dr Adetofunmi Adetunji</h6>
                </CardContent>
                <CardActions sx={{ display:'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ backgroundColor: 'lightgray', padding: '3px 8px', borderRadius: '15px', color: '#444444', fontSize: '0.75rem' }}>3 Units</div>
                    <AvatarGroup max={60}>
                        <Avatar sx={{ width: 20, height: 20 }} src={'https://mui.com/static/images/avatar/1.jpg'}>RB</Avatar>
                        <Avatar sx={{ width: 20, height: 20 }} src={'https://mui.com/static/images/avatar/1.jpg'}>RB</Avatar>
                        <Avatar sx={{ width: 20, height: 20 }} src={'https://mui.com/static/images/avatar/1.jpg'}>RB</Avatar>
                        <Avatar sx={{ width: 20, height: 20 }} src={'https://mui.com/static/images/avatar/1.jpg'}>RB</Avatar>
                    </AvatarGroup>
                </CardActions>
            </Card>
        </NavLink>
    )
}

function CourseList() {
  return (
    <div className='admin-courselist-root'>
        <div style={{ padding: '5px 30px', borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Search style={{ height: '25px', width: '25px', color: 'gray', marginRight: '6px' }}/>
            <input style={{ border: 0, height: '100%', width: '85%', outline: 'none'}} placeholder='Search'/>
            <div style={{ padding: '5px 8px', margin: '0', width: '15%', border: '1px solid lightgray', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                <AiOutlineFunnelPlot fontSize={20}/>
                <select style={{ padding: '0', margin: '0 0 0 2px', width: '100%', outline: 'none', border: 'none', background: 'transparent' }}>
                    <option value={'Filter'}>Filter</option>
                    <option value={'Filter'}>School</option>
                    <option value={'Filter'}>Department</option>
                    <option value={'Filter'}>Level</option>
                </select>
            </div>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', height: 'calc(100vh - 250px)', overflow: 'hidden auto', alignContent: 'flex-start', alignItems: 'center', justifyContent: 'flex-start'}} className="admin-courselist-grid">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/> 
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>            
        </div>
    </div>
  )
}

export default CourseList