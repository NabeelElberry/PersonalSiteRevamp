import React from "react";
import information from "./util/info";

export default function ProjectDisplay({ number }) {
  console.log(number);
  console.log(information);

  return (
    <div className="flex flex-col border-8 border-slate-600 h-full items-center p-6 bg-gray-800 shadow-lg rounded-3xl">
      <div className="flex flex-col items-center lg:w-comp">
        <h1 className="lg:text-4xl font-bold pb-10 text-gray-100">
          <u>
            <strong>{information.titles[number]}</strong>
          </u>
        </h1>
        <div className="flex flex-row w-full items-center">
          <div className="flex flex-col items-center justify-center w-1/3 h-full mb-4">
            <img
              src={information.images[number]}
              className="w-24 h-24 rounded-md mb-4"
              alt={information.titles[number]}
            />
            <div className="flex flex-row items-center justify-center flex-wrap mb-4">
              {information.icons[number].map((icon, idx) => (
                <div key={idx} className="p-1">
                  {icon}
                </div>
              ))}
            </div>
            <a
              href={information.links[number]}
              className="bg-gray-700 
                hover:scale-110 transition ease-in-out
              rounded-xl p-2 text-gray-200"
            >
              Github
            </a>
          </div>

          <p className="text-gray-300 grow lg:text-xl w-2/3 leading-relaxed text-center">
            {information.descriptions[number]}
          </p>
        </div>
      </div>
    </div>
  );
}
