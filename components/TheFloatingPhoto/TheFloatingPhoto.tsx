"use client";

import { ReactElement, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, spring } from "motion/react";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";
import { PiHeartFill } from "react-icons/pi";

function TheFloatingPhoto({ children }: { children: ReactElement }) {
  const [preview, setPreview] = useState(false);
  const [thoughts, setThoughts] = useState(false);
  const [isMobile, setMobile] = useState(false);

  const hydrated = useRef(false);

  useEffect(() => {
    hydrated.current = true;
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;

    const mq = window.matchMedia("(max-width: 600px)");
    const update = () => setMobile(mq.matches);

    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <motion.div
      initial={{
        translateX: "150%",
        rotate: "45deg",
        opacity: 0,
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
        delay: 0.3,
        duration: 0.5,
      }}
      style={{
        transition: "all " + spring(0.1, 0.3),
        mixBlendMode: preview ? "initial" : "exclusion",
      }}
      className="backdrop-blur-3xl border-8 sm:border-13 border-[#BEB4A8] border-b-0 sm:border-b-0 w-fit h-fit absolute max-[640px]:-right-8 right-20 bottom-[60%] max-[600px]:bottom-[50%] "
      onClick={() => {
        if (isMobile) setPreview(!preview);
      }}
      onMouseLeave={() => setPreview(false)}
    >
      <AnimatePresence>
        {!preview && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1, width: "fit-content" }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 1,
              type: "tween",
              ease: [0.0, 0.0, 0.2, 1],
              duration: 0.3,
              opacity: {
                delay: 0,
              },
            }}
            onMouseOver={() => {
              setThoughts(true);
            }}
            onMouseLeave={() => {
              setThoughts(false);
            }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(
                "https://x.com/rinogodson/status/1989927256131842421",
                "_blank",
              );
            }}
            className="max-[1000px]:hidden flex  cursor-pointer justify-center items-center gap-4 absolute origin-left -bottom-2 -left-[50px] rotate-10 bg-linear-to-r from-[#A282A5] to-[#8291A5] text-black font-bold px-4 py-3 border-3 text-xl border-black"
          >
            My thoughts on AI
            {thoughts && <TbCircleArrowUpRightFilled />}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
      <p className="text-sm sm:text-xl bg-[#BEB4A8] sm:h-10 h-5 flex justify-start sm:justify-end items-center text-black font-bold ">
        <a
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="h-full w-fit flex px-2 sm:hover:scale-120 active:scale-95 sm:active:scale-100 active:text-red-950 hover:text-red-900 justify-center items-center"
        >
          <PiHeartFill />
        </a>
        53485820
      </p>
      {isMobile && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ delay: 1 }}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute -top-4 -left-4 border-2 border-black active:scale-130 active:text-red-500 transition-all duration-100 p-2 bg-[#BCB0A4] text-black rounded-full text-2xl"
        >
          <PiHeartFill />
        </motion.div>
      )}
    </motion.div>
  );
}

export default TheFloatingPhoto;
