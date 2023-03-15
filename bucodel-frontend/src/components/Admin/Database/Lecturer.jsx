import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { styled } from '@mui/system';
import { Search } from '@mui/icons-material';
import { AiOutlineFunnelPlot } from 'react-icons/ai'
import axios from 'axios';
import config from '../../../config';

export default function Lecturer() {

    const [lecturers, setLecturers] = useState([]);
    useEffect(() => {
        const fetchLecturers = async () => {
            const res = await axios.get(`${config.baseURL}/admin/courses`);
            setLecturers(res.data);
        };
        fetchLecturers();
    });
    function createData(name, matricId, school, department, role) {
        return { name, matricId, school, department, role }
    }

    const rows = [
        createData('Izu Onisokumen Preye', '19/1485', 'CES', 'Software Engineering', 'Facilitator'),
        createData('Izu Onisokumen Preye', '19/1485', 'CES', 'Software Engineering', 'Tutor'),
    ]

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '& > *': {
            border: 0,
        },
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <div style={{ padding: '0', width: '100%' }}>
            <div style={{ padding: '7px 30px', borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Search style={{ height: '25px', width: '25px', color: 'rgba(0, 0, 0, 0.87)', marginRight: '6px' }} />
                <input style={{ border: 0, height: '100%', width: '88%', outline: 'none' }} placeholder='Search' />
                <div style={{ padding: '5px 8px', margin: '0', width: '12%', border: '1px solid lightgray', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                    <AiOutlineFunnelPlot color='rgba(0, 0, 0, 0.87)' fontSize={20} />
                    <select style={{ color: 'rgba(0, 0, 0, 0.87)', padding: '0', margin: '0 0 0 2px', width: '100%', outline: 'none', border: 'none', background: 'transparent' }}>
                        <option value={'Filter'}>Filter</option>
                        <option value={'Filter'}>School</option>
                        <option value={'Filter'}>Department</option>
                        <option value={'Filter'}>Level</option>
                    </select>
                </div>
            </div>
            <div style={{ height: 'calc(100vh - 260px)', overflow: 'hidden auto' }}>
                <TableContainer sx={{ m: 0, p: 2, margin: 0 }} component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }} align='left'>Matric ID</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }} align='left'>School</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }} align='left'>Department</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }} align='left'></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <TableCell component={'th'} scope='row'>
                                        <BsPerson style={{ fontSize: '28px', marginRight: '10px' }} /> {row.name}
                                    </TableCell>
                                    <TableCell align='left'>{row.matricId}</TableCell>
                                    <TableCell align='left'>{row.school}</TableCell>
                                    <TableCell align='left'>{row.department}</TableCell>
                                    <TableCell align='left'>
                                        <div
                                            style={{ padding: 0, color: 'blue', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            {row.role}
                                        </div>
                                    </TableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}