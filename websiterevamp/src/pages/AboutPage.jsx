import NavBarSecondary from "../components/util/NavBarSecondary";
import pfp from "../assets/pfp.jpg";
import climbing from "../assets/mc.png";
import languages from "../assets/languages.png";
import frontlever from "../assets/frontlever.png";
import AboutItem from "../components/AboutItem";
import { useRef, useEffect } from "react";
import { useIsVisible } from "../components/hooks/IsVisible";
import line from "../assets/line.png";
import Divider from "../components/util/Divider";
import umdlogo from "../assets/umdlogo.png";
import umdlogocircle from "../assets/umdlogocircle.png";
import SlidingBehind from "../components/util/SlidingEducation";
import Dropdown from "../components/util/Dropdown";
import SlidingEducation from "../components/util/SlidingEducation";
import SlidingExperience from "../components/util/SlidingExperience";
import staples from "../assets/staples.png";
export default function AboutPage() {
  const animationRef = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const refText = useRef(null);
  const isVisibleText = useIsVisible(refText);
  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);
  const isVisible3 = useIsVisible(ref3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onAnimationEnd = () => {
      animationRef.current?.classList.add("opacity-100");
    };

    const refs = [animationRef, ref1, ref2, ref3, refText];
    refs.forEach((ref) => {
      ref.current?.addEventListener("animationend", onAnimationEnd);
    });

    return () => {
      refs.forEach((ref) => {
        ref.current?.removeEventListener("animationend", onAnimationEnd);
      });
    };
  }, []);

  return (
    <div className="abt bg-gradient-to-b from-[#43778b] to-[#5393ac]">
      <NavBarSecondary extraStyle="animate-slideDown pb-2 pt-2" />
      <div className="flex flex-col lg:flex-row lg:space-x-32 items-center justify-center grow w-full h-screen">
        <img
          src={pfp}
          alt="Profile"
          className="md:size-32r drop-shadow-2xl hover:scale-110 transition duration-700 ease-in-out size-96 rounded-full animate-popIn"
        />

        <div className="flex flex-col size-72 items-center justify-center">
          <div className="text-center text-4xl">My name is Nabeel Elberry.</div>
          <div class="group text-white text-xl transition duration-300">
            I'm a full stack developer.
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-16">
        <Divider />
        <p
          ref={refText}
          className={`mb-28 text-4xl lg:text-6xl ${
            isVisibleText
              ? "animate-shortpacity opacity-100"
              : "animate-fadeout opacity-0"
          }`}
        >
          Here's a bit about me<span className="animate-fadeInOut">...</span>
        </p>

        <div className="flex justify-center items-center  flex-col m-2 space-y-4  rounded-3xl drop-shadow-2xl ">
          <AboutItem className="flex flex-col items-center justify-center  mr-2 ">
            <p className="text-5xl pb-5 mt-5">
              <u>EDUCATION</u>
            </p>
            <div className="flex flex-row">
              <SlidingEducation
                title="University of Maryland, College Park"
                date="2020-2024"
                degree="B.S. Computer Science, Linguistics Minor"
                image={umdlogo}
              >
                <Dropdown title="Coursework">
                  Object-Oriented Programming I and II | Discrete Structures |
                  Computer Systems | Algorithms | Advanced Data Structures |
                  Artificial Intelligence | Data Science | Android Programming |
                  Linear Algebra | Network and Hardware Security | Compilers
                </Dropdown>
                <Dropdown title="Clubs">
                  Gymnastics | Boxing | Terp Esports
                </Dropdown>
              </SlidingEducation>
            </div>
          </AboutItem>
          <AboutItem className="flex flex-col items-center justify-center pl-2 ml-2">
            <p className="text-5xl pb-5 mt-5">
              <u>EXPERIENCE</u>
            </p>

            <SlidingExperience
              company="UMD: Terrapin Technology"
              title="Hardware Service Technician"
              date="2023-2024"
              image={umdlogocircle}
            >
              <Dropdown title="Description">
                <ol className="list-disc list-inside">
                  <li>
                    Worked collaboratively with colleagues to efficiently
                    resolve technical issues with students' personal devices,
                    encompassing virus removal, software installation, and
                    diagnosis and resolution of hardware issues.
                  </li>
                  <li>
                    Facilitated communication among team members and utilized
                    ServiceNow to meticulously document customer issues across
                    various departments for streamlined workflow.
                  </li>
                </ol>
              </Dropdown>
            </SlidingExperience>

            <SlidingExperience
              company="University of Maryland"
              title="Research Assistant"
              date="2023"
              image={umdlogocircle}
            >
              <Dropdown title="Description">
                <ul className="list-disc list-inside">
                  <li>
                    Joined a project to explore{" "}
                    <u>
                      <strong>Berber language syntax</strong>
                    </u>{" "}
                    with a{" "}
                    <u>
                      <strong>Python-based</strong>
                    </u>{" "}
                    analytical framework.
                  </li>
                  <li>
                    Collaborated with an graduate student, utilizing{" "}
                    <u>
                      <strong>CHILDES and CLAN</strong>
                    </u>{" "}
                    tools for comprehensive linguistic data analysis.
                  </li>
                </ul>
              </Dropdown>
            </SlidingExperience>

            <SlidingExperience
              company="Staples"
              title="Cashier/Sales"
              date="2022"
              image={staples}
            >
              <Dropdown title="Description">
                <ul className="list-disc list-inside">
                  <li>
                    Worked collaboratively with colleagues to efficiently
                    resolve technical issues with students' personal devices,
                    encompassing virus removal, software installation, and
                    diagnosis and resolution of hardware issues.
                  </li>
                  <li>
                    Facilitated communication among team members and utilized
                    ServiceNow to meticulously document customer issues across
                    various departments for streamlined workflow.
                  </li>
                </ul>
              </Dropdown>
            </SlidingExperience>
          </AboutItem>
        </div>
      </div>
    </div>
  );
}
