import clsx from "clsx";
import { GithubIcon } from "lucide-react";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  src: string;
  alt: string;
  children: React.ReactNode;
  linkBtn: string;
};

export function ProjectCard({
  title,
  src,
  alt,
  children,
  linkBtn,
}: ProjectCardProps) {
  return (
    <article
      className={clsx(
        "border border-neutral-950",
        "dark:border-neutral-50",
        "p-4 rounded-md flex shadow-lg/30",
        "bg-neutral-300",
        "shadow-neutral-950 dark:bg-neutral-900",
        "dark:text-neutral-300 text-neutral-800"
      )}
    >
      <div className="flex flex-col items-stretch">
        <div
          className={clsx("h-[200] w-full overflow-hidden", "flex rounded-md")}
        >
          <Image
            src={src}
            alt={alt}
            width={500}
            height={500}
            className={clsx("object-cover object-center")}
          />
        </div>
        <div className={clsx("flex flex-col gap-4 justify-between flex-grow")}>
          <h3 className={clsx("text-xl pt-2 font-bold")}>{title}</h3>
          <div
            className={clsx(
              "[&_span]:dark:bg-neutral-800",
              "[&_span]:bg-neutral-500",
              "[&_span]:px-3 [&_span]:py-1",
              "[&_span]:rounded-xl",
              "flex flex-wrap",
              "gap-2 text-sm font-semibold"
            )}
          >
            {children}
          </div>
          <div className={clsx("justify-self-end")}>
            <a
              href={linkBtn}
              className={clsx(
                "flex justify-center",
                "bg-neutral-500 dark:bg-neutral-800",
                "py-2 rounded-sm gap-2 font-semibold",
                "hover:bg-neutral-700"
              )}
              target="_blank"
            >
              github <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
