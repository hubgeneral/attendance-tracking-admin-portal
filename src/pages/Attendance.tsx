import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { mockData } from "../Mockdata/Mockatt";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { DateRangePicker } from 'rsuite';

const Attendance = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4 px-1">
        <h1 className="text-3xl font-semibold">Attendance</h1>
        <div className="flex-shrink-0">
        <DateRangePicker size="md" placeholder="Select Date" placement="bottomEnd" />
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg shadow">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-xl font-semibold">All Employees</h2>
          <div className="flex gap-2 items-center">
            <div className=" border border-gray-300 rounded-md p-1 flex items-center gap-1 w-[250px]">
              <MdOutlineSearch className="text-gray-400 h-5 w-5" />
              <input  type="search" className="border-0 focus:outline-none p-1 text-sm w-full" placeholder="Search employee name or id" />
            </div>
             
            <Button
              sx={{
                backgroundColor: "white",
                color: "gray",
                boxShadow: "none",
                border: "1px solid lightgray",
                textTransform: "none",
              }}
            >
              {" "}
              <FaRegFileAlt className=" pe-1" />
              Export
            </Button>
         </div>
        </div>

        {/* Table */}
        <TableContainer
          component={Paper}
          elevation={0} // removes the paper default styles
          className="min-h-80 overflow-y-auto shadow-none border-none"
        >
          <Table size="medium">
            <TableHead>
              <TableRow className="bg-gray-100 ">
                <TableCell className="font-semibold py-1 px-3">
                  Employee
                </TableCell>
                <TableCell className="font-semibold py-1 px-3">
                  Clock In
                </TableCell>
                <TableCell className="font-semibold py-1 px-3">
                  Clock Out
                </TableCell>
                <TableCell className="font-semibold py-1 px-3">
                  Total Hours Worked
                </TableCell>
                <TableCell className="font-semibold py-1 px-3">
                  Total Time Off
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{`${row.name} - ${row.id}`}</TableCell>
                  <TableCell>{row.clockIn}</TableCell>
                  <TableCell>{row.clockOut}</TableCell>
                  <TableCell>{row.totalHours}</TableCell>
                  <TableCell>{row.totalTimeOff}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Attendance;
