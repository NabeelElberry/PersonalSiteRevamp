export default function MenuIcon({ text }) {
  return (
    <div
      className={`text-amber-800 rounded-xl 
        
      p-2 font-medium transition ease-in-out duration-500 hover:scale-110 hover:cursor-pointer hover:bg-slate-200`}
    >
      {text}
    </div>
  );
}
