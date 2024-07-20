import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Form() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100% 0px 0px 0px" });
  const controls = useAnimation();

  const nameRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs;
    emailjs
      .send("service_dyduipn", "template_2do1w0s", {
        from_name: nameRef.current.value,
        message: textRef.current.value,
      })
      .then(
        () => {
          alert("Your Message has been sent to Nabeel");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message, please try again");
        }
      );
  };

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
            duration: 1.5,
            bounce: 0.5,
          },
        },
      }}
      className="bg-gray-800 p-8 flex flex-col justify-center items-center rounded-lg shadow-lg baby:w-96 w-80 lg:w-full max-w-lg"
    >
      {" "}
      <p className="text-2xl font-semibold mb-6 text-gray-200 text-center">
        Contact me!
      </p>
      <input
        ref={nameRef}
        type="text"
        name="name"
        placeholder="Enter your name"
        required
        autocomplete="off"
        className="w-full p-3 mb-4 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        ref={textRef}
        name="message"
        placeholder="Type your message to Nabeel..."
        required
        autocomplete="off"
        className="w-full p-3 mb-6 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows="4"
      ></textarea>
      <button
        className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        type="submit"
        name="submit"
        value="Send"
        required
        onClick={sendEmail}
      >
        Send!
      </button>
    </motion.div>
  );
}
