// services/mockData.ts

export interface LogRecord {
  id: string;
  employeeName: string;
  reason: string;
  clockIn: string;
  clockOut: string;
  actionBy: string;
  actionDate: string;
}

export const logHistory: LogRecord[] = [
  {
    id: "1",
    employeeName: "Kwamena Abeikoo Addo",
    reason:
      "Kwamena Abeikoo Addo Kwamena Abeikoo Addo Kwamena Abeikoo Addo Kwamena Abeikoo Addo Kwamena Abeikoo Addo Addo Kwamena Abeikoo Addo",
    clockIn: "9:50 AM",
    clockOut: "N/A",
    actionBy: "Abena Awusi Amina",
    actionDate: "02/20/2025 - 9:10 AM",
  },
  {
    id: "2",
    employeeName: "Jane Doe",
    reason:
      "Kwamena Abeikoo Addo Kwamena Abeikoo Addo Kwamena Abeikoo Addo Kwamena Abeikoo Addo Kwamena Abeikoo Addo Addo Kwamena Abeikoo Addo",
    clockIn: "N/A",
    clockOut: "3:50 PM",
    actionBy: "Abena Awusi Amina",
    actionDate: "02/20/2025 - 9:10 AM",
  },
  {
    id: "3",
    employeeName: "John Smith",
    reason:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut tristique Addo Kwamena Abeikoo Addo.",
    clockIn: "8:00 AM",
    clockOut: "5:00 PM",
    actionBy: "Kojo Mensah",
    actionDate: "02/19/2025 - 5:15 PM",
  },
];
