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

const styleTooltip = {
  // backgroundColor: "rgba(255, 255, 255, 0.5)",
  borderRadius: "0.25rem",
  border: "none",
  padding: "10px",
};

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
          tick={{ fill: "#78716c" }}
          tickLine={{ stroke: "transparent" }}
          className="custom-tooltip text-sm font-extralight"
        />

        {/*Show the data on hover */}
        <Tooltip contentStyle={styleTooltip} />

        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          className="primaryChart"
          dataKey="uv"
          name="Total"
          fillOpacity={1}
          fill="url(#colorUv)"
          stroke="#82ca9d"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
