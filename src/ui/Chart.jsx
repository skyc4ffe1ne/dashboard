import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export default function Chart() {
  return (
    //Make the chart responsive
    <ResponsiveContainer
      width="100%"
      height="65%"
      className="!lg:h-[65%] !h-[50%]"
    >
      {/* Visual chart */}
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="6 6" />
        {/*Style labels, and show the XAxis */}
        <XAxis
          dataKey="name"
          //   tick={{ fill: "red" }}
          tickLine={{ stroke: "transparent" }}
          className="text-sm font-extralight"
        />
        {/* <YAxis unit="$" tick={{ fill: "blue" }} /> */}

        {/*Show the data on hover */}
        <Tooltip />

        <Area
          type="monotone"
          dataKey="uv"
          stroke="#46B88E"
          fill="#224437"
          name="Total"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
