import NavBar from "./NavBar";

export default function NavBarSecondary({ extraStyle }) {
  return (
    <NavBar
      style={`w-16
            w-full absolute justify-center items-center
            flex-row rounded-b-lg bg-white z-20  
            ${extraStyle}`}
    />
  );
}
