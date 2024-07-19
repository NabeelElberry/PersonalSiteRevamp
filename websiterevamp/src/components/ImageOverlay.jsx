import { useState, useEffect } from "react";
import pfp from "../assets/pfp.jpg";
import downarrow from "../assets/downarrow.png";
import { XyzTransition, XyzTransitionGroup } from "@animxyz/react";
import "@animxyz/core";

export default function ImageOverlay() {
  return (
    <div
      className={`flex flex-col justify-center text-center items-center w-full h-screen 
        z-10
        text-4xl
        mb-60`}
    >
      <p className="t1">Hi! Welcome to my portfolio.</p>
      <p className="t2 pb-10">I hope you enjoy it!</p>
      <img src={downarrow} className="size-36 animate-longpacityBounce" />
    </div>
  );
}
