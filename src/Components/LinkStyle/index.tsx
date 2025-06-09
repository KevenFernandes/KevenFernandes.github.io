import clsx from "clsx";
import Link from "next/link";

type LinkStyleProps = {
  href: string;
  name: string;
};

export function LinkStyle({ href, name }: LinkStyleProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "relative text-stone-800",
        "dark:text-slate-300",
        'before:absolute before:content-[" "]',
        "before:h-0.5 before:w-0 before:bg-zinc-900",
        "dark:before:bg-zinc-300",
        "before:bottom-[-3px] before:left-[1px]",
        "before:transition-property:width before:duration-500",
        "hover:before:w-full"
      )}
    >
      {name}
    </Link>
  );
}
