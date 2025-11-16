"use client";
import Image from "next/image";
import { motion } from "motion/react";

function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: 5 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        className="font-space-grotesk flex flex-col p-10 pb-0 items-center w-screen h-fit absolute  bottom-0 font-bold uppercase"
      >
        <p className="font-space-grotesk text-3xl sm:text-5xl mb-4 max-[1200px]:mb-2 self-start text-[#757980]">
          HELLO, I&apos;M
        </p>

        <div className="flex w-full">
          <Image
            src="/title/RINO-Inline.svg"
            alt="RINO-i"
            width={1000}
            height={500}
            className="w-full h-full max-[800px]:hidden"
          />

          <Image
            src="/title/RINO-block.svg"
            alt="RINO-b"
            width={1000}
            height={500}
            className="w-full h-full max-[800px]:block hidden"
          />
        </div>
        <div className="self-end mt-3 text-sm sm:text-2xl text-white/30">
          Scroll Down...
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
