import { Card, CardContent } from "@mui/material";
import { IoIosPeople } from "react-icons/io";
// import { FaRegClock } from "react-icons/fa";
import { TbClockEdit } from "react-icons/tb";

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon }) => {
  return (
    <div>
      <Card className="shadow rounded-2xl h-[80px]">
        <CardContent>
          <div className="flex justify-between items-center mb-1">
            <p className="text-gray-500 text-sm">{label}</p>
            {icon === "IoPeople" && (
              <IoIosPeople className="h-6 w-6 text-[#016AD4]" />
            )}
            {icon === "timeicon1" && (
              <TbClockEdit className="h-6 w-6 text-[#07C437] " />
            )}
            {icon === "timeicon2" && (
              <TbClockEdit className="h-6 w-6 text-[#AA1992] " />
            )}
            {icon === "timeicon3" && (
              <TbClockEdit className="h-6 w-6 text-[#FF0101] " />
            )}
            {icon === "timeicon4" && (
              <TbClockEdit className="h-6 w-6 text-[#FFA640] " />
            )}
          </div>

          <h2 className="text-2xl font-bold">{value}</h2>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatCard;
