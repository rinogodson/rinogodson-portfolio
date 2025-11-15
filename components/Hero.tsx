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
        <p className="font-space-grotesk text-2xl sm:text-5xl mb-4 max-[1200px]:mb-2 self-start text-[#757980]">
          HELLO, I&apos;M
        </p>

        <div
          style={{ aspectRatio: "1161 / 135" }}
          className="flex max-[1200px]:flex-col max-[1200px]:gap-1.5 w-full justify-center "
        >
          <Image
            src="/title/RINO.svg"
            alt="RINO"
            width={1000}
            height={500}
            className="w-auto h-full max-[1200px]:w-fit max-[560px]:h-20"
          />

          <div className="w-[60px]" />

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
