import { gridStyle } from "../features/dashboard/gridStyle.js";

export default function Spinner() {
  return (
    <div className={gridStyle.container + " mt-[200px]"}>
      <div className={gridStyle.card_1 + "animate-pulse bg-stone-900"}></div>
      <div className={gridStyle.card_2 + "animate-pulse bg-stone-900"}> </div>
      <div className={gridStyle.card_3 + "animate-pulse bg-stone-900"}> </div>
      <div className={gridStyle.card_4 + "animate-pulse bg-stone-900"}> </div>
      <div className={gridStyle.card_5 + "animate-pulse bg-stone-900"}> </div>
    </div>
  );
}
