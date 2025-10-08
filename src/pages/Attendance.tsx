import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { DateRangePicker } from "rsuite";
import { mockData } from "../Mockdata/Mockatt";

const Attendance = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4 px-1 dark:bg-[#131C18]">
        <h1 className="text-3xl font-semibold dark:text-[#E8EAE9]">
          Attendance
        </h1>
        <div className="flex-shrink-0">
          <DateRangePicker
            size="md"
            placeholder="Select Date"
            placement="bottomEnd"
          />
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg shadow dark:bg-[#1A2D26]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 dark:bg-[#1A2D26]">
          <h2 className="text-xl font-semibold dark:text-[#E8EAE9]">
            All Employees
          </h2>
          <div className="flex gap-2 items-center">
            <div className=" border border-gray-300 dark:border-[#204335] rounded-md p-1 flex items-center gap-1 w-[250px]">
              <MdOutlineSearch className="text-gray-400 h-5 w-5" />
              <input
                type="search"
                className="border-0 focus:outline-none p-1 text-sm w-full  dark:text-[#E8EAE9] dark:bg-[#1A2D26]"
                placeholder="Search employee name or id"
              />
            </div>

            <Button
              sx={{
                backgroundColor: "white",
                color: "gray",
                boxShadow: "none",
                border: "1px solid lightgray",
                textTransform: "none",
              }}
              className="dark:bg-[#1A2D26] dark:text-[#E8EAE9] dark:border-[#204335]"
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
          className="min-h-80 overflow-y-auto shadow-none border-none dark:bg-[#1A2D26] dark:border-none"
        >
          <Table size="medium">
            <TableHead>
              <TableRow className="bg-gray-100 dark:bg-[#204335]">
                <TableCell className="font-semibold py-1 px-3 dark:text-[#E8EAE9] dark:border-[#253F35]">
                  Employee
                </TableCell>
                <TableCell className="font-semibold py-1 px-3 dark:text-[#E8EAE9] dark:border-[#253F35]">
                  Clock In
                </TableCell>
                <TableCell className="font-semibold py-1 px-3 dark:text-[#E8EAE9] dark:border-[#253F35]">
                  Clock Out
                </TableCell>
                <TableCell className="font-semibold py-1 px-3 dark:text-[#E8EAE9] dark:border-[#253F35]">
                  Total Hours Worked
                </TableCell>
                <TableCell className="font-semibold py-1 px-3 dark:text-[#E8EAE9] dark:border-[#253F35]">
                  Total Time Off
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockData.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-gray-50 dark:hover:bg-[#204335]"
                >
                  <TableCell className="dark:text-[#E8EAE9] dark:border-[#253F35]">{`${row.name} - ${row.id}`}</TableCell>
                  <TableCell className="dark:text-[#E8EAE9] dark:border-[#253F35]">
                    {row.clockIn}
                  </TableCell>
                  <TableCell className="dark:text-[#E8EAE9] dark:border-[#253F35]">
                    {row.clockOut}
                  </TableCell>
                  <TableCell className="dark:text-[#E8EAE9] dark:border-[#253F35]">
                    {row.totalHours}
                  </TableCell>
                  <TableCell className="dark:text-[#E8EAE9] dark:border-[#253F35]">
                    {row.totalTimeOff}
                  </TableCell>
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
