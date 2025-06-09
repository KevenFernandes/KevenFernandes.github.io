import clsx from "clsx";

type HeadingTitleProps = {
  title: string;
  subTitle?: string;
};

export function HeadingTitle({ title, subTitle }: HeadingTitleProps) {
  return (
    <div className={clsx("text-center mb-10 mt-18")}>
      <h1 className={clsx("text-4xl font-bold md:text-5xl")}>{title}</h1>
      {subTitle && (
        <h3
          className={clsx(
            "text-sm italic font-semibold",
            "text-neutral-700 dark:text-neutral-400"
          )}
        >
          {subTitle}
        </h3>
      )}
    </div>
  );
}
