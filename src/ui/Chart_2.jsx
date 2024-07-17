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

export default function Chart_2() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="63%" data={data}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="subject"
          className="hidden text-xs font-extralight sm:block"
        />
        {/* <PolarRadiusAxis /> */}
        <Tooltip />
        <Radar
          name="Booking"
          dataKey="A"
          stroke="#eab208"
          fill="#eab208"
          fillOpacity={0.4}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
