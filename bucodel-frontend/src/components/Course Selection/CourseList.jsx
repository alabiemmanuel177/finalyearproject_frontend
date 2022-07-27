import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  Year,  
  CourseID,
  CourseTitle,
  Instructor,
  Option,
  Credit
) {
  return {  Year, CourseID, CourseTitle, Instructor, Option, Credit };
}

const rows = [
  createData(
    1,
    "GEDS280",    
    "Software Requirements Engineering and Construction",
    "Dada Racheal",
    "Software Engineering",
    3
  ),
  createData(
    1,
    "GEDS280",    
    "Software Requirements Engineering and Construction",
    "Dada Racheal",
    "Software Engineering",
    3
  ), createData(
    1,
    "GEDS280",    
    "Software Requirements Engineering and Construction",
    "Dada Racheal",
    "Software Engineering",
    3
  ), createData(
    1,
    "GEDS280",    
    "Software Requirements Engineering and Construction",
    "Dada Racheal",
    "Software Engineering",
    3
  ), createData(
    1,
    "GEDS280",    
    "Software Requirements Engineering and Construction",
    "Dada Racheal",
    "Software Engineering",
    3
  ), createData(
    1,
    "GEDS280",    
    "Software Requirements Engineering and Construction",
    "Dada Racheal",
    "Software Engineering",
    3
  ), createData(
    1,
    "GEDS280",    
    "Software Requirements Engineering and Construction",
    "Dada Racheal",
    "Software Engineering",
    3
  ), createData(
    1,
    "GEDS280",    
    "Software Requirements Engineering and Construction",
    "Dada Racheal",
    "Software Engineering",
    3
  ), createData(
    1,
    "GEDS280",    
    "Software Requirements Engineering and Construction",
    "Dada Racheal",
    "Software Engineering",
    3
  ), createData(
    1,
    "GEDS280",    
    "Software Requirements Engineering and Construction",
    "Dada Racheal",
    "Software Engineering",
    3
  ),
  
];

export const CourseList = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Year</StyledTableCell>
              <StyledTableCell>Course ID</StyledTableCell>
              <StyledTableCell>Course Title</StyledTableCell>
              <StyledTableCell>Instructor</StyledTableCell>
              <StyledTableCell>Option</StyledTableCell>
              <StyledTableCell>Credit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.Year}
                </StyledTableCell>
                <StyledTableCell>{row.CourseID}</StyledTableCell>
                <StyledTableCell>{row.CourseTitle}</StyledTableCell>
                <StyledTableCell>{row.Instructor}</StyledTableCell>
                <StyledTableCell>{row.Option}</StyledTableCell>
                <StyledTableCell>{row.Credit}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
