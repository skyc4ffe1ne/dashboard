import { useState, useEffect, useRef } from "react";

import { NavLink } from "react-router-dom";

import { useClickOutside } from "../hooks/useClickOutside.js";
import { useResize } from "../hooks/useResize.js";

import calendar from "../assets/calendar.svg";
import dashboard from "../assets/dashboard.svg";
import logo from "../assets/logo.svg";
import moon from "../assets/moon.svg";
import hamburger from "../assets/hamburgerArrow.svg";
import user from "../assets/user.svg";
import exit from "../assets/exit.svg";
import sun from "../assets/sun.svg";
import house from "../assets/house.svg";
import Icon from "./Icons.jsx";

export default function Sidebar() {
  const [theme, setTheme] = useState(false);
  const [visible, setVisible] = useState(true);

  const sidebarRef = useClickOutside(setVisible);
  useResize(setVisible);

  useEffect(function () {
    /**Check for saved theme at first render */
    const themeSaved = localStorage.getItem("theme");
    if (themeSaved !== null) {
      setTheme(JSON.parse(themeSaved)); // Imposta il tema salvato dal localStorage
      // Aggiorna il documento HTML con la classe del tema (opzionale)
      if (JSON.parse(themeSaved)) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  function handleTheme() {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  const liStyle =
    "hover:border-stone-300 flex items-center justify-center rounded-xl border-[1px] border-transparent dark:hover:border-stone-800";

  if (!visible)
    return (
      <div
        className="absolute left-2 top-[1.5rem] cursor-pointer"
        onClick={() => setVisible(true)}
      >
        <Icon src={hamburger} alt="ico-hamburger" />
      </div>
    );
  return (
    <div
      className={`${visible ? "translate-x-0" : "-translate-x-full"} absolute z-50 flex min-h-screen flex-col border-r-[1px] border-slate-900/10 bg-stone-50 px-4 py-4 text-black dark:border-stone-800 dark:bg-stone-950 dark:text-white sm:static`}
      ref={sidebarRef}
    >
      <div className="flex items-center justify-center pb-4">
        <img src={logo} />
      </div>
      <nav>
        <ul className="flex flex-col gap-3">
          <li className={liStyle}>
            <NavLink to="/" className="rounded-xl px-3 py-3">
              <Icon src={dashboard} alt="ico-dashboard" />
            </NavLink>
          </li>

          <li className={liStyle}>
            <NavLink to="/calendar" className="rounded-xl px-3 py-3">
              <Icon
                src={calendar}
                className="w-6 text-stone-200 dark:text-stone-200"
                alt="ico-calendar"
              />
            </NavLink>
          </li>

          <li className={liStyle}>
            <NavLink to="/appartament" className="rounded-xl px-3 py-3">
              <Icon src={house} alt="ico-house" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <ul className="mt-auto flex h-sidebar-height flex-col justify-end gap-3">
        <li
          className="flex cursor-pointer justify-center"
          onClick={handleTheme}
        >
          <div className="c relative w-5 rounded-full border-[1px] border-stone-200 py-4 shadow shadow-stone-100 dark:border-stone-800 dark:shadow-stone-900">
            <div
              className={`absolute -top-3 left-1/2 w-6 -translate-x-2/4 rounded-full border-zinc-200 bg-zinc-50 transition-transform dark:border-zinc-800 dark:bg-zinc-950 ${!theme ? "-top-1 translate-y-full" : ""}`}
            >
              {theme ? (
                <Icon src={moon} alt="ico-moon" />
              ) : (
                <Icon src={sun} alt="ico-sun" />
              )}
            </div>
          </div>
        </li>
        <li className={liStyle}>
          <NavLink to="/user" className="rounded-xl px-3 py-3">
            <Icon src={user} alt="ico-user" />
          </NavLink>
        </li>

        <li className={liStyle}>
          <NavLink to="/exit" className="rounded-xl px-3 py-3">
            <Icon src={exit} alt="ico-exit" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
