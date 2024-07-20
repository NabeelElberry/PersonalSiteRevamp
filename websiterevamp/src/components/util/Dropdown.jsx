import {
  motion,
  animationControls,
  useAnimationControls,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import dropdown from "../../assets/dropdown.png";

export default function Dropdown({ title, children }) {
  const controls = useAnimationControls();
  const handleOnClick = () => {
    controls.start(visible ? "initial" : "flip");
    setVisible(!visible);
    console.log(visible);
  };

  const [visible, setVisible] = useState(false);
  return (
    <div>
      <motion.div className="flex flex-row justify-center text-center items-center text-2xl space-x-2">
        <p className="text-center">{title}</p>
        <motion.button
          initial="initial"
          animate={controls}
          variants={{
            initial: {
              rotate: "0deg",
            },
            flip: {
              rotate: "180deg",
            },
          }}
          onClick={() => handleOnClick()}
        >
          <img src={dropdown} className="size-5 mt-2" />
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {visible && (
          <motion.p
            layout
            initial={{
              y: -10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              animationDelay: 1,
            }}
            className={`${title == "Clubs" ? "text-center" : "text-left"}`}
          >
            {children}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
