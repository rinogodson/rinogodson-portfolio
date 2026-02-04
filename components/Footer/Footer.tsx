"use client";
import { motion } from "motion/react";
export const Footer = () => {
  return (
    <motion.div
      id="footer"
      className="relative w-full flex flex-col h-[50vh] sm:h-[75vh] items-center justify-center"
    >
      <motion.button
        initial={{ scale: 1, translateY: "200px", opacity: 0, rotate: 10 }}
        whileInView={{ scale: 1, translateY: "0px", opacity: 1, rotate: -6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.2, rotate: 4 }}
        whileTap={{ scale: 1 }}
        className="mb-10 mt-20 bg-[#7AB3CA] active:brightness-110 text-black font-bold px-5 py-4 sm:px-14 sm:py-8 text-5xl sm:text-7xl shadow-[0_0_0_10px_black,0_0_0px_15px_#7AB3CA]"
      >
        CONNECT
      </motion.button>
      <motion.p
        initial={{ translateY: "100px", opacity: 0 }}
        whileInView={{ translateY: "0px", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "linear" }}
        className="absolute bottom-10 w-full text-center grid grid-cols-2 sm:grid-cols-4"
      >
        <FooterLink href="https://instagram.com/rinogodson" text="Instagram" />{" "}
        <FooterLink href="https://linkedin.com/in/rinogodson" text="Linkedin" />{" "}
        <FooterLink href="https://x.com/rinogodson" text="X (twitter)" />{" "}
        <FooterLink href="https://github.com/rinogodson" text="Github" />
      </motion.p>
    </motion.div>
  );
};

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="text-[#7AB3CA] hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
