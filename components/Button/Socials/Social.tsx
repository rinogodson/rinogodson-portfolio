"use client";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import { ReactElement } from "react";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

function Social() {
  return (
    <div className="flex gap-2 max-[640px]:flex-col">
      <Icon
        name="LinkedIn"
        icon={<SiLinkedin />}
        onclick={() => {
          window.open("https://www.linkedin.com/in/rinogodson/", "_blank");
        }}
        color="#BAAFA2"
      />
      <Icon
        name="Instagram"
        icon={<SiInstagram />}
        onclick={() => {
          window.open("https://instagram.com/rinogodson", "_blank");
        }}
        color="#BAAFA2"
      />
      <Icon
        name="X (twitter)"
        icon={<SiX />}
        onclick={() => {
          window.open("https://x.com/rinogodson", "_blank");
        }}
        color="#BAAFA2"
      />
      <Icon
        name="github"
        icon={<SiGithub />}
        onclick={() => {
          window.open("https://github.com/rinogodson", "_blank");
        }}
        color="#aaaaaa"
        toggled
      />
      <Tooltip
        id="my-tooltip"
        place={"bottom"}
        border={"1px solid rgba(255,255,255,0.2)"}
        className="hidden sm:block"
        style={{
          background: "#1b1b1b",
          borderRadius: "1000px",
        }}
      />
    </div>
  );
}

const Icon = ({
  name,
  icon,
  onclick,
  color,
  toggled = false,
}: {
  name: string;
  icon: ReactElement;
  onclick: () => void;
  color: string;
  toggled?: boolean;
}) => {
  return (
    <a data-tooltip-id="my-tooltip" data-tooltip-content={toggled ? "" : name}>
      <div
        onClick={onclick}
        id={name}
        style={{ backgroundColor: color }}
        className="active:brightness-110 sm:hover:brightness-110 sm:active:brightness-100 text-black w-fit sm:h-full gap-3 p-2 sm:p-4 flex justify-center items-center text-xl sm:text-3xl"
      >
        {icon}
        {toggled && (
          <p className="max-[640px]:hidden text-2xl font-bold">{name}</p>
        )}
      </div>
    </a>
  );
};

export default Social;
