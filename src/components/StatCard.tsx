import { Card, CardContent } from "@mui/material";
import  TimeIcon from "../assets/TimeIcon.svg";
import PeopleIcon from "../assets/peopleIcon.svg";
import TimeIcon5 from "../assets/TimeIcon5.svg";
import TimeIcon4 from "../assets/TimeIcon4.svg";
import TimeIcon3 from "../assets/TimeIcon3.svg";

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon }) => {
  return (
    <div>
      <Card className="shadow-sm shadow-gray-500 rounded-lg h-[100px]">
        <CardContent>
          <div className="flex justify-between items-center ">
            <p className="text-[#758DA3] text-sm">{label}</p>
            
            {icon === "IoPeople" && (
              <div className="w-10 h-10 flex items-center justify-center bg-[#F4F8FC] rounded">
              <img src={PeopleIcon} className="h-6 w-6 " />
             </div>
            )}
            {icon === "timeicon1" && (
              
               <div className="w-10 h-10 flex items-center justify-center bg-[#00DD390F] rounded ">
              <img src={TimeIcon} className="h-6 w-6  "/>
             </div>
            )}
            {icon === "timeicon2" && (
                <div className="w-10 h-10 flex items-center justify-center bg-[#AA19920F] rounded ">
              <img src={TimeIcon5} className="h-6 w-6 "/>
             </div>
            )}
            {icon === "timeicon3" && (
        
                <div className="w-10 h-10 flex items-center justify-center bg-[#FF01010F] rounded ">
              <img src={TimeIcon4} className="h-6 w-6  "/>
             </div>
              
            )}
            {icon === "timeicon4" && (
               <div className="w-10 h-10 flex items-center justify-center bg-[#FFA6400F] rouneded ">
              <img src={TimeIcon3} className="h-6 w-6 "/>
             </div>
              
            )}
          </div>

          <h2 className="text-2xl font-bold text-[#00274D] ">{value}</h2>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatCard;
