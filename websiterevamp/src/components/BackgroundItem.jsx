import { useEffect, useState } from "react";

export default function BackgroundItem({ title, backgroundImage }) {
  const [classItem, setClassItem] =
    useState(`flex grow items-center justify-center
                        text-wrap text-4xl 
                        border-2 rounded-lg z-10 
                        backgroundDiv 
                        h-full
                        transition ease-in-out hover:cursor-pointer duration-500 relative`);

  useEffect(() => {
    if (backgroundImage == "about") {
      setClassItem(classItem + " hover:bg-cyan-700");
    } else if (backgroundImage == "projects") {
      setClassItem(classItem + " hover:bg-red-500");
    } else {
      setClassItem(classItem + " hover:bg-green-500");
    }
  }, []);
  return (
    <div className={classItem}>
      <p>{title}</p>
      {backgroundImage == "about" ? (
        <pre className="absolute text-smallxl md:text-bigxl -z-10">
          AB
          <br />
          OU
          <br />
          TM
        </pre>
      ) : backgroundImage == "projects" ? (
        <pre className="absolute text-smallxl md:text-bigxl -z-10">
          PR
          <br />
          OJ
          <br />
          EC
          <br />
          TS
        </pre>
      ) : (
        <pre className="absolute text-smallxl md:text-bigxl -z-10">
          SK
          <br />
          IL
          <br />
          LS
        </pre>
      )}
    </div>
  );
}
