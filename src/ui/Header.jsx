import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between border-b-[1px] border-slate-900/10 py-4 pl-12 pr-4 dark:border-stone-800 sm:px-12 sm:py-4">
      <div className="flex items-center gap-1 sm:gap-3">
        {/* <p className="font-thin text-stone-700 dark:text-stone-300">
          {/* <span className="text-stone-500">&gt;</span>&gt; 
        </p> */}
        <h2 className="text-xl font-thin text-stone-950 dark:text-stone-50">
          {" "}
          Dashboard{" "}
        </h2>
      </div>
      <div className="flex items-center justify-center gap-2 text-white">
        <div className="h-10 w-10 rounded-full bg-stone-500"></div>
        <div>
          <p className="text-sm font-extralight text-stone-950 dark:text-stone-50">
            {" "}
            Marco Rossi{" "}
          </p>
          <p className="text-sm font-extralight text-stone-500"> Owner </p>
        </div>
      </div>
    </header>
  );
}
