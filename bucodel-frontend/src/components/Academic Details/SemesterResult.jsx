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

function createData(Semester, Level, Hours, GPA, CHours, CGPA) {
  return { Semester, Level, Hours, GPA, CHours, CGPA };
}

const rows = [
  createData("2019/2020.1", 100, 20, 5.0, 20, 5.0),
  createData("2019/2020.2", 100, 20, 5.0, 40, 5.0),
  createData("2020/2021.1", 200, 20, 5.0, 60, 5.0),
  createData("2020/2021.2", 200, 20, 5.0, 80, 5.0),
  createData("2021/2022.1", 300, 20, 5.0, 100, 5.0),
  createData("2021/2022.2", 300, 20, 5.0, 120, 5.0),
  createData("2021/2022.2", 300, 20, 5.0, 140, 5.0),
  createData("2021/2022.2", 300, 20, 5.0, 160, 5.0),
];

export const SemesterResult = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell id="tableHead">Semester</StyledTableCell>
              <StyledTableCell id="tableHead">Level</StyledTableCell>
              <StyledTableCell id="tableHead">Hours</StyledTableCell>
              <StyledTableCell id="tableHead">GPA</StyledTableCell>
              <StyledTableCell id="tableHead">C. Hours</StyledTableCell>
              <StyledTableCell id="tableHead">CGPA</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell id="tableHead" component="th" scope="row">
                  {row.Semester}
                </StyledTableCell>
                <StyledTableCell id="tableHead">{row.Level}</StyledTableCell>
                <StyledTableCell id="tableHead">{row.Hours}</StyledTableCell>
                <StyledTableCell id="tableHead">{row.GPA}</StyledTableCell>
                <StyledTableCell id="tableHead">{row.CHours}</StyledTableCell>
                <StyledTableCell id="tableHead">{row.CGPA}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
