import Card from "../ui/Card.jsx";

export default function Dashboard() {
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
      <div className="grid grid-cols-card-grid grid-rows-card-rows gap-[14px] px-2 sm:mx-auto sm:max-w-[640px] sm:grid-rows-card-rows-sm sm:px-8 lg:max-w-[1300px] lg:grid-cols-card-grid-lg xl:mx-0 xl:grid-cols-card-grid-xl xl:grid-rows-card-rows-xl xl:px-14">
        {/*--*/}
        <div className="col-start-1 col-end-3 row-start-2 h-[142px] rounded-xl border-[1px] border-slate-900/10 dark:border-stone-800 sm:col-start-2 sm:col-end-4 sm:row-start-1 lg:col-start-1 lg:col-end-2">
          <Card
            placeholder="Booking"
            value="192"
            statusValue="You take 7.46% Less Than (Past 2 Months)"
          />
        </div>

        <div className="col-start-1 col-end-4 rounded-xl border-[1px] border-stone-800 bg-red-300 sm:row-start-2 lg:col-end-5 lg:row-end-4 xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-4">
          <h1 className="text-stone-50">Hello </h1>
        </div>

        <div className="col-start-2 col-end-4 rounded-xl border-[1px] border-slate-900/10 dark:border-stone-800 sm:col-start-1 sm:col-end-3 sm:row-start-3 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-1 xl:row-start-3 xl:row-end-4">
          <Card
            placeholder="Check in"
            value="9"
            statusValue="You take 7.46% Less Than (Past 2 Months)"
          />
        </div>

        <div className="col-start-3 row-start-2 h-[142px] rounded-xl bg-yellow-500 sm:col-start-1 sm:row-start-1 lg:col-start-2 xl:col-start-1 xl:row-start-2 xl:row-end-4 xl:h-auto"></div>
        <div className="col-start-1 row-start-3 min-w-[138px] rounded-xl bg-gray-500 sm:col-start-3 lg:col-start-4 lg:row-start-1 xl:col-start-3 xl:row-start-1 xl:row-end-3"></div>
      </div>
    </>
  );
}
