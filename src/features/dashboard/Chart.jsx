import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   {
//     name: "Jan",
//     uv: 4000,
//   },
//   {
//     name: "Feb",
//     uv: 3000,
//   },
//   {
//     name: "Mar",
//     uv: 2000,
//   },
//   {
//     name: "Apr",
//     uv: 2780,
//   },
//   {
//     name: "May",
//     uv: 1890,
//   },
//   {
//     name: "Jun",
//     uv: 2390,
//   },
// ];

const styleTooltip = {
  borderRadius: "0.25rem",
  border: "none",
  padding: "10px",
};
const regex = /(?<=-)\d+(?=-)/g;
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export default function Chart({ data }) {
  let newArr = data.map((el, i) => {
    const data = el.checkout_date.match(regex);
    el.month = data[0];
    return el;
  });

  function* generator() {
    let i = 0;
    while (true) {
      i += 1;
      let a;
      if (i <= 9) {
        a = "0" + i;
      } else {
        a = "" + i;
      }
      let filterArr = newArr.filter((el) => {
        return el.month === a;
      });
      let total = 0;
      if (filterArr.length === 1) {
        total = filterArr[0].total_price;
      }
      if (filterArr.length > 1) {
        total = filterArr.reduce((a, b) => a + b.total_price, 0);
      }

      let month = months[a - 1];
      yield { month, total };
    }
  }
  const gen = generator();
  let finalData = [];
  for (let i = 0; i < 12; i++) {
    const { value } = gen.next();
    finalData = [...finalData, value];
  }

  return (
    //Make the chart responsive
    <ResponsiveContainer
      width="100%"
      height="65%"
      className="!lg:h-[65%] !h-[50%]"
    >
      {/* Visual chart */}
      <AreaChart data={finalData}>
        <CartesianGrid strokeDasharray="6 6" />
        {/*Style labels, and show the XAxis */}
        <XAxis
          dataKey="month"
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
          dataKey="total"
          name="Total"
          fillOpacity={1}
          fill="url(#colorUv)"
          stroke="#82ca9d"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
