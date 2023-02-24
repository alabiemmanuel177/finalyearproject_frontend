import { Avatar, AvatarGroup, Card, CardActions, CardContent, CardHeader } from '@mui/material'
import React from 'react'
import { GrMoreVertical } from 'react-icons/gr'

const CourseCard = () => {
    return (
        <Card variant='outlined' sx={{ borderRadius: 2, maxWidth: 235, margin: '15px' }}>
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
    )
}

function CourseList() {
  return (
    <div className='admin-courselist-root'>
        <div style={{ display: 'flex', margin: '10px 0' }} className="admin-courselist-bar">
            <div className='admin-courselist-search'>
                <input placeholder='Search' className='admin-courselist-input'/>
            </div>
            <div><input/></div>
            <div><input/></div>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap'}} className="admin-courselist-grid">
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