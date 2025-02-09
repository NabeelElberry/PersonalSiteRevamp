import SlidingIcons from "./util/SlidingIcons";
export default function SkillSection({ title, array }) {
  const marginRight = 50 * array.length + (array.length % 2) * 50;
  return (
    <div
      className="flex flex-col 
      bg-gradient-to-b bg-gray-800 baby:w-96 w-80 lg:w-comp
      lg:h-comp      p-2 lg:p-10 rounded-2xl  "
    >
      <p className="text-2xl text-white text-center">
        <u>
          <strong>{title}</strong>
        </u>
      </p>

      <div className="h-full w-full">
        <SlidingIcons icons={array} />
      </div>
    </div>
  );
}
