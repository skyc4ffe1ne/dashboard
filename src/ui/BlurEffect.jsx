import React from "react";

export default function BlurEffect({ type }) {
  {
    /**xl-> dimension -l -> position -yellow ->color */
  }
  const defaultBlur = {
    xl: "absolute left-1/2 top-3/4 h-48 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-green-200 to-grenn-400 dark:from-green-300 dark:to-green-500 opacity-40 blur-2xl dark:opacity-25",
    "lg-l-yellow":
      "absolute left-0 top-0 h-48 w-2/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r dark:from-cyan-300 dark:to-cyan-500 opacity-40 blur-2xl dark:opacity-25 from-cyan-100 to-cyan-300",
    "sm-r-yellow":
      "absolute bottom-1/4 -right-20 h-24 w-1/4 rounded-full bg-gradient-to-r from-cyan-100 to-cyan-300 dark:from-cyan-300 dark:to-cyan-500 opacity-40 blur-2xl dark:opacity-25",
    "lg-r-violet":
      "absolute left-full top-0 h-48 w-2/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-300 to-violet-500 opacity-40 blur-2xl dark:opacity-25",
    "sm-l-violet":
      "absolute bottom-1/4 right-full h-24 w-1/4 rounded-full bg-gradient-to-r from-violet-300 to-violet-500 opacity-40 blur-2xl dark:opacity-25",
  };
  return <div className={defaultBlur[type]}></div>;
}
