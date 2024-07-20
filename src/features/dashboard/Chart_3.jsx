import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { parseISO, differenceInDays } from "date-fns";

const startData = [
  { duration: "1", value: 0 },
  { duration: "2", value: 0 },
  { duration: "3", value: 0 },
  { duration: "4-5", value: 0 },
  { duration: "6-7", value: 0 },
  { duration: "8-14", value: 0 },
  { duration: "15-21", value: 0 },
  { duration: "21+", value: 0 },
];

function getDurationCategory(difference) {
  if (difference === 1) return "1";
  if (difference === 2) return "2";
  if (difference === 3) return "3";
  if (difference >= 4 && difference <= 5) return "4-5";
  if (difference >= 6 && difference <= 7) return "6-7";
  if (difference >= 8 && difference <= 14) return "8-14";
  if (difference >= 15 && difference <= 21) return "15-21";
  if (difference >= 22) return "21+";
  return null;
}

const styleTooltip = {
  // backgroundColor: "rgba(255, 255, 255, 0.5)",
  borderRadius: "0.25rem",
  border: "none",
  padding: "10px",
};

export default function Chart_3({ data }) {
  const newData = data.reduce((acc, el) => {
    {
      /**calculate the difference */
    }
    const convCheckin = parseISO(el.checkin_date);
    const convCheckout = parseISO(el.checkout_date);
    const difference = differenceInDays(convCheckout, convCheckin);

    const durationCategory = getDurationCategory(difference);
    {
      /**assigns the label based on the difference */
    }
    if (durationCategory) {
      // finde the obj
      const categoryObj = acc.find(
        (item) => item.duration === durationCategory,
      );
      //update the value
      if (categoryObj) {
        categoryObj.value += 1;
      }
    }
    {
      /**return the new array */
    }
    return acc;
  }, startData);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="63%" data={newData}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="duration"
          className="hidden text-xs font-extralight sm:block"
        />
        <Tooltip contentStyle={styleTooltip} />
        <Radar
          name="prenotazioni"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.4}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
