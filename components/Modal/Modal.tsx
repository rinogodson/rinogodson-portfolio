"use client";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { FaX } from "react-icons/fa6";
import { motion } from "motion/react";

function Modal({
  setFalse,
  children,
}: {
  setFalse: Dispatch<SetStateAction<boolean>>;
  children: ReactElement;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => setFalse(false)}
      className="fixed inset-0 bg-[rgba(9,14,19,0.9)] backdrop-blur-sm z-1000 flex justify-center w-screen h-screen items-center"
    >
      <motion.div
        initial={{ opacity: 0, translateY: "100px" }}
        animate={{ opacity: 1, translateY: "0px" }}
        transition={{ duration: 0.3, delay: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#090e13] border border-white/10 sm:border-x border-x-0 w-full sm:w-fit sm:h-4/5 overflow-y-scroll max-h-[80vh] h-fit p-6"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="text-3xl absolute top-10 max-[640px]:block  hidden right-10"
        >
          <FaX onClick={() => setFalse(false)} />
        </motion.div>
        {children}
      </motion.div>
    </motion.div>
  );
}

export default Modal;
