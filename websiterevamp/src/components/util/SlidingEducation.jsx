import {
  motion,
  useInView,
  useAnimation,
  stagger,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect } from "react";
import Dropdown from "./Dropdown.jsx";
import Divider from "./Divider.jsx";

export default function SlidingEducation({
  title,
  date,
  image,
  degree,
  children,
}) {
  const ref = useRef(null);
  const controls = useAnimation();

  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const imageVariants = {};

  const textVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  return (
    <div className="w-full">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1.5,
              type: "spring",
              bounce: 0.3,
              staggerChildren: 0.3,
            },
          },
        }}
        ref={ref}
        className="flex pr-2 pl-2 grow flex-col w-full md:flex-row justify-center items-center"
      >
        <AnimatePresence>
          <motion.img
            src={image}
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                transition: {
                  duration: 1,
                },
              },
            }}
            className="size-40 md:mr-12"
          />

          <div className="flex flex-col justify-center text-center grow items-center">
            <motion.p variants={textVariants} className="text-3xl">
              <u>
                <strong>{title}</strong>
              </u>
            </motion.p>
            <motion.p variants={textVariants} className="text-3xl">
              {degree}
            </motion.p>
            <motion.p variants={textVariants} className="text-2xl">
              {date}
            </motion.p>
            <motion.p variants={textVariants} className="w-full  text-1xl">
              {children}
            </motion.p>
          </div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
