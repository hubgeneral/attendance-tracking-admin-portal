/// <reference types="vite-plugin-svgr/client" />
import { Card, CardContent } from "@mui/material";
import type { RankingIconProps } from "../Mockdata/DashboardRangingCard";
import Rank1 from "../assets/Rank1.svg?react";
import Rank2 from "../assets/Rank2.svg?react";
import Rank3 from "../assets/Rank3.svg?react";
import Rank4th from "../assets/Rank4th.svg?react";

const RankingCard = ({ title, color, entries }: RankingIconProps) => {
  return (
    <Card data-testid="leaderboard-card" className="w-full shadow-sm shadow-gray-500 rounded-lg">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="relative font-semibold pl-4 text-[#758DA3]">
            <span
              className="absolute left-0 top-0 h-full w-1 rounded-full"
              style={{ backgroundColor: color }}
            ></span>
            {title}
          </h2>
        </div>
        <div className="space-y-1">
          {entries.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                {/* <span className="text-lg">icon</span> */}
                {entry.icon === "rank1" && <Rank1  data-testid="rank1-icon"/>}
                {entry.icon === "rank2" && <Rank2 data-testid="rank2-icon"/>}
                {entry.icon === "rank3" && <Rank3 data-testid="rank3-icon"/>}
                {entry.icon === "rank4" && <Rank4th data-testid="rank4-icon"/>}
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
