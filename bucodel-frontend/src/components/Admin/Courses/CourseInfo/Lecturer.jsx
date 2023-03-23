import { CancelOutlined, PersonOutline, Search } from '@mui/icons-material'
import { IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { AiOutlineMore } from 'react-icons/ai'

function TableItem({ name, school, matricId, department, role }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <li className='custom-table-item'
            style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                margin: '0',
                padding: '9px 20px'
            }}
        >
            <div style={{ width: '32.5%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', margin: '0' }}>
                <PersonOutline sx={{ marginRight: '15px' }} />
                <h6 style={{ fontSize: '0.9rem', margin: '0', width: '100%' }}>{name}</h6>
            </div>
            <div style={{ fontSize: '0.9rem', width: '13.3%', }}>{matricId}</div>
            <div style={{ fontSize: '0.9rem', width: '13.3%', }}>{school}</div>
            <div style={{ fontSize: '0.9rem', width: '22.5%', }}>{department}</div>
            <div style={{ fontSize: '0.9rem', width: '13.3%', color: '#0a3697', fontWeight: 'bold' }}>{role}</div>
            <div style={{ width: '5%' }}>
                <IconButton
                    id="item-button"
                    aria-controls={open ? 'item-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <AiOutlineMore />
                </IconButton>
                <Menu
                    id='item-menu'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'item-button',
                    }}
                    sx={{ borderRadius: '10px' }}
                >
                    <MenuItem style={{ color: 'red', display: 'flex', padding: '8px 20px 8px 15px', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <CancelOutlined style={{ marginRight: '5px', fontSize: '1.1rem' }} />
                        <h6 style={{ margin: '0 5px 0 0', fontSize: '0.9rem' }}>Remove</h6>
                    </MenuItem>
                </Menu>
            </div>
        </li>
    )
}

function Student2({ lecturers }) {
    return (
        <div style={{ width: '100%' }}>
            <div style={{ padding: '7px 30px', borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Search style={{ height: '25px', width: '25px', color: 'gray', marginRight: '6px' }} />
                <input style={{ border: 0, height: '100%', width: '100%', outline: 'none' }} placeholder='Search' />
            </div>
            <div style={{ padding: '0', margin: '0', }}>
                <li
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        margin: '0',
                        padding: '12px 20px',
                        borderBottom: '1px solid lightgray',
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                    }}
                >
                    <div style={{ width: '31.7%', }}>Name</div>
                    <div style={{ width: '13.1%', }}>Matric ID</div>
                    <div style={{ width: '13.2%', }}>School</div>
                    <div style={{ width: '27.5%', }}>Department</div>
                    <div style={{ width: '13.2%', }}></div>
                </li>
                <div style={{ height: 'calc(100vh - 330px)', width: '100%', overflow: 'hidden auto', }}>
                    {lecturers.map((lecturer) => (<TableItem name={lecturer.name} role={lecturer.type} school={lecturer.department.school.abrev} department={lecturer.department.name} matricId={'19/1485'} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Student2
