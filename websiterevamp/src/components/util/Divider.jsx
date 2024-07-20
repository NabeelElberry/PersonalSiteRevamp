import line from "../../assets/line.png";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Divider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30, scaleX: 0 },
        visible: {
          opacity: 1,
          scaleX: 1,
          transition: { duration: 1, type: "spring", bounce: 0.3 },
          y: 0,
        },
      }}
      className="flex p-10 items-center w-full h-full justify-center"
    >
      <div className="baby:w-96 w-80 h-2 rounded-2xl bg-slate-200" />
    </motion.div>
  );
}
