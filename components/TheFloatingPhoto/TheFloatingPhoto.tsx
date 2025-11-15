"use client";

import { ReactElement, useState } from "react";
import { motion, spring } from "motion/react";

function TheFloatingPhoto({ children }: { children: ReactElement }) {
  const [preview, setPreview] = useState(false);

  return (
    <motion.div
      initial={{
        translateX: "100%",
        rotate: "90deg",
        opacity: 0.5,
        translateY: "-50%",
        scale: 2,
      }}
      animate={{
        translateX: preview ? "-50%" : "0%",
        rotate: preview ? "0deg" : "-7deg",
        opacity: 1,
        translateY: "50%",
        scale: preview ? 1.4 : 1,
      }}
      transition={{
        type: "tween",
        ease: [0.0, 0.0, 0.2, 1],
        delay: 0.2,
        duration: 0.5,
      }}
      style={{
        transition: "all " + spring(0.1, 0.3),
        mixBlendMode: preview ? "initial" : "exclusion",
      }}
      className="active:scale-99 border-b-20 backdrop-blur-3xl border-8 sm:border-13 sm:border-b-40 border-[#BEB4A8] w-fit h-fit absolute max-[600px]:-right-8 right-20 max-[1200px]:-right-8 bottom-[60%] max-[600px]:bottom-[50%] "
      onClick={() => setPreview(!preview)}
      onMouseLeave={() => setPreview(false)}
    >
      {children}
    </motion.div>
  );
}

export default TheFloatingPhoto;
