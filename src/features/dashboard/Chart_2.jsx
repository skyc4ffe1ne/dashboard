import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    subject: "AirBnb",
    A: 120,
    fullMark: 150,
  },
  {
    subject: "Booking",
    A: 98,
    fullMark: 150,
  },
  {
    subject: "Expedia",
    A: 86,
    fullMark: 150,
  },
  {
    subject: "Vrbo",
    A: 99,
    fullMark: 150,
  },
  {
    subject: "Kayak",
    A: 85,
    fullMark: 150,
  },
  {
    subject: "Trivago",
    A: 65,
    fullMark: 150,
  },
];

const styleTooltip = {
  borderRadius: "0.25rem",
  border: "none",
  padding: "10px",
};
export default function Chart_2() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="63%"
        data={data}
        className="radar"
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="subject"
          className="hidden text-xs font-extralight sm:block"
        />
        <Tooltip contentStyle={styleTooltip} />
        <Radar
          name="Booking"
          dataKey="A"
          stroke="#06b5d4"
          fill="#67e8f9"
          fillOpacity={0.4}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
