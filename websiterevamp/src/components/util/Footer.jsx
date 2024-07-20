import github from "../../assets/github.png";
import download from "../../assets/download.png";
import linkedin from "../../assets/linkedin.png";
import resume from "../../assets/Nabeel_Elberry_Resume.pdf";

import {
  motion,
  useInView,
  useAnimation,
  stagger,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect } from "react";
import Social from "./Social";
import Form from "./Form";
import { LinkedinOriginal } from "devicons-react";
import { duration } from "@mui/material";

export default function Footer() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "100% 0px 0px 0px",
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        type: "spring",
        duration: 1.5,
        bounce: 0.5,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate={controls}
      ref={ref}
      variants={containerVariants}
      className="flex flex-col justify-center items-center pt-10 bg-gray-900 min-h-screen"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        ref={ref}
        variants={itemVariants}
        className="text-4xl lg:text-6xl font-bold mb-8 text-center text-white"
      >
        Wanna Talk?
      </motion.div>

      <Form />

      <motion.div
        variants={containerVariants}
        className="flex flex-col space-y-4 m-4 lg:space-y-0 lg:space-x-4 lg:flex-row"
      >
        <Social>
          <motion.img src={github} className="size-72 mb-4" />
          <motion.a
            href="https://github.com/NabeelElberry"
            className="font-bold"
          >
            My Github
          </motion.a>
        </Social>

        <Social>
          <motion.img src={download} className="size-72 mb-4" />
          <motion.a href={resume} className="font-bold" download>
            My Resume
          </motion.a>
        </Social>
        <Social>
          <motion.img src={linkedin} className="size-72 mb-4" />
          <motion.a
            href="https://www.linkedin.com/in/nabeel-elberry"
            className="font-bold "
            download
          >
            My LinkedIn
          </motion.a>
        </Social>
      </motion.div>
    </motion.div>
  );
}
