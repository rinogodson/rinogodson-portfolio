"use client";

import { spring } from "motion";
import { ReactElement } from "react";

function Button({
  icon,
  text,
  onclick,
  resume = true,
  stateSetter,
}: {
  icon?: ReactElement;
  text: string;
  onclick?: string;
  resume?: boolean;
  stateSetter?: (state: boolean) => void;
}) {
  return (
    <button
      onClick={() => {
        if (resume) {
          const link = document.createElement("a");
          link.href = "/resume.pdf";
          link.download = "resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          return;
        }
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
