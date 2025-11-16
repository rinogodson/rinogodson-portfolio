"use client";

import { spring } from "motion";
import { ReactElement } from "react";

function Button({
  icon,
  text,
  onclick,
  stateSetter,
}: {
  icon?: ReactElement;
  text: string;
  onclick?: string;
  stateSetter?: (state: boolean) => void;
}) {
  return (
    <button
      onClick={() => {
        if (onclick)
          document.getElementById(onclick)?.scrollIntoView({
            behavior: "smooth",
          });
        else {
          if (stateSetter) {
            stateSetter(true);
          }
        }
      }}
      style={{ transition: "all " + spring(0.2, 0.4) }}
      className="sm:hover:scale-110 flex justify-center items-center gap-2 font-space-grotesk active:scale-95 sm:active:scale-99 w-fit text-xl sm:text-2xl px-3 font-bold py-1 bg-[#7E9F6E] sm:hover:brightness-110 sm:active:brightness-100 active:brightness-120 text-[#1B1B1B]"
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;
