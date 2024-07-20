import Icon from "./Icon";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function SlidingIcons({ icons }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100% 0px 0px 0px" });
  const controls = useAnimation();
  let iconVariants;
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // if (window.innerWidth > 768) {
  //   iconVariants = {
  //     hidden: { opacity: 0, x: 0 },
  //     visible: (i) => ({
  //       x: 50 * (i + 1), // Move each icon 50px more to the right than the previous one
  //       opacity: 1,
  //       transition: {
  //         type: "spring",
  //         stiffness: 100,
  //         damping: 10,
  //         delay: i * 0.1, // Stagger the animations by 0.2s
  //       },
  //     }),
  //   };
  // } else {
  iconVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: (i) => ({
      x: 1, // Move each icon 50px more to the right than the previous one
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        bounce: 1,
        delay: i * 0.1, // Stagger the animations by 0.2s
      },
    }),
  };
  // }

  return (
    <div className="flex w-full mb-10 mt-10 flex-row  justify-center items-center">
      <motion.div
        initial="hidden"
        animate={controls}
        ref={ref}
        className="w-full"
      >
        <div
          /* lg:grid-cols-6*/ className={`grid grid-cols-4 lg:flex lg:flex-row gap-4`}
        >
          {icons.map((icon, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={controls}
              variants={iconVariants}
              className="relative w-full h-full"
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
