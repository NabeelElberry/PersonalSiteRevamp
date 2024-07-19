export default function Icon({ icon, style }) {
  return (
    <div
      className={`hover:scale-110 transition drop-shadow-2xl duration-300 ease-in-out ${style}`}
    >
      {icon}
    </div>
  );
}
