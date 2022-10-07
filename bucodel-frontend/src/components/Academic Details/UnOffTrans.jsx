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
  Semester,
  CourseID,
  CourseTitle,
  Score,
  Credit,
  Grade,
  Points
) {
  return { Semester, CourseID, CourseTitle, Score, Credit, Grade, Points };
}

const rows = [
  createData(
    "2019/2020.1",
    "GEDS280",
    "Software Requirements Engineering and Construction",
    3,
    "A",
    15
  ),
  createData(
    "2019/2020.1",
    "GEDS280",
    "Software Requirements Engineering and Construction",
    3,
    "A",
    15
  ),
  createData(
    "2019/2020.1",
    "GEDS280",
    "Software Requirements Engineering and Construction",
    3,
    "A",
    15
  ),
  createData(
    "2019/2020.1",
    "GEDS280",
    "Software Requirements Engineering and Construction",
    3,
    "A",
    15
  ),
  createData(
    "2019/2020.1",
    "GEDS280",
    "Software Requirements Engineering and Construction",
    3,
    "A",
    15
  ),
  createData(
    "2019/2020.1",
    "GEDS280",
    "Software Requirements Engineering and Construction",
    3,
    "A",
    15
  ),
  createData(
    "2019/2020.1",
    "GEDS280",
    "Software Requirements Engineering and Construction",
    3,
    "A",
    15
  ),
  createData(
    "2019/2020.1",
    "GEDS280",
    "Software Requirements Engineering and Construction",
    3,
    "A",
    15
  ),
];

export const UnOffTrans = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell id="tableHead">Semester</StyledTableCell>
              <StyledTableCell id="tableHead">Course ID</StyledTableCell>
              <StyledTableCell id="tableHead">Course Title</StyledTableCell>
              <StyledTableCell id="tableHead">Score</StyledTableCell>
              <StyledTableCell id="tableHead">Credit</StyledTableCell>
              <StyledTableCell id="tableHead">Grade</StyledTableCell>
              <StyledTableCell id="tableHead">Points</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell id="tableHead" component="th" scope="row">
                  {row.Semester}
                </StyledTableCell>
                <StyledTableCell id="tableHead">{row.CourseID}</StyledTableCell>
                <StyledTableCell id="tableHead">
                  {row.CourseTitle}
                </StyledTableCell>
                <StyledTableCell id="tableHead">{row.Score}</StyledTableCell>
                <StyledTableCell id="tableHead">{row.Credit}</StyledTableCell>
                <StyledTableCell id="tableHead">{row.Grade}</StyledTableCell>
                <StyledTableCell id="tableHead">{row.Points}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
