import React from "react";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial="hidden"
        ref={ref}
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
          duration: 4,
        }}
        className="
        flex flex-col
        size-32r m-2 bg-slate-400 p-2 
        items-center rounded-3xl 
         justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
