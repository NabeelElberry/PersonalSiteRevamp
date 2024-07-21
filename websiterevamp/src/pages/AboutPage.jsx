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
import Footer from "../components/util/Footer";
import { motion, useInView, useAnimation } from "framer-motion";
import Facts from "../components/util/Facts";

export default function AboutPage() {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

  return (
    <div className="abt bg-gradient-to-b bg-gray-900">
      <NavBarSecondary extraStyle="animate-slideDown pb-2 pt-2" />
      <div className="flex flex-col lg:flex-row lg:space-x-32 items-center justify-center grow w-full h-screen">
        <img
          src={pfp}
          alt="Profile"
          className="md:size-32r drop-shadow-2xl hover:scale-110 transition duration-700 ease-in-out size-96 rounded-full animate-popIn"
        />

        <div className="flex flex-col size-72 items-center justify-center">
          <div className="text-center text-4xl font-extrabold">
            My name is Nabeel Elberry.
          </div>
          <div class="group text-white text-xl transition duration-300">
            I'm a full stack developer.
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-16">
        <Divider />
        <motion.p
          initial="hidden"
          animate={controls}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.3,
          }}
          variants={{
            hidden: {
              scale: 0,
            },
            visible: {
              scale: 1,
              transition: {
                type: "spring",
                bounce: 0.3,
                duration: 1,
              },
            },
          }}
          ref={ref}
          className={`mb-28 text-3xl baby:4xl lg:text-6xl`}
        >
          Here's a bit about me<span className="animate-fadeInOut">...</span>
        </motion.p>

        <Facts>
          <p className="text-5xl font-bold pb-5">Fun Facts!</p>
          <p className="pb-2 text-2xl font-semibold text-center">
            I am a passionate software engineer looking for full stack
            opportunities. I have experience in Data Science, Machine Learning,
            and many other aspects of Computer Science.
          </p>
          <Divider />
          <div className="flex flex-row items-center pb-2">
            <img src={languages} className="size-20 rounded-full mr-2" />
            <div>
              <p className="">
                When I'm not coding, you can find me learning languages! I
                really enjoy language learning as I feel it allows you to
                connect to the culture on a different level. Currently I'm
                learning Japanese, Mandarin Chinese, and French, I dabble in
                many more languages though!
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div>
              <p className="text-center">
                I also weightlift, do calisthenics, and climb!
              </p>
              <Dropdown title="Current Stats">
                <div>
                  <strong>V4 Climber</strong>
                </div>
                <div>
                  <strong>Bench Press: </strong> 185lb (need to retest)
                </div>
                <div>
                  <strong>Pull up max:</strong> 21 clean form
                </div>
                <div>
                  <strong>Weighted pull-up:</strong> 65lbs - 5 reps
                </div>
                <div>
                  <strong>Handstand Push Up (Wall Assisted):</strong> 10 reps
                </div>
                <div>
                  <strong>Muscle Up</strong> ✅
                </div>
                <div>
                  <strong>Front Lever</strong> ✅
                </div>
                <div>
                  <strong>Advanced Tuck Planche</strong> ⏳
                </div>
              </Dropdown>
            </div>
            <img src={frontlever} className="size-20 rounded-full" />
          </div>
        </Facts>

        <div className="flex justify-center items-center  flex-col m-2 space-y-4  rounded-3xl drop-shadow-2xl ">
          <AboutItem className="flex flex-col items-center justify-center  mr-2 ">
            <p className="text-5xl font-bold pb-5 mt-5 underline">EDUCATION</p>
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
            <p className="text-5xl pb-5 font-bold mt-5 underline">EXPERIENCE</p>

            <SlidingExperience
              company="UMD: Terrapin Technology"
              title="Hardware Service Technician"
              date="2023-2024"
              image={umdlogocircle}
            >
              <Dropdown title="Description">
                <ol className="list-disc list-inside">
                  <li>
                    Resolved technical issues and provided support for various
                    operating systems including but not limited to{" "}
                    <u>
                      <strong>
                        Windows, Linux, MacOS, and Google ChromeOS
                      </strong>
                    </u>{" "}
                    to ensure smooth operation and user satisfaction.
                  </li>
                  <li>
                    Utilize{" "}
                    <strong>
                      <u>ServiceNow</u>
                    </strong>{" "}
                    to document procedures and provide effective communication
                    with a{" "}
                    <u>
                      <strong>96% solution rate</strong>
                    </u>
                    .
                  </li>
                  <li>
                    Assist{" "}
                    <strong>
                      <u>100+ students and faculty</u>
                    </strong>{" "}
                    daily with high quality technical assistance for a wide
                    variety of devices
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
                    Managed cash handling duties including processing
                    transactions, giving change, and balancing register at the
                    end of the shift.
                  </li>
                  <li>
                    Maintained efficient and organized shelves by restocking
                    products, rotating inventory, and ensuring proper product
                    placement.
                  </li>
                  <li>
                    Provided exceptional customer service by addressing
                    inquiries, resolving complaints, and enhancing overall
                    shopping experience.
                  </li>
                </ul>
              </Dropdown>
            </SlidingExperience>
          </AboutItem>
        </div>
      </div>
      <Footer />
    </div>
  );
}
