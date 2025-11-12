import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

interface TableColumn {
  field: string;
  headerName: string;
  width?: number;
  valueGetter?: (row: any) => string | number;
  renderCell?: (row: any) => React.ReactNode;
}

interface TablesProps {
  columns: TableColumn[];
  data: any[];
}

const TableComponent: React.FC<TablesProps> = ({ columns, data }) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        flexGrow: 1,
        minHeight: "250px",
        maxHeight: "calc(115vh - 410px)",
        overflowY: "auto",
        overflowX: "auto",
      }}
    >
      <Table stickyHeader aria-label="sticky header">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col.field}
                sx={{
                  backgroundColor: "#F0F2F5",
                  color: "#000",
                  fontWeight: "600",
                }}
                className="dark:bg-[#243e35] dark:text-[#E8EAE9] dark:border-[#253F35]"
              >
                {col.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <Typography
                  variant="body2"
                  align="center"
                  sx={{
                    color: "#888888",
                    py: 3,
                  }}
                >
                  No records found.
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, index) => (
              <TableRow key={index} hover>
                {columns.map((col) => (
                  <TableCell key={col.field}>
                    {col.renderCell
                      ? col.renderCell(row)
                      : col.valueGetter
                      ? col.valueGetter(row)
                      : row[col.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
