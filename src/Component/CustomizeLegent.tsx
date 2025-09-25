interface LegendPayloadItem {
  value: string;
  color: string;
}

interface CustomizeLegendProps {
  payload: LegendPayloadItem[];
}

const CustomizeLegend = ({ payload }: CustomizeLegendProps) => {
  const order = ["Absent", "On Leave", "Clocked In"];
  const ordered = order.map(label =>
    payload.find(item => item.value === label)
  );

  return (
    <ul className="flex justify-center gap-6 mt-4 text-sm font-medium">
      {ordered.map((entry, index) =>
        entry ? (
          <li
            key={`item-${index}`}
            className="flex items-center gap-2 text-gray-800" 
          >
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }} 
            />
            {entry.value}
          </li>
        ) : null
      )}
    </ul>
  );
};

export default CustomizeLegend;

