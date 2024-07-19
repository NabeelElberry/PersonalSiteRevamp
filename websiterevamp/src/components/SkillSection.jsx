import SlidingIcons from "./util/SlidingIcons";
export default function SkillSection({ title, array }) {
  const marginRight = 50 * array.length + (array.length % 2) * 50;
  return (
    <div className="flex flex-col w-full items-center  justify-center">
      <p className="text-2xl">{title}</p>

      {window.innerWidth > 768 ? (
        <div style={{ marginRight: `${marginRight}px` }}>
          <SlidingIcons icons={array} />
        </div>
      ) : (
        <div>
          <SlidingIcons icons={array} />
        </div>
      )}
    </div>
  );
}
