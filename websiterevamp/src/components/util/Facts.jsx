import {
  motion,
  useInView,
  useAnimation,
  useAnimationControls,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function Facts({ children }) {
  const ref = useRef();
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

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
            duration: 1.5,
            type: "spring",
            bounce: 0.3,
          },
        },
      }}
      className="m-2 baby:w-96 w-80 lg:w-comp flex flex-col justify-center items-center bg-[#212835] rounded-2xl p-5"
    >
      {children}
    </motion.div>
  );
}
