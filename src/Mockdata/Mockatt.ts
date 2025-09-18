// mockData.ts

export interface Attendance {
  id: string;
  name: string;
  clockIn: string;
  clockOut: string;
  totalHours: string;
  totalTimeOff: string;
}

export const mockData: Attendance[] = [
  {
    id: "DHG0001",
    name: "Boakye Dennis Jr",
    clockIn: "7:59 Am",
    clockOut: "4:50 Pm",
    totalHours: "N/A",
    totalTimeOff: "N/A",
  },
  {
    id: "DHG0002",
    name: "Harrion Kofi Asare",
    clockIn: "7:50 Am",
    clockOut: "4:50 Pm",
    totalHours: "N/A",
    totalTimeOff: "N/A",
  },
  {
    id: "DHG0003",
    name: "Nana Ama Nhuran Tsumasi",
    clockIn: "8:00 Am",
    clockOut: "4:50 Pm",
    totalHours: "N/A",
    totalTimeOff: "N/A",
  },
  {
    id: "DHG0004",
    name: "Yaa Asantewaa Dicksion",
    clockIn: "6:00 Am",
    clockOut: "9:50 Pm",
    totalHours: "N/A",
    totalTimeOff: "N/A",
  },
];
