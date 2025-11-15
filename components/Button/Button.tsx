"use client";

import { spring } from "motion";

function Button() {
  return (
    <button
      style={{ transition: "all " + spring(0.2, 0.4) }}
      className="sm:hover:scale-110 font-space-grotesk active:scale-95 sm:active:scale-99 w-fit text-xl sm:text-2xl px-3 font-bold py-1 bg-[#7E9F6E] sm:hover:brightness-110 sm:active:brightness-100 active:brightness-120 text-[#1B1B1B]"
    >
      PROJECTS
    </button>
  );
}

export default Button;
