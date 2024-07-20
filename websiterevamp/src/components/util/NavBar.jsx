import pfp from "../../assets/pfp.jpg";
import MenuIcon from "./MenuIcon";
import { Link } from "react-router-dom";
export default function NavBar({ style }) {
  return (
    <div className={`${style} flex items-center justify-evenly drop-shadow-xl`}>
      <Link to="/" className="">
        <MenuIcon text="Home" />
      </Link>
      <Link to="/about">
        <MenuIcon text="About Me" />
      </Link>
      <Link to="/projects">
        <MenuIcon text="Projects" />
      </Link>
    </div>
  );
}
