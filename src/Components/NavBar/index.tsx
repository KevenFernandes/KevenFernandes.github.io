"use client";

import clsx from "clsx";
import { CircleXIcon, MenuIcon, MoonIcon, SunIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Roboto_Mono } from "next/font/google";
import { LinkStyle } from "../LinkStyle";
const RobotoMono = Roboto_Mono({
  subsets: ["latin"],
  style: ["italic"],
});

export function NavBar() {
  const buttonClasses = clsx(
    "flex justify-center items-center",
    "cursor-pointer"
  );
  const themeClasses = clsx(
    "bg-neutral-100/70 dark:bg-neutral-900/70 backdrop-blur"
  );

  type ThemeType = "dark" | "light";

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [theme, setTheme] = useState<ThemeType>("dark");

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme") as ThemeType;

    if (storageTheme && (storageTheme === "dark" || storageTheme === "light")) {
      setTheme(storageTheme);
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeMap = {
    light: <MoonIcon />,
    dark: <SunIcon />,
  };

  return (
    <header
      className={clsx(themeClasses, "fixed top-0 left-0 w-full h-14 z-30")}
    >
      <div
        className={clsx(
          "flex justify-between max-w-6xl items-center m-auto h-full px-3"
        )}
      >
        <div className={clsx("hidden sm:block")}>
          <Link
            href="/"
            className={clsx("font-medium italic text-lg", RobotoMono)}
          >
            keven/&gt;
          </Link>
        </div>
        <nav
          className={clsx(
            themeClasses,
            "absolute -left-full top-14 w-full h-svh",
            "pt-3 pl-3",
            "flex flex-col font-semibold",

            showMenu && "left-0",
            "transition-all duration-400",
            "sm:static sm:pt-0",
            "sm:flex-row sm:items-center sm:justify-center",
            "sm:gap-6 sm:h-0",
            "sm:duration-0 sm:transition-none"
          )}
        >
          <ul
            className={clsx(
              "flex flex-col gap-4 sm:gap-5",
              "sm:flex-row sm:justify-center sm:items-center"
            )}
          >
            <li>
              <LinkStyle href="#home" name="Home" />
            </li>
            <li>
              <LinkStyle href="#about" name="Sobre" />
            </li>
            <li>
              <LinkStyle href="#project" name="Projetos" />
            </li>
            <li>
              <LinkStyle href="#contacts" name="Contatos" />
            </li>
          </ul>
        </nav>
        <div className="sm:hidden">
          <button
            className={clsx(buttonClasses)}
            onClick={() => setShowMenu((s: boolean) => !s)}
          >
            {!showMenu && <MenuIcon />}
            {showMenu && <CircleXIcon />}
          </button>
        </div>
        <div>
          <button
            className={buttonClasses}
            onClick={() =>
              setTheme((theme) => {
                return theme === "light" ? "dark" : "light";
              })
            }
          >
            {themeMap[theme]}
          </button>
        </div>
      </div>
    </header>
  );
}
