import clsx from "clsx";
import { GithubIcon, Linkedin, MailIcon } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const buttonClasses = clsx(
    "flex justify-center items-center rounded-lg",
    "px-4 py-2"
  );

  return (
    <section
      id="home"
      className={clsx(
        "h-screen flex items-center justify-center",
        "flex-col relative z-0"
      )}
    >
      <div
        className={clsx(
          "max-w-xl mb-16 flex flex-col gap-4",
          "bg-neutral-700/30 p-10 rounded-2xl"
        )}
      >
        <div
          className={clsx(
            "flex justify-end gap-2",
            "[&_a]:text-neutral-600",
            "dark:[&_a]:text-neutral-400",
            "[&_a]:hover:text-neutral-500"
          )}
        >
          <a href="https://github.com/KevenFernandes" target="_blank">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/keven-pyw/" target="_blank">
            <Linkedin />
          </a>
          <a href="mailto:kevenpyw@gmail.com">
            <MailIcon />
          </a>
        </div>

        <div>
          <span className="text-neutral-700 dark:text-neutral-400">
            Olá, eu sou
          </span>
          <h1 className={clsx("text-4xl font-bold md:text-5xl  lg:text-6xl")}>
            Keven Fernandes
          </h1>
          <span
            className={clsx("text-left text-neutral-700 dark:text-neutral-400")}
          >
            e crio experiências digitais.
          </span>
        </div>
        <p
          className={clsx(
            "text-center text-neutral-800",
            "dark:text-neutral-300"
          )}
        >
          Desenvolvedor Web Frontend focado em construir minhas aplicações
          utilizando React, Next.js e TypeScript.
        </p>

        <div
          className={clsx(
            "flex  gap-4",
            "sm:flex-row sm:gap-8 mt-6",
            "self-center"
          )}
        >
          <Link
            href="#"
            className={clsx(
              buttonClasses,
              "bg-neutral-400 hover:bg-neutral-500"
            )}
          >
            Currículo
          </Link>
          <Link
            href="#contacts"
            className={clsx(
              buttonClasses,
              "bg-neutral-600 hover:bg-neutral-500"
            )}
          >
            Contatos
          </Link>
        </div>
      </div>
      <div
        className={clsx(
          "position absolute bottom-30",
          "h-[2px] w-sm bg-neutral-600"
        )}
      ></div>
    </section>
  );
}
