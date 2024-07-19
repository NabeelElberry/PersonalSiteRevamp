import pfp from "../../assets/pfp.jpg";
import MenuIcon from "./MenuIcon";
import { Link } from "react-router-dom";
export default function NavBar({ style }) {
  return (
    <div className={`${style} flex items-center justify-evenly drop-shadow-xl`}>
      <Link to="/">
        <MenuIcon text="NE" />
      </Link>
      <Link to="/about">
        <MenuIcon text="AB" />
      </Link>
      <Link to="/projects">
        <MenuIcon text="PR" />
      </Link>
    </div>
  );
}
