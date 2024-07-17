import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Label,
} from "recharts";

const data = [
  { duration: "1 night", value: 10 },
  { duration: "2 nights", value: 5 },
  { duration: "3 nights", value: 12 },
  { duration: "4,5 nights", value: 7 },
  { duration: "6,7 nights", value: 9 },
  { duration: "8,10 nights", value: 3 },
  { duration: "11+ nights", value: 2 },
];

export default function Chart_3() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        {/**chart */}
        <Pie
          nameKey="duration"
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          fill="#82ca9d"
        />
        <Tooltip />
        {/**Show the labels of the data */}
        {/* <Legend
          verticalAlign="middle"
          align="right"
          width="20%"
          layout="vertical"
          iconSize={12}
          iconType="circle"
        /> */}
      </PieChart>
    </ResponsiveContainer>
  );
}

// #c2ed33

//linea chart #d7f73b
//sotto linea #d5dfa9
