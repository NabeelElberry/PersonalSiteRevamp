import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function ProjectItem({ title, text, link, image }) {
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
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      ref={ref}
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          transition: { duration: 1, type: "spring", bounce: 0.75 },
          y: 0,
        },
      }}
      className="baby:w-96 w-80 h-64 
      drop-shadow-2xl
      hover:cursor-pointer bg-gradient-to-b from-slate-900 to-slate-700 
      flex-col flex mb-4
      rounded-2xl"
    >
      <div className="p-2 w-full flex h-6 bg-red-500 rounded-t-2xl drop-shadow-2xl space-x-1 items-center ">
        <p className="mr-auto">{title}</p>
        <div className="circle rounded-full drop-shadow-2xl size-5 bg-green-200"></div>
        <div className="circle rounded-full drop-shadow-2xl size-5 bg-yellow-200"></div>
        <div className="circle rounded-full drop-shadow-2xl size-5 bg-red-200"></div>
      </div>
      <div className="flex  w-full h-full pr-2 pl-2 items-center">
        <img src={image} className="size-36 m-2 rounded-2xl" />
        <div className="flex-col flex items-center">
          <p className="text-center text-3xl">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}
