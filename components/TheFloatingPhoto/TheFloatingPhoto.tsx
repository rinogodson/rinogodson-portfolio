"use client";

import { ReactElement } from "react";
import { motion } from "motion/react";

function TheFloatingPhoto({ children }: { children: ReactElement }) {
  return (
    <motion.div
      initial={{ translateX: "50rem", rotate: "-90deg", opacity: 0.5 }}
      animate={{ translateX: "0px", rotate: "-10deg", opacity: 1 }}
      transition={{
        type: "tween",
        ease: [0.0, 0.0, 0.2, 1],
        delay: 0.2,
        duration: 0.5,
      }}
      className="border-b-15 mix-blend-exclusion border-5 sm:border-13 sm:border-b-40 border-[#BEB4A8] w-fit h-fit absolute -right-8 sm:right-20 bottom-[60%] max-[600px]:bottom-[50%] translate-y-[50%]"
    >
      {children}
    </motion.div>
  );
}

export default TheFloatingPhoto;
