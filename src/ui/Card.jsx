import React from "react";

export default function Card({ placeholder, value, statusValue, type }) {
  return (
    <div
      className={`relative ${type === "cardHeader" ? "px-12 py-12 lg:px-14" : "px-1 py-3 lg:px-4"} `}
    >
      <h3 className="absolute z-10 py-5 text-4xl text-stone-950 dark:text-stone-50 xl:py-7">
        {" "}
        {value}
      </h3>
      <h2 className="text-4xl tracking-wide text-stone-200 dark:text-stone-800 xl:text-5xl">
        {" "}
        {placeholder}{" "}
      </h2>
      <p className="pt-8 text-sm font-light text-stone-700 dark:text-stone-500">
        {" "}
        {statusValue}
      </p>
    </div>
  );
}
