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
      hover:cursor-pointer bg-gradient-to-b 
      flex-col flex mb-4
      rounded-2xl"
    >
      <div className="p-2 w-full flex h-6 bg-gradient-to-b bg-gray-800 rounded-2xl drop-shadow-2xl space-x-1 items-center ">
        <p className="mr-auto text-[#E0E0E0]">
          <strong>{title}</strong>
        </p>
        <div className="circle rounded-full drop-shadow-2xl size-5 bg-green-400"></div>
        <div className="circle rounded-full drop-shadow-2xl size-5 bg-yellow-400"></div>
        <div className="circle rounded-full drop-shadow-2xl size-5 bg-red-400"></div>
      </div>
      <div className="flex w-full h-full bg-gradient-to-b bg-gray-700 pr-2 pl-2 items-center">
        <img src={image} className="size-36 m-2 rounded-lg" />
        <div className="flex-col flex items-center">
          <p className="text-center text-3xl font-semibold text-[#E0E0E0]">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
