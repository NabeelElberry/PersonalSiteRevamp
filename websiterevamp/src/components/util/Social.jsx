import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Social({ children }) {
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

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      ref={ref}
      variants={{
        hidden: {
          scale: 0,
        },
        visible: {
          scale: 1,
          transition: {
            type: "spring",
            duration: 0.7,
            bounce: 0.5,
          },
        },
      }}
      className="
      hover:bg-gray-700 transition ease-in-out duration-700
      bg-gray-800 p-8 flex flex-col justify-center items-center rounded-lg shadow-lg lg:size-44 max-w-md"
    >
      {children}
    </motion.div>
  );
}
