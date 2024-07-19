import NavBarSecondary from "../components/util/NavBarSecondary";
import github from "../assets/github.png";
import { useRef, useEffect, useState } from "react";
import line from "../assets/line.png";
import ProjectItem from "../components/ProjectItem.jsx";
import rymn from "../assets/rymnpng.png";
import weather from "../assets/weather.png";
import pacman from "../assets/pacman.png";
import ocaml from "../assets/Ocaml.png";
import C from "../assets/C_Logo.png";
import insta from "../assets/insta.png";
import Modal from "../components/util/Modal.jsx";
import ModalReturn from "../components/ModalReturn.jsx";
import Divider from "../components/util/Divider.jsx";

import Icon from "../components/util/Icon.jsx";
import SlidingIcons from "../components/util/SlidingIcons.jsx";
import {
  VscodeOriginal,
  RubyOriginal,
  PythonOriginal,
  JavaOriginal,
  COriginal,
  CplusplusOriginal,
  OcamlOriginalamlOriginal,
  TailwindcssOriginal,
  ReactOriginal,
  JavascriptOriginal,
  RustOriginal,
  KotlinOriginal,
  NodejsOriginal,
  GitOriginal,
  FlaskOriginal,
  BootstrapOriginal,
  MaterialuiOriginal,
  SpringOriginal,
  MavenOriginal,
  VimOriginal,
  IntellijOriginal,
  Html5Original,
  Css3Original,
  TypescriptOriginal,
  AngularOriginal,
  NextjsOriginal,
  MysqlOriginal,
  MongodbOriginal,
} from "devicons-react";
import Skill from "../components/SkillSection.jsx";
import SkillSection from "../components/SkillSection.jsx";

export default function ProjectsPage() {
  const animationRef = useRef();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (selected) => {
    setSelected(selected);
    setOpen(true);
  };

  useEffect(() => {
    // Add event listener to detect animation end
    window.scrollTo(0, 0);

    const onAnimationEnd = () => {
      animationRef.current.classList.add("opacity-100");
    };
    if (animationRef.current) {
      animationRef.current.addEventListener("animationend", onAnimationEnd);
    }
    // Cleanup: Remove event listener on component unmount
    return () => {
      if (animationRef.current) {
        animationRef.current.removeEventListener(
          "animationend",
          onAnimationEnd
        );
      }
    };
  }, []);

  return (
    <div className="proj pb-10 bg-gradient-to-b from-[#a34141] to-[#e47070]">
      <NavBarSecondary extraStyle={"animate-slideDown pb-2 pt-2"} />
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <img src={github} className="pb-5 animate-rotateIn" />
        <p className="text-5xl animate-fadein">PROJECTS</p>
      </div>
      <Divider />
      <div className="flex flex-col items-center">
        <SkillSection
          title="Languages"
          array={[
            <Icon icon={<PythonOriginal size="50" />} />, // Yellow
            <Icon icon={<JavaOriginal size="50" />} />, // Red and Blue
            <Icon icon={<RubyOriginal size="50" />} />, // Red
            <Icon icon={<JavascriptOriginal size="50" />} />, // Yellow
            <Icon icon={<TypescriptOriginal size="50" />} />, // Blue
            <Icon icon={<COriginal size="50" />} />, // Blue
            <Icon icon={<CplusplusOriginal size="50" />} />, // Blue
            <Icon icon={<Html5Original size="50" />} />, // Orange
            <Icon icon={<Css3Original size="50" />} />, // Blue
            <Icon icon={<KotlinOriginal size="50" />} />,
          ]}
        />
        <SkillSection
          className="text-center"
          title="Frameworks and Developer Tools"
          array={[
            <Icon icon={<SpringOriginal size="50" />} />,
            <Icon icon={<NodejsOriginal size="50" />} />, // Green
            <Icon icon={<ReactOriginal size="50" />} />, // Blue
            <Icon icon={<AngularOriginal size="50" />} />, // Red
            <Icon icon={<FlaskOriginal size="50" />} />, // Black and White
            <Icon icon={<GitOriginal size="50" />} />, // Orange
            <Icon icon={<VimOriginal size="50" />} />, // Green
            <Icon icon={<MavenOriginal size="50" />} />, // Red and Blue
            <Icon icon={<VscodeOriginal size="50" />} />, // Blue
            <Icon icon={<IntellijOriginal size="50" />} />,
            <Icon icon={<MysqlOriginal size="50" />} />, // Blue
            <Icon icon={<MongodbOriginal size="50" />} />, // Multicolor
            <Icon icon={<TailwindcssOriginal size="50" />} />, // Multicolor
            <Icon icon={<MaterialuiOriginal size="50" />} />, // Multicolor
            // Multicolor
          ]}
        />
      </div>

      <Divider />
      <div className="p-30 w-full grid md:grid-cols-2 lg:grid-cols-3 lg:pl-24 lg:pr-24 auto-cols-auto items-center  justify-items-center">
        <button onClick={() => handleOpen("rymn")}>
          <ProjectItem
            title="RYMN"
            text="A research based vocabulary practicing tool."
            image={rymn}
          />
        </button>
        <button onClick={() => handleOpen("weather")}>
          <ProjectItem
            title="WEATHERIFY"
            text="Weather app with interesting statistics"
            image={weather}
          />
        </button>
        <button onClick={() => handleOpen("pacman")}>
          <ProjectItem
            title="PacMan AI"
            text="AI Trained PacMan solves any maze"
            image={pacman}
          />
        </button>
        <button onClick={() => handleOpen("ocaml")}>
          <ProjectItem
            title="MicrOCaml Compiler"
            text="Parser, lexer, and interpreter for OCaml language"
            image={ocaml}
          />
        </button>
        <button onClick={() => handleOpen("ournix")}>
          <ProjectItem
            title="Ournix OS "
            text="Simulation of C operating system"
            image={C}
          />
        </button>
        <button onClick={() => handleOpen("insta")}>
          <ProjectItem
            title="BetterInsta"
            text="Instagram statistics for user analysis"
            image={insta}
          />
        </button>
      </div>

      <Modal isOpen={open} onClose={handleClose}>
        <div>
          <ModalReturn title={selected} />
        </div>
      </Modal>
    </div>
  );
}
