"use client";
import Image from "next/image";
import { motion } from "motion/react";

function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: 100 }}
        className="font-space-grotesk flex flex-col p-10 items-center w-screen absolute  bottom-0 font-bold uppercase"
      >
        <p className="font-space-grotesk text-3xl sm:text-5xl mb-4 max-[1200px]:mb-2 self-start text-[#757980]">
          HELLO, I&apos;M
        </p>

        <div className="flex max-[1200px]:flex-col max-[1200px]:gap-1.5 w-full justify-center aspect-1161/135 max-[1200px]:aspect-auto">
          <Image
            src="/title/RINO.svg"
            alt="RINO"
            width={1000}
            height={500}
            className="w-auto h-full max-[1200px]:w-fit max-[600px]:h-20 max-[600px]:w-fit"
          />

          <div className="w-[60px] max-[1200px]:hidden" />

          <Image
            src="/title/GODSON.svg"
            alt="GODSON"
            width={1000}
            height={500}
            className="w-auto h-full max-[1200px]:w-fit"
          />
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
