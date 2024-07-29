import { useQuery } from "@tanstack/react-query";

import { getData } from "../services/apiBookings.js";

import SpinnerDashboard from "../ui/SpinnerDashboard.jsx";
import Card from "../features/dashboard/Card.jsx";
import Chart from "../features/dashboard/Chart.jsx";
import Chart_2 from "../features/dashboard/Chart_2.jsx";
import Chart_3 from "../features/dashboard/Chart_3.jsx";
import Icons from "../ui/Icons.jsx";
import BlurEffect from "../ui/BlurEffect.jsx";
import arrowChart from "../assets/arrowChart.svg";

import { gridStyle } from "../features/dashboard/gridStyle.js";

export default function Dashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["booking"],
    queryFn: getData,
  });

  if (isLoading) return <SpinnerDashboard />;
  return (
    <>
      <div className="flex">
        <Card
          placeholder="Balance"
          value="$47.950"
          statusValue="You take 7.46% Less Than (Past 2 Months)"
          type="cardHeader"
        />
      </div>
      <div className={gridStyle.container}>
        {/*Card booking */}
        <div className={gridStyle.card_1}>
          <Card
            placeholder="Booking"
            value="192"
            statusValue="You take 7.46% Less Than (Past 2 Months)"
          />
        </div>
        {/*Chart container */}
        <div className={gridStyle.card_2}>
          <BlurEffect type="xl" />
          <h3 className="text-xl text-stone-950 dark:text-stone-300">
            Indicators
          </h3>
          <p className="pb-6 pt-1 text-sm font-light text-stone-700 dark:text-stone-500">
            Growth Earning %2.6 From Last Year
          </p>
          <Chart data={data} />
          <div className="flex justify-between">
            <div>
              <p className="pb-2 text-xs text-green-800 dark:text-green-100">
                {" "}
                Total Earns ($5.94B){" "}
              </p>
              <h2 className="text-2xl font-extralight dark:text-stone-300 sm:text-3xl">
                0.00675 BTC{" "}
              </h2>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <h3 className="text-2xl font-extralight text-stone-700 dark:text-stone-300 sm:text-3xl">
                + 5.7%
              </h3>
              <div className="rounded-full border-[1px] border-slate-900/10 dark:border-stone-800">
                <Icons src={arrowChart} alt="ico-arrow" />
              </div>
            </div>
          </div>
        </div>
        {/**Card Check in */}
        <div className={gridStyle.card_3}>
          <Card
            placeholder="Check in"
            value="9"
            statusValue="You take 7.46% Less Than (Past 2 Months)"
          />
        </div>
        {/**Secondary Chart */}
        <div className={gridStyle.card_4}>
          <BlurEffect type="lg-l-yellow" />
          <BlurEffect type="sm-r-yellow" />
          <Chart_2 data={data} />
        </div>
        {/**Secondary Chart */}
        <div className={gridStyle.card_5}>
          <BlurEffect type="lg-r-violet" />
          <BlurEffect type="sm-l-violet" />
          <Chart_3 data={data} />
        </div>
      </div>
    </>
  );
}
