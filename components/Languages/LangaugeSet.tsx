"use client";
import { ReactElement } from "react";
import {
  SiCss3,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLua,
  SiPython,
  SiRust,
  SiSqlite,
  SiTypescript,
} from "react-icons/si";
import { Tooltip } from "react-tooltip";

function LangaugeSet() {
  return (
    <div className="flex flex-row gap-2 w-full max-[800px]:px-10 mt-3 flex-wrap">
      <div className="flex">
        <Icon
          icon={<SiJavascript />}
          name="Javascript"
          color="#CAAC7A"
          size={1.2}
        />
        <Icon
          icon={<SiTypescript />}
          name="Typescript"
          color="#7A93CA"
          size={1.2}
        />
      </div>
      <Icon icon={<SiGo />} name="Golang" color="#7AA2CA" size={1.8} />
      <Icon icon={<SiRust />} name="Rust" color="#CA877A" size={1.3} />
      <Icon icon={<SiLua />} name="Lua" color="#7A81CA" size={1.3} />
      <Icon icon={<SiSqlite />} name="SQL" color="#7AB3CA" size={1.3} />
      <Icon icon={<SiPython />} name="Python" color="#AABE74" size={1.3} />
      <div className="flex">
        <Icon icon={<SiHtml5 />} name="HTML" color="#CA9B7A" size={1.2} />
        <Icon icon={<SiCss3 />} name="CSS" color="#967ACA" size={1.2} />
      </div>

      <Tooltip
        id="skill"
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
  icon,
  name,
  color,
  size,
}: {
  icon: ReactElement;
  name: string;
  color: string;
  size: number;
}) => {
  return (
    <a
      data-tooltip-id="skill"
      data-tooltip-content={name}
      style={{ background: color, fontSize: `${1.5 * size}em` }}
      className={
        "h-15 aspect-4/3 flex justify-center items-center text-black p-3"
      }
    >
      {icon}
    </a>
  );
};

export default LangaugeSet;
