import clsx from "clsx";

export function Footer() {
  return (
    <div
      className={clsx(
        "bg-neutral-300 text-center py-6 text-sm text-neutral-700",
        "dark:bg-neutral-900 dark:text-neutral-500"
      )}
    >
      <span>
        &copy;{new Date().getFullYear()} Keven Fernandes - Todos direitos
        reservados
      </span>
    </div>
  );
}
