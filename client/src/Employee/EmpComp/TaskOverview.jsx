import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(ProjectName, ProjectType, Deadline, Status) {
    return { ProjectName, ProjectType, Deadline, Status };
  }

const rows = [
    createData("Redesign Fintech dashboard", "UI design", "Feb 6", "In Progress"),
    createData("Redesign Fintech dashboard", "UI design", "Feb 6", "In Progress"),
    createData("Redesign Fintech dashboard", "UI design", "Feb 6", "In Progress"),
    createData("Redesign Fintech dashboard", "UI design", "Feb 6", "In Progress"),
    createData("Redesign Fintech dashboard", "UI design", "Feb 6", "In Progress"),
  ];

export const TaskOverview = () => {
  return (
    <div className="rounded-lg font-semibold flex flex-col gap-4 bg-yellow-100 p-5">
    <p>Task Overview</p>
    <TableContainer style={{ maxHeight: 250 }}>
      <Table
        stickyHeader
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow className="bg-blue-100">
            <TableCell>Project Name</TableCell>
            <TableCell align="right">Project Type</TableCell>
            <TableCell align="right">Deadline</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ maxHeight: "200px" }}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ProjectName}
              </TableCell>
              <TableCell align="right">{row.ProjectType}</TableCell>
              <TableCell align="right">{row.Deadline}</TableCell>
              <TableCell align="right">{row.Status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  )
}
