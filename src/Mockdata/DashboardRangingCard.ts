export interface RankingEntry {
  name: string;
  stat: string;
  label?: string;
  icon?: string;
}

export interface RankingIconProps {
  title: string;
  color: string;
  icon?:
    | "rank1"
    | "rank2"
    | "rank3"
    | "rank4"
    | React.FC<React.SVGProps<SVGSVGElement>>;
  entries: RankingEntry[];
}

export const DashboardRangingCardData: RankingIconProps[] = [
  {
    title: "Punctual Employees",
    color: "#0C4DB0",
    entries: [
      {
        name: "Ama Benewaa Antwi Aidoo",
        stat: "7:59 AM",
        label: "Avg. Time",
        icon: "rank1",
      },
      {
        name: "Kwame Mensah",
        stat: "8:01 AM",
        label: "Avg. Time",
        icon: "rank2",
      },
      {
        name: "Efua Serwaa",
        stat: "8:05 AM",
        label: "Avg. Time",
        icon: "rank3",
      },
      {
        name: "Kojo Asare",
        stat: "8:07 AM",
        label: "Avg. Time",
        icon: "rank4",
      },
    ],
  },
  {
    title: "Late Employees",
    color: "#D58A39",

    entries: [
      { name: "Yaw Owusu", stat: "9:00 AM", label: "Avg. Time", icon: "rank1" },
      {
        name: "Akua Nyarko",
        stat: "8:50 AM",
        label: "Avg. Time",
        icon: "rank2",
      },
      {
        name: "Ruth Asare",
        stat: "8:40 AM",
        label: "Avg. Time",
        icon: "rank3",
      },
      { name: "Kumiwaa", stat: "8:30 AM", label: "Avg. Time", icon: "rank4" },
    ],
  },
  {
    title: "Most Hours Worked",
    color: "#0CB036",
    // icon: "rank3",
    entries: [
      { name: "Okai kwei lamtey", stat: "38hrs", icon: "rank1" },
      { name: " Serwaa Mensah offusu", stat: "37hrs", icon: "rank2" },
      { name: "Efua Serwaa owusu", stat: "36hrs", icon: "rank3" },
      { name: "Kojo Asare astantewaa", stat: "35hrs", icon: "rank4" },
    ],
  },
  {
    title: "Most Off Hours",
    color: "#D53951",
    // icon: "rank4",
    entries: [
      { name: "Yaw Owusu dickson", stat: "10 hrs", icon: "rank1" },
      { name: "Akua Nyarko Nyarkowaa", stat: "9 hrs", icon: "rank2" },
      { name: "Kwesi Boadu FRockson", stat: "8 hrs", icon: "rank3" },
      { name: "Afia Kumi", stat: "7 hrs", icon: "rank4" },
    ],
  },
];
