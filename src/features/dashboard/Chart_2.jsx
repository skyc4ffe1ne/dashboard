import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const styleTooltip = {
  borderRadius: "0.25rem",
  border: "none",
  padding: "10px",
};

const platforms = ["Airbnb", "Expedia", "Vrbo", "Kayak", "Trivago", "Booking"];

export default function Chart_2({ data }) {
  const finalData = platforms.map((el, i) => {
    let a = data.filter((j) => j.booking_platform === el).length;
    return { subject: el, a };
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="63%" data={finalData}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="subject"
          className="hidden text-[0.625rem] font-extralight sm:block md:text-xs"
        />
        <Tooltip contentStyle={styleTooltip} />
        <Radar
          name="Booking"
          dataKey="a"
          stroke="#06b5d4"
          fill="#67e8f9"
          fillOpacity={0.4}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
