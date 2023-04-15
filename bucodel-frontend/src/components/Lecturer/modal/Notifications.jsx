import React from 'react';
import { Avatar, Button, ListItemAvatar, Menu, MenuItem, Typography } from '@mui/material';
import { FaRegUserCircle } from 'react-icons/fa';
import { CheckCircle, CheckCircleOutline } from '@mui/icons-material';

function Notification({}) {
    return (
        <MenuItem sx={{paddingTop: '18px', paddingBottom: '18px', borderTop: '1px solid #e5e5e5', alignItems: 'flex-start'}}>
            <Avatar sx={{ marginRight: '12px', width: 30, height: 30 }}>M</Avatar>
            <Typography sx={{display: 'flex', flexDirection: 'column'}} variant='inherit' noWrap>
                <Typography noWrap sx={{ color: 'black', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '5px' }}>
                    Ray Arnold left 6 comments on a post in SENG 302 Class Forum
                </Typography>
                <span style={{ color: 'darkgray', fontSize: '0.8rem' }}>Yesterday at 11:28 PM</span>
            </Typography>
        </MenuItem>
    )
}

function Notifications({ anchorEl, open, handleClose }) {
  return (
    <Menu
        id='notification-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'notification-button',
        }}
        sx={{
          width: '450px',
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
        <MenuItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='inherit' sx={{ fontWeight: 'bold'}}>Notifications</Typography>
            <Button sx={{textTransform: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center',}}><span style={{ color: '#0a3697' }}>Mark all as read &nbsp;</span><CheckCircleOutline/></Button>
        </MenuItem>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
    </Menu>
  )
}

export default Notifications