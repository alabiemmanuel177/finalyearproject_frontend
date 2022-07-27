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
  CourseID,
  Year,
  CourseTitle,
  Hours,
  CoursePassed,
  Elective
) {
  return { CourseID, Year, CourseTitle, Hours, CoursePassed, Elective };
}

const rows = [
  createData(
    "GEDS280",
    1,
    "Software Requirements Engineering and Construction",
    3,
    "Yes",
    "No"
  ),
  createData(
    "GEDS280",
    1,
    "Software Requirements Engineering and Construction",
    3,
    "Yes",
    "No"
  ),
  createData(
    "GEDS280",
    1,
    "Software Requirements Engineering and Construction",
    3,
    "Yes",
    "No"
  ),
  createData(
    "GEDS280",
    1,
    "Software Requirements Engineering and Construction",
    3,
    "Yes",
    "No"
  ),
  createData(
    "GEDS280",
    1,
    "Software Requirements Engineering and Construction",
    3,
    "Yes",
    "No"
  ),
  createData(
    "GEDS280",
    1,
    "Software Requirements Engineering and Construction",
    3,
    "Yes",
    "No"
  ),
  createData(
    "GEDS280",
    1,
    "Software Requirements Engineering and Construction",
    3,
    "Yes",
    "No"
  ),
  createData(
    "GEDS280",
    1,
    "Software Requirements Engineering and Construction",
    3,
    "Yes",
    "No"
  ),
];

export const CheckListing = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Course ID</StyledTableCell>
              <StyledTableCell>Year</StyledTableCell>
              <StyledTableCell>Course Title</StyledTableCell>
              <StyledTableCell>Hours</StyledTableCell>
              <StyledTableCell>Course Passed</StyledTableCell>
              <StyledTableCell>Elective</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.CourseID}
                </StyledTableCell>
                <StyledTableCell>{row.Year}</StyledTableCell>
                <StyledTableCell>{row.CourseTitle}</StyledTableCell>
                <StyledTableCell>{row.Hours}</StyledTableCell>
                <StyledTableCell>{row.CoursePassed}</StyledTableCell>
                <StyledTableCell>{row.Elective}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
