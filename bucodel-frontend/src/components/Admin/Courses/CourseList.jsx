import { Avatar, AvatarGroup, Card, CardActions, CardContent, CardHeader, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { GrMoreVertical } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'
import { DeleteOutlined, EditOutlined, Search } from '@mui/icons-material'
import { AiOutlineFunnelPlot } from 'react-icons/ai'
import axios from 'axios'
import config from '../../../config'
import EditCourseModal from '../modals/EditCourseModal'
import DeleteModal from '../modals/Delete Modal'

function MenuComponent({ anchorEl, children, handleClose, open }) {
    return (
        <Menu
            sx={{ color: 'black' }}
            id='card-more-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ 'aria-labelledby': 'card-more-button' }}
        >
            {children}
        </Menu>
    )
}

const CourseCard = ({ course }) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const [openE, setOpenE] = useState(false)
    const handleOpen = () => setOpenE(true);

    const [openD, setOpenD] = useState(false)
    const handleOpenD = () => setOpenD(true);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Card variant='outlined' sx={{ borderRadius: 2, height: '195px', width: 245, margin: '15px 10px' }}>
            <CardHeader
                sx={{ bgcolor: '#0A3697', alignItems: 'flex-start', color: 'white', height: '60%' }}
                action={
                    <>
                        <IconButton
                            id='card-more-button'
                            aria-controls={open ? 'card-more-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <GrMoreVertical style={{ height: '16px', width: '16px', color: 'white' }} />
                        </IconButton>
                        <MenuComponent open={open} anchorEl={anchorEl} handleClose={handleClose}>
                            <MenuItem>
                                <ListItemIcon><EditOutlined /></ListItemIcon>
                                <ListItemText sx={{ color: 'black' }} onClick={handleOpen}>Edit</ListItemText>
                                <EditCourseModal open={openE} setOpen={setOpenE} course={course} />

                            </MenuItem>
                            <MenuItem sx={{ color: 'red', }}>
                                <ListItemIcon>
                                    <DeleteOutlined sx={{ color: 'red !important' }} />
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'red !important', fontSize: '0.9rem' }} onClick={handleOpenD}>Delete Class</ListItemText>
                                <DeleteModal open={openD} setOpen={setOpenD} course={course} />
                            </MenuItem>
                        </MenuComponent>
                    </>
                }
                title={
                    <NavLink to={`/adminclass/${course._id}`}>
                        <h5 style={{ fontWeight: 'bold', position: 'relative' }} >{course.courseabrev}</h5>
                    </NavLink>
                }
                subheader={
                    <NavLink to={`/adminclass/${course._id}`}>
                        <h6 style={{ fontWeight: 'bold', fontSize: '0.95rem', color: 'white' }}>{course.title}</h6>
                    </NavLink>
                }
            />
            <CardContent sx={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
                <div style={{ margin: '0 5px 0 0', padding: 0, width: '24px', height: '24px', borderRadius: '50%', position: 'relative' }} className='admin-coursecard-avatar'>
                    <img style={{ height: '100%', width: '100%', position: 'relative', borderRadius: '50%', }} src="https://mui.com/static/images/avatar/1.jpg" alt="man" />
                </div>
                <h6 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 'bold' }}>{course.lecturer[0].name}</h6>
            </CardContent>
            <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ backgroundColor: 'lightgray', padding: '3px 8px', borderRadius: '15px', color: '#444444', fontSize: '0.75rem' }}>{course.unit} Units</div>
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


    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetchCourses = async () => {
            const res = await axios.get(`${config.baseURL}/admin/all/courses`);
            setCourses(res.data);
        };
        fetchCourses();
    });
    return (
        <div className='admin-courselist-root'>
            <div style={{ padding: '5px 30px', borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Search style={{ height: '25px', width: '25px', color: 'gray', marginRight: '6px' }} />
                <input style={{ border: 0, height: '100%', width: '85%', outline: 'none' }} placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                <div style={{ padding: '5px 8px', margin: '0', width: '12%', border: '1px solid lightgray', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                    <AiOutlineFunnelPlot fontSize={20} />
                    <select style={{ padding: '0', margin: '0 0 0 2px', width: '100%', outline: 'none', border: 'none', background: 'transparent' }}>
                        <option value={'Filter'}>Filter</option>
                        <option value={'Filter'}>School</option>
                        <option value={'Filter'}>Department</option>
                        <option value={'Filter'}>Level</option>
                    </select>
                </div>
                <div style={{ padding: '5px 8px', margin: '0 5px', width: '12%', border: '1px solid lightgray', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                    <AiOutlineFunnelPlot fontSize={20} />
                    <select style={{ padding: '0', margin: '0 0 0 2px', width: '100%', outline: 'none', border: 'none', background: 'transparent' }}>
                        <option value={'Filter'}>Sort</option>
                        <option value={'Filter'}>School</option>
                        <option value={'Filter'}>Department</option>
                        <option value={'Filter'}>Level</option>
                    </select>
                </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', height: 'calc(100vh - 250px)', overflow: 'hidden auto', alignContent: 'flex-start', alignItems: 'center', justifyContent: 'flex-start' }} className="admin-courselist-grid">
                {courses.filter((p) => { return search.toLowerCase() === "" ? p : p.title.toLowerCase().includes(search) || p.courseabrev.toLowerCase().includes(search) || p.lecturer[0].name.toLowerCase().includes(search) }).map((p) => (
                    <CourseCard course={p} key={p._id} />
                ))}

            </div>
        </div>
    )
}

export default CourseList