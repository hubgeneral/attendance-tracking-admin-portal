interface LegendPayloadItem {
  value: string;
  color: string;
  dataKey: string;
}

interface CustomizeLegendProps {
  payload?: LegendPayloadItem[];
}

const CustomizeLegend = ({ payload }: CustomizeLegendProps) => {
  const customOrder = ["clockedIn", "absent", "onLeave"];

  const sortedPayload = [...(payload ?? [])].sort((a, b) => {
    const indexA = customOrder.indexOf(a.dataKey);
    const indexB = customOrder.indexOf(b.dataKey);
    return indexA - indexB;
  });

  return (
    <ul className="flex justify-center gap-6 mt-4 text-sm font-medium">
      {sortedPayload.map((entry) => (
        <li
          key={entry.dataKey}
          className="flex items-center gap-2 text-gray-800"
        >
          <span className="w-3 h-3" style={{ backgroundColor: entry.color }} />
          <p className="text-[#758DA3] dark:text-[#C3C3C3]">{entry.value}</p>
        </li>
      ))}
    </ul>
  );
};

export default CustomizeLegend;
