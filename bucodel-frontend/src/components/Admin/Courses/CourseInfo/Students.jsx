import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { styled } from '@mui/system';
import { Search } from '@mui/icons-material';
import { AiOutlineMore } from 'react-icons/ai';

export default function Students() {
    function createData(name, matricId, year, school, department) {
        return {name, matricId, year, school, department}
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
        <div style={{ padding: '12px 30px', borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Search style={{ height: '25px', width: '25px', color: 'gray', marginRight: '6px' }}/>
            <input style={{ border: 0, height: '100%', width: '100%', outline: 'none'}} placeholder='Search'/>
        </div>
        <div>
            <TableContainer sx={{ m: 0, p: 2, margin: 0 }} component={Paper}>
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
                                    <BsPerson style={{ fontSize: '28px', marginRight: '10px' }}/> {row.name}
                                </TableCell>
                                <TableCell align='left'>{row.matricId}</TableCell>
                                <TableCell align='left'>{row.year}</TableCell>
                                <TableCell align='left'>{row.school}</TableCell>
                                <TableCell align='left'>
                                    <div  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0}}>
                                        {row.department} 
                                        <AiOutlineMore/>
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