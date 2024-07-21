import { useState, useEffect } from "react";
import pfp from "../assets/pfp.jpg";
import downarrow from "../assets/downarrow.png";

export default function ImageOverlay() {
  return (
    <div
      className={`flex flex-col justify-center text-center items-center w-full h-screen 
        z-10
        text-4xl
        mb-60`}
    >
      <p className="t1 pb-4">Hi! Welcome to my portfolio.</p>
      <img src={downarrow} className="size-24 animate-longpacityBounce" />
    </div>
  );
}
