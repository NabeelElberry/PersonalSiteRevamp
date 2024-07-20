import rymn from "../../assets/rymnpng.png";
import weather from "../../assets/weather.png";
import pacman from "../../assets/pacman.png";
import ocaml from "../../assets/Ocaml.png";
import C from "../../assets/C_Logo.png";
import insta from "../../assets/insta.png";
import letstalk from "../../assets/letstalk.png";
import websec from "../../assets/websec.png";
import racket from "../../assets/racket.png";
import Icon from "./Icon";
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
  AndroidstudioOriginal,
  OcamlOriginal,
  UnixOriginal,
  LinuxOriginal,
  EmacsOriginal,
  ExpressOriginal,
  ExpressOriginalWordmark,
} from "devicons-react";
const information = {
  titles: [
    "Rymn",
    "Weatherify",
    "PacMan AI",
    "MicrOcaml Compiler",
    "Ournix OS",
    "BetterInsta",
    "LetsTalk",
    "Security Attacks",
    "Racket Compiler",
  ],
  descriptions: [
    <>
      Rymn is a program that uses a Spaced Repetition System (SRS) for
      memorizing vocabulary terms for any language. It utilizes a{" "}
      <b>
        <u>Python-based</u>
      </b>{" "}
      backend with{" "}
      <b>
        <u>Flask</u>
      </b>{" "}
      to communicate with a{" "}
      <b>
        <u>React</u>
      </b>{" "}
      frontend. Additionally, the{" "}
      <b>
        <u>Pickle library</u>
      </b>{" "}
      is used to enable offline functionality based on user files.
    </>,
    <>
      Weatherify is a comprehensive weather application that provides real-time
      weather updates and interesting statistics. It comes with video
      backgrounds depending on the weather in the users location. It is built
      using{" "}
      <b>
        <u>Kotlin</u>
      </b>{" "}
      and{" "}
      <b>
        <u> Android Studio</u>
      </b>{" "}
      to ensure a smooth user experience.
    </>,
    <>
      PacMan AI is an artificial intelligence project where PacMan is trained to
      solve any maze using advanced machine learning algorithms in{" "}
      <u>
        <b>Python</b>
      </u>{" "}
      and a GUI in{" "}
      <u>
        <b>TKinter</b>
      </u>
      . It demonstrates the application of AI in classic game scenarios, with
      new techniques such as
      <strong>
        {" "}
        <u>Q-Learning, Value Iteration, and Bayesian Inference</u>
      </strong>{" "}
      to utilize a{" "}
      <strong>
        <u>Hidden Markov Model</u>
      </strong>{" "}
      to find the best way through the course .
    </>,
    <>
      The MicrOcaml Compiler is a parser, lexer, and interpreter for the OCaml
      language. It converts{" "}
      <u>
        <b>OCaml</b>
      </u>{" "}
      code into machine-readable instructions, showcasing compiler design and
      implementation techniques.
    </>,
    <>
      Ournix OS is a simulated operating system built in{" "}
      <b>
        <u>C</u>
      </b>
      . It provides a hands-on experience in understanding operating system
      concepts and the C programming language. Ournix uses{" "}
      <u>
        <b>dynamically allocated data linked data structures</b>
      </u>{" "}
      to manage trees of files and file directories.
    </>,
    <>
      BetterInsta is an Instagram analytics tool that provides detailed user
      analysis. It utilizes an Instagram web scraper alongside{" "}
      <u>
        <b>NodeJS, Javascript, and ECMAScript</b>
      </u>{" "}
      to help users gain insights into their Instagram activities and improve
      their social media strategy.
    </>,
    <>
      LetsTalk is a website that utilizes{" "}
      <u>
        <strong>Spring Boot, Java, and ReactJS</strong>
      </u>{" "}
      to provide various language learning services to learners. It allows users
      to pick languages that they would like to learn and speak with natives who
      can correct them, and vice versa. It has many more features upcoming and
      is being consistently updated...
    </>,
    <>
      Conducted a series of web-based security tasks focusing on exploiting
      vulnerabilities, via{" "}
      <strong>
        <u>
          SQL Injection, Cross-Site Scripting (XSS), and Cross-Site Request
          Forgery (CSRF)
        </u>
      </strong>
      . Bypassed Collabtive’s login authentication by exploiting SQL injection
      on the login page, enabling unauthorized access without a password.
      Executed unauthorized modifications to another user’s profile within
      Collabtive through{" "}
      <strong>
        <u>SQL injection</u>
      </strong>{" "}
      vulnerabilities. Parsed through{" "}
      <strong>
        <u>C code</u>
      </strong>{" "}
      and debugged an issue in memory, allowing for a buffer overflow attack to
      persist, therefore writing in code into server that was custom put by
      user.
    </>,
    <>
      As a semester-long project, I developed a{" "}
      <strong>
        <u>Racket compiler</u>
      </strong>{" "}
      from scratch, incorporating a parser, interpreter, and compiler. I
      implemented features for primitive values, lists, vectors, and pattern
      matching structures. Additionally, I enhanced the compiler with advanced
      features like conditionals and generated corresponding assembly code.
    </>,
  ],
  images: [rymn, weather, pacman, ocaml, C, insta, letstalk, websec, racket],
  links: [
    `https://github.com/NabeelElberry/RymnRemade`,
    `https://github.com/NabeelElberry/Weatherify`,
    `https://github.com/NabeelElberry/PacMan`,
    `https://github.com/NabeelElberry/MicrOcaml`,
    `https://github.com/NabeelElberry/OurnixOS`,
    `https://github.com/NabeelElberry/BetterInsta`,
    `https://github.com/NabeelElberry/LetsTalk`,
    `https://github.com/NabeelElberry/WebSecurity`,
    `https://github.com/NabeelElberry/RacketCompiler`,
  ],

  icons: [
    [
      <Icon icon={<PythonOriginal size="40" />} key="python" />,
      <Icon icon={<FlaskOriginal size="40" />} key="flask" />,
      <Icon icon={<ReactOriginal size="40" />} key="react" />,
      <Icon icon={<NodejsOriginal size="40" />} key="nodejs" />,
    ],
    [
      <Icon icon={<KotlinOriginal size="40" />} key="python" />,
      <Icon
        icon={<AndroidstudioOriginal size="40" />}
        key="AndroidstudioOriginal"
      />,
    ],
    [<Icon icon={<PythonOriginal size="40" />} key="python" />],
    [
      <Icon icon={<OcamlOriginal size="40" />} key="OcamlOriginal" />,
      <Icon icon={<LinuxOriginal size="40" />} key="LinuxOriginal" />,
    ],
    [
      <Icon icon={<COriginal size="40" />} key="COriginal" />,
      <Icon icon={<LinuxOriginal size="40" />} key="LinuxOriginal" />,
    ],
    [
      <Icon icon={<JavascriptOriginal size="40" />} key="JavascriptOriginal" />,

      <Icon icon={<MongodbOriginal size="40" />} key="JavascriptOriginal" />,
      <Icon
        icon={<ExpressOriginalWordmark size="40" />}
        key="NodejsOriginal"
      />,
      <Icon icon={<NodejsOriginal size="40" />} key="JavascriptOriginal" />,
    ],
    [
      <Icon icon={<SpringOriginal size="40" />} key="SpringOriginal" />,
      <Icon icon={<JavaOriginal size="40" />} key="JavaOriginal" />,
      <Icon icon={<ReactOriginal size="40" />} key="ReactOriginal" />,
      <Icon icon={<MysqlOriginal size="40" />} key="MysqlOriginal" />,
    ],
    [
      <Icon icon={<COriginal size="40" />} key="COriginal" />,
      <Icon icon={<JavaOriginal size="40" />} key="JavaOriginal" />,
      <Icon icon={<MysqlOriginal size="40" />} key="MysqlOriginal" />,
      <Icon icon={<PythonOriginal size="40" />} key="PythonOriginal" />,
    ],
    [<Icon icon={<img src={racket} className="size-10" />} key="COriginal" />],
  ],
};

export default information;
