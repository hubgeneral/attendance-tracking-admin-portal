/// <reference types="vite-plugin-svgr/client" />
import { Card, CardContent } from "@mui/material";
import type { RankingIconProps } from "../Mockdata/DashboardRangingCard";
import Rank1 from "../assets/Rank1.svg?react";
import Rank2 from "../assets/Rank2.svg?react";
import Rank3 from "../assets/Rank3.svg?react";
import Rank4th from "../assets/Rank4th.svg?react";

const RankingCard = ({ title, color, entries }: RankingIconProps) => {
  // show only first 4
  const topEntries = entries?.slice(0, 4) || [];

  const renderRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Rank1 data-testid="rank1-icon" />;
      case 1:
        return <Rank2 data-testid="rank2-icon" />;
      case 2:
        return <Rank3 data-testid="rank3-icon" />;
      case 3:
        return <Rank4th data-testid="rank4-icon" />;
      default:
        return null;
    }
  };

  return (
    <Card
      data-testid="leaderboard-card"
      className="w-full h-[280px] shadow-sm shadow-gray-500 rounded-lg flex flex-col"
    >
      <CardContent className="p-4 dark:bg-[#1A2D26] flex flex-col justify-between h-full">
        {/* Title */}
        <div className="flex items-center gap-2 mb-2">
          <h2 className="relative font-semibold pl-4 text-[#758DA3] dark:text-[#C3C3C3]">
            <span
              className="absolute left-0 top-0 h-full w-1 rounded-full"
              style={{ backgroundColor: color }}
            />
            {title}
          </h2>
        </div>

        {/* Content */}
        <div className="flex-1">
          {topEntries.length > 0 &&
          topEntries[0].name !== "No data available" ? (
            <div className="space-y-2">
              {topEntries.map((entry, index) => (
                <div key={index} className="flex items-center gap-3">
                  {renderRankIcon(index)}
                  <div className="flex flex-col">
                    <p className="text-md font-medium mb-1 text-gray-900 dark:text-[#E8EAE9]">
                      {entry.name}
                    </p>
                    <p className="text-sm font-bold dark:text-[#E8EAE9]">
                      {entry.stat}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No data available
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RankingCard;
