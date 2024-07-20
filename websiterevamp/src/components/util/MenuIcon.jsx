export default function MenuIcon({ text }) {
  return (
    <div
      className={`text-amber-800 rounded-xl 
        text-center
      p-2 font-medium transition ease-in-out duration-500  hover:cursor-pointer hover:scale-105 hover:bg-slate-100`}
    >
      {text}
    </div>
  );
}
