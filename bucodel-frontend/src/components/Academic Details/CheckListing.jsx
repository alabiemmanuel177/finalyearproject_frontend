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
              <StyledTableCell id="tableHead">Course ID</StyledTableCell>
              <StyledTableCell id="tableHead">Year</StyledTableCell>
              <StyledTableCell id="tableHead">Course Title</StyledTableCell>
              <StyledTableCell id="tableHead">Hours</StyledTableCell>
              <StyledTableCell id="tableHead">Course Passed</StyledTableCell>
              <StyledTableCell id="tableHead">Elective</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell id="tableHead" component="th" scope="row">
                  {row.CourseID}
                </StyledTableCell>
                <StyledTableCell id="tableHead">{row.Year}</StyledTableCell>
                <StyledTableCell id="tableHead">
                  {row.CourseTitle}
                </StyledTableCell>
                <StyledTableCell id="tableHead">{row.Hours}</StyledTableCell>
                <StyledTableCell id="tableHead">
                  {row.CoursePassed}
                </StyledTableCell>
                <StyledTableCell id="tableHead">{row.Elective}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
