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
import letstalk from "../assets/letstalk.png";
import websec from "../assets/websec.png";
import racket from "../assets/racket.png";
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
  FirebaseOriginal,
} from "devicons-react";
import Skill from "../components/SkillSection.jsx";
import SkillSection from "../components/SkillSection.jsx";
import Footer from "../components/util/Footer.jsx";

export default function ProjectsPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
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
  }, []);

  return (
    <div
      className="proj bg-gradient-to-b 
    
    
    bg-gray-900"
    >
      <NavBarSecondary extraStyle={"animate-slideDown pb-2 pt-2"} />
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <img src={github} className="pb-5 animate-rotateIn" />
        <p className="text-5xl animate-fadein">
          <u>
            <strong>PROJECTS</strong>
          </u>
        </p>
      </div>
      <Divider />
      <div className="flex-col lg:flex-row flex items-center justify-center content-stretch space-y-4 lg:space-y-0 lg:space-x-4">
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
            <Icon icon={<FirebaseOriginal size="50" />} />, // Multicolor
            <Icon icon={<TailwindcssOriginal size="50" />} />, // Multicolor
            <Icon icon={<MaterialuiOriginal size="50" />} />, // Multicolor

            // Multicolor
          ]}
        />
      </div>

      <Divider />
      <div className="p-30 w-full grid md:grid-cols-2 lg:grid-cols-3 lg:pl-24 lg:pr-24 auto-cols-auto items-center  justify-items-center">
        <button onClick={() => handleOpen(6)}>
          <ProjectItem
            title="LetsTalk"
            text="Connecting language learners globally"
            image={letstalk}
          />
        </button>
        <button onClick={() => handleOpen(0)}>
          <ProjectItem
            title="Rymn"
            text="Research-based vocabulary tool"
            image={rymn}
          />
        </button>
        <button onClick={() => handleOpen(1)}>
          <ProjectItem
            title="Weatherify"
            text="Insightful weather statistics"
            image={weather}
          />
        </button>
        <button onClick={() => handleOpen(8)}>
          <ProjectItem
            title="Custom Built Compiler"
            text="Custom built advanced Racket compiler features "
            image={racket}
          />
        </button>
        <button onClick={() => handleOpen(2)}>
          <ProjectItem
            title="PacMan AI"
            text="AI Trained PacMan solves any maze"
            image={pacman}
          />
        </button>
        <button onClick={() => handleOpen(3)}>
          <ProjectItem
            title="MicrOCaml Compiler"
            text="OCaml parser, lexer, and interpreter"
            image={ocaml}
          />
        </button>
        <button onClick={() => handleOpen(4)}>
          <ProjectItem
            title="Ournix OS "
            text="Simulated C operating system"
            image={C}
          />
        </button>
        <button onClick={() => handleOpen(5)}>
          <ProjectItem
            title="BetterInsta"
            text="Instagram statistics for user analysis"
            image={insta}
          />
        </button>
        <button onClick={() => handleOpen(7)}>
          <ProjectItem
            title="Security Attacks"
            text="Securing sites from vulnerabilities"
            image={websec}
          />
        </button>
      </div>

      <Modal isOpen={open} onClose={handleClose}>
        <div>
          <ModalReturn number={selected} />
        </div>
      </Modal>
      <Footer />
    </div>
  );
}
