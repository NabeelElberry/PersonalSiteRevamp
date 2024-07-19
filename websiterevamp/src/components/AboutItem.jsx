import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
export default function AboutItem({ children, style }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100% 0px 0px 0px" });
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
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 1 },
          y: 0,
        },
      }}
      className={`flex flex-col items-center bg-cyan-600 drop-shadow-2xl transition ease-in-out rounded-2xl  
        justify-center lg:w-comp lg:p-4 lg:pl-14 pb-10 ${style}`}
    >
      {children}
    </motion.div>
  );
}
