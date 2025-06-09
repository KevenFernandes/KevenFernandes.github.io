import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className={clsx("max-w-4xl mx-auto px-6 ")}>
      <div className={clsx("")}>{children}</div>
    </div>
  );
}
