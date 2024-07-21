import { useRef } from "react";
import ImageOverlay from "../components/ImageOverlay";
import NavBar from "../components/util/NavBar";
import { useIsVisible } from "../components/hooks/IsVisible";
import BackgroundItem from "../components/BackgroundItem";
import { Link } from "react-router-dom";
import Footer from "../components/util/Footer";
export default function HomePage() {
  const navref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isVisibleNav = useIsVisible(ref1);
  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);
  const isVisible3 = useIsVisible(ref3);

  console.log(isVisibleNav);
  return (
    <>
      <ImageOverlay />
      <div className="h-full">
        <NavBar
          ref={navref}
          style={`w-16 lg:w-24
                  h-full absolute justify-center items-center
                  flex flex-col rounded-r-lg bg-white z-20
        
                  ${
                    isVisibleNav
                      ? " animate-slideRight"
                      : "animate-slideRightBack opacity-0"
                  }`}
        />
        <div className="flex flex-col md:flex-row sm:flex-col -z-10  h-full ">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            className="flex h-full grow"
            to="/about"
          >
            <div
              ref={ref1}
              className={`flex grow ease-in duration-700 ${
                isVisible1 ? "animate-shortpacity opacity-100" : "opacity-0"
              }`}
            >
              <BackgroundItem title="ABOUT ME" backgroundImage="about" />
            </div>
          </Link>
          <Link
            to="/projects"
            style={{ color: "inherit", textDecoration: "inherit" }}
            className="flex  h-full  grow"
          >
            <div
              ref={ref2}
              className={`flex grow ease-in duration-700 ${
                isVisible2 ? "animate-shortpacity opacity-100" : "opacity-0"
              }`}
            >
              <BackgroundItem title="PROJECTS" backgroundImage="projects" />
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
