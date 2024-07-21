export default function MenuIcon({ text }) {
  return (
    <div
      className={`text-amber-800 rounded-xl 
        text-center
       font-medium transition ease-in-out duration-500 h-full w-full hover:cursor-pointer hover:scale-105 hover:bg-slate-100`}
    >
      {text}
    </div>
  );
}
