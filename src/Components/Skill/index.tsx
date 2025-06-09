import clsx from "clsx";

export function Skill() {
  return (
    <div className="bg-neutral-600 p-4 rounded-2xl text-stone-300">
      <h2 className="text-xl font-semibold">Skills</h2>
      <div
        className={clsx(
          "flex flex-wrap",
          "font-semibold my-4",
          "[&_div]:bg-neutral-800 gap-2",
          "[&_div]:px-3 [&_div]:py-1",
          "[&_div]:rounded-xl"
        )}
      >
        <div>
          <p>JavaScript</p>
        </div>
        <div>TypeScript</div>
        <div>HTML</div>
        <div>CSS</div>
        <div>React</div>
        <div>Next.js</div>
        <div>Tailwind</div>
        <div>MySQL</div>
      </div>
    </div>
  );
}
