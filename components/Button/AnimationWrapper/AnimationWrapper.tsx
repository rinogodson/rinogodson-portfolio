"use client";
import { motion } from "motion/react";
import { ReactElement } from "react";
function AnimationWrapper({ children }: { children: ReactElement }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationWrapper;
