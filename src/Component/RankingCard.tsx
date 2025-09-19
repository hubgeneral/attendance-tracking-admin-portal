/// <reference types="vite-plugin-svgr/client" />
import { Card, CardContent } from "@mui/material";
import type { RankingIconProps } from "../Mockdata/DashboardRangingCard";
import Rank1 from "../assets/Rank1.svg?react";
import Rank2 from "../assets/Rank2.svg?react";
import Rank3 from "../assets/Rank3.svg?react";
import Rank4 from "../assets/Rank4.svg?react";

interface Props extends RankingIconProps {}

const RankingCard = ({ title, color, entries }: Props) => {
  return (
    <Card className="w-full shadow-md rounded-2xl">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <h2
            className={`font-semibold border-l-[0.3rem] pl-2 text-gray-400`}
            style={{ borderColor: color }}
          >
            {title}
          </h2>
        </div>
        <div className="space-y-1">
          {entries.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                {/* <span className="text-lg">icon</span> */}
                {entry.icon === "rank1" && <Rank1 />}
                {entry.icon === "rank2" && <Rank2 />}
                {entry.icon === "rank3" && <Rank3 />}
                {entry.icon === "rank4" && <Rank4 />}
              </div>
              <div className="flex flex-col items-start">
                <p className="text-md font-medium mb-1 text-gray-900">
                  {entry.name}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold ">{entry.stat}</p>
                  {entry.label && (
                    <p className="text-xs text-gray-400">{entry.label}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RankingCard;
