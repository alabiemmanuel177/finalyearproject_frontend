import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { styled } from '@mui/system';
import { Search } from '@mui/icons-material';
import { AiOutlineFunnelPlot } from 'react-icons/ai';
import axios from 'axios';
import config from '../../../config';

export default function Students() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const fetchStudents = async () => {
            const res = await axios.get(`${config.baseURL}/admin/courses`);
            setStudents(res.data);
        };
        fetchStudents();
    });


    function createData(name, matricId, year, school, department) {
        return { name, matricId, year, school, department }
    }

    const rows = [
        createData('Izu Onisokumen Preye', '19/1485', 400, 'CES', 'Software Engineering'),
        createData('Izu Onisokumen Preye', '19/1485', 400, 'CES', 'Software Engineering'),
        createData('Izu Onisokumen Preye', '19/1485', 400, 'CES', 'Software Engineering'),
        createData('Izu Onisokumen Preye', '19/1485', 400, 'CES', 'Software Engineering'),
        createData('Izu Onisokumen Preye', '19/1485', 400, 'CES', 'Software Engineering'),
        createData('Izu Onisokumen Preye', '19/1485', 400, 'CES', 'Software Engineering'),
        createData('Izu Onisokumen Preye', '19/1485', 400, 'CES', 'Software Engineering'),
        createData('Izu Onisokumen Preye', '19/1485', 400, 'CES', 'Software Engineering'),
        createData('Izu Onisokumen Preye', '19/1485', 400, 'CES', 'Software Engineering'),
        createData('Izu Onisokumen Preye', '19/1485', 400, 'CES', 'Software Engineering'),
        createData('Izu Onisokumen Preye', '19/1485', 400, 'CES', 'Software Engineering'),
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
                <Search style={{ height: '25px', width: '25px', color: 'gray', marginRight: '6px' }} />
                <input style={{ border: 0, height: '100%', width: '85%', outline: 'none' }} placeholder='Search' />
                <div style={{ padding: '5px 8px', margin: '0', width: '15%', border: '1px solid lightgray', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                    <AiOutlineFunnelPlot fontSize={20} />
                    <select style={{ padding: '0', margin: '0 0 0 2px', width: '100%', outline: 'none', border: 'none', background: 'transparent' }}>
                        <option value={'Filter'}>Filter</option>
                        <option value={'Filter'}>School</option>
                        <option value={'Filter'}>Department</option>
                        <option value={'Filter'}>Level</option>
                    </select>
                </div>
            </div>
            <div style={{ height: 'calc(100vh - 300px)', overflow: 'hidden auto' }}>
                <TableContainer sx={{ m: 0, padding: '0 10px', margin: 0 }} component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }} align='left'>Matric ID</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }} align='left'>Year</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }} align='left'>School</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }} align='left'>Department</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <TableCell component={'th'} scope='row'>
                                        <BsPerson style={{ fontSize: '28px', marginRight: '10px' }} /> {row.name}
                                    </TableCell>
                                    <TableCell align='left'>{row.matricId}</TableCell>
                                    <TableCell align='left'>{row.year}</TableCell>
                                    <TableCell align='left'>{row.school}</TableCell>
                                    <TableCell align='left'>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
                                            {row.department}
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