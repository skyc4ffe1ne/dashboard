import Card from "../ui/Card.jsx";
import Chart from "../ui/Chart.jsx";
import Chart_2 from "../ui/Chart_2.jsx";
import Chart_3 from "../ui/Chart_3.jsx";
import Icons from "../ui/Icons.jsx";
import arrowChart from "../assets/arrowChart.svg";
export default function Dashboard() {
  const gridStyle = {
    container:
      "grid grid-cols-card-grid grid-rows-card-rows gap-[14px] px-2 sm:mx-auto sm:max-w-[640px] sm:grid-rows-card-rows-sm sm:px-8 lg:max-w-[1300px] lg:grid-cols-card-grid-lg xl:mx-0 xl:grid-cols-card-grid-xl xl:grid-rows-card-rows-xl xl:px-14",
    card_1:
      "col-start-1 col-end-3 row-start-2 h-[142px] rounded-xl border-[1px] border-slate-900/10 dark:border-stone-800 sm:col-start-2 sm:col-end-4 sm:row-start-1 lg:col-start-1 lg:col-end-2",
    card_2:
      "col-start-1 col-end-4 rounded-xl border-[1px] border-slate-900/10 p-8 sm:row-start-2 lg:col-end-5 lg:row-end-4 xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-4 dark:border-stone-800 relative overflow-hidden",
    card_3:
      "col-start-2 col-end-4 rounded-xl border-[1px] border-slate-900/10 dark:border-stone-800 sm:col-start-1 sm:col-end-3 sm:row-start-3 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-1 xl:row-start-3 xl:row-end-4",
    card_4:
      "col-start-3 row-start-2 h-[142px] rounded-xl sm:col-start-1 sm:row-start-1 lg:col-start-2 xl:col-start-1 xl:row-start-2 xl:row-end-4 xl:h-auto border-[1px] border-slate-900/10 dark:border-stone-800",
    card_5:
      "col-start-1 row-start-3 min-w-[138px] rounded-xl sm:col-start-3 lg:col-start-4 lg:row-start-1 xl:col-start-3 xl:row-start-1 xl:row-end-3 border-[1px] border-slate-900/10 dark:border-stone-800",
  };

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
          <h3 className="text-xl text-stone-950 dark:text-stone-300">
            Indicators
          </h3>
          <p className="pb-6 pt-1 text-sm font-light text-stone-700 dark:text-stone-500">
            Growth Earning %2.6 From Last Year
          </p>
          <Chart />
          <div className="flex justify-between">
            <div>
              <p className="pb-2 text-xs text-green-800 dark:text-green-100">
                {" "}
                Total Earns ($5.94B){" "}
              </p>
              <h2 className="text-3xl font-extralight dark:text-stone-300">
                0.00675 BTC{" "}
              </h2>
            </div>
            <div className="flex items-center justify-center gap-4">
              <h3 className="text-3xl font-extralight text-stone-700 dark:text-stone-300">
                + 5.7%
              </h3>
              <div className="rounded-full border-[1px] border-slate-900/10 dark:border-stone-800">
                <Icons src={arrowChart} alt="ico-arrow" />
              </div>
            </div>

            <div className="absolute left-1/2 top-3/4 h-48 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-green-300 to-green-500 opacity-25 blur-2xl"></div>
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
          <Chart_2 />
        </div>
        {/**Secondary Chart */}
        <div className={gridStyle.card_5}>
          <Chart_3 />
        </div>
      </div>
    </>
  );
}
