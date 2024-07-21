import { gridStyle } from "../features/dashboard/gridStyle.js";

export default function Spinner() {
  return (
    <>
      <div className={gridStyle.container + " mt-[200px] gap-12"}>
        <div className={gridStyle.card_1 + " px-4"}>
          <div className="mt-2 h-1/4 w-1/2 animate-pulse rounded-lg bg-stone-200 dark:bg-stone-800"></div>
          <div className="mt-4 h-1/2 w-11/12 animate-pulse rounded-lg bg-stone-200 dark:bg-stone-800"></div>
          {/* <div className="mt-4 h-4 w-[95%] animate-pulse rounded-lg bg-stone-800"></div> */}
        </div>
        <div className={gridStyle.card_2}>
          <div className="h-8 w-2/4 animate-pulse rounded-lg bg-stone-200 dark:bg-stone-800"></div>
          <div className="mb-8 flex h-1/2 w-full items-end justify-between">
            <div className="h-1/6 w-1/12 animate-pulse rounded-lg bg-stone-200 dark:bg-stone-800">
              {" "}
            </div>
            <div className="h-3/6 w-1/12 animate-pulse rounded-lg bg-stone-200 dark:bg-stone-800">
              {" "}
            </div>
            <div className="h-4/6 w-1/12 animate-pulse rounded-lg bg-stone-200 dark:bg-stone-800">
              {" "}
            </div>
            <div className="h-5/6 w-1/12 animate-pulse rounded-lg bg-stone-200 dark:bg-stone-800">
              {" "}
            </div>
            <div className="h-4/6 w-1/12 animate-pulse rounded-lg bg-stone-200 dark:bg-stone-800">
              {" "}
            </div>

            <div className="h-5/6 w-1/12 animate-pulse rounded-lg bg-stone-200 dark:bg-stone-800">
              {" "}
            </div>
            <div className="h-full w-1/12 animate-pulse rounded-lg bg-stone-200 dark:bg-stone-800">
              {" "}
            </div>
          </div>
          <div className="h-4 w-3/4 animate-pulse rounded-lg bg-stone-200 dark:bg-stone-800"></div>
          <div className="mt-2 h-4 w-full animate-pulse rounded-lg bg-stone-200 dark:bg-stone-800"></div>
        </div>
        <div className={gridStyle.card_3 + " px-4 xl:!row-end-4"}>
          <div className="mt-2 h-1/4 w-1/2 animate-pulse rounded-lg bg-stone-200 dark:bg-stone-800"></div>
          <div className="mt-4 h-1/2 w-11/12 animate-pulse rounded-lg bg-stone-200 dark:bg-stone-800"></div>
        </div>
        <div
          className={
            gridStyle.card_4 + " animate-pulse bg-stone-200 dark:bg-stone-800"
          }
        >
          {" "}
        </div>
        <div
          className={
            gridStyle.card_5 + " animate-pulse bg-stone-200 dark:bg-stone-800"
          }
        >
          {" "}
        </div>
      </div>
    </>
  );
}
