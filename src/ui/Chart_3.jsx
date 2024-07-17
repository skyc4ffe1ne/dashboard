// import {
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Legend,
//   Tooltip,
//   Label,
// } from "recharts";
// import { BarChart, Bar, ResponsiveContainer } from "recharts";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
const data = [
  { duration: "1", value: 10, durationN: 1 },
  { duration: "2", value: 5, durationN: 2 },
  { duration: "3", value: 12, durationN: 3 },
  { duration: "4,5", value: 7, durationN: 4 },
  { duration: "6,7", value: 9, durationN: 6 },
  { duration: "8,10", value: 3, durationN: 8 },
  { duration: "11+", value: 2, durationN: 11 },
];

export default function Chart_3() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="63%" data={data}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="duration"
          className="hidden text-xs font-extralight sm:block"
        />
        <Tooltip />
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

// export default function Chart_3() {
//   return (
//     <ResponsiveContainer width="120%" height="100%" className="-translate-x-12">
//       <ScatterChart dataKey="x" name="stature" unit="cm">
//         <CartesianGrid />
//         {/* <XAxis type="number" dataKey="x" name="stature" unit="cm" /> */}
//         <YAxis
//           type="number"
//           dataKey="y"
//           name="weight"
//           unit="kg"
//           className="hidden h-0 overflow-hidden text-xs font-thin opacity-0"
//         />
//         <Tooltip cursor={{ strokeDasharray: "3 3" }} />
//         <Scatter name="A school" data={data} fill="#8884d8" />
//       </ScatterChart>
//     </ResponsiveContainer>
//   );
// }
