import AnimationWrapper from "@/components/Button/AnimationWrapper/AnimationWrapper";
import Button from "@/components/Button/Button";
import Social from "@/components/Button/Socials/Social";
import Hero from "@/components/Hero";
import projectData from "@/components/ProjectSection/data";
import ProjectBox from "@/components/ProjectSection/ProjectBox";
import ProjectClientWrapper from "@/components/ProjectSection/ProjectClientWrapper";
import ImageSSR from "@/components/TheFloatingPhoto/ImageSSR";
import { FaAsterisk } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="h-svh relative w-svw flex flex-col overflow-hidden justify-start items-start">
        <AnimationWrapper>
          <div className="p-20 flex flex-col gap-5 max-[1200px]:p-10 max-[600px]:p-5">
            <h1 className=" text-2xl max-[600px]:text-xl max-[1200px]:text-[1em] font-bold text-[#7F91AF]">
              turning coffee into code &amp; bugs into features
            </h1>

            <p className="text-xl max-[600px]:text-sm w-150 max-[600px]:w-full max-[1200px]:text-[1em]">
              i&apos;m hands-off with docs. i learn by building - sometimes
              small, sometimes wild. i like turning ideas into real, working
              stuff. even if it&apos;s half-broken at first, it works...
              eventually.
            </p>
            <Button
              icon={<FaAsterisk className="text-sm animate-spinsmooth" />}
              text="PROJECTS"
              onclick="projects"
            />
            <Social />
          </div>
        </AnimationWrapper>
        <ImageSSR />
        <Hero />
      </div>

      <div className="mt-10 sm:pt-30 pt-20 py-8 w-full border-t-white/5 border-t-2">
        <div
          id="projects"
          className="mb-10 sm:text-5xl px-10 text-3xl font-bold text-[#7EAABA]"
        >
          # Projects
        </div>
        <div className="sm:px-10 sm:gap-10 grid w-full sm:grid-cols-2 grid-cols-1">
          {projectData.map((item, i) => {
            if (i < 4) {
              return (
                <ProjectBox
                  key={item.title}
                  title={item.title}
                  stack={item.stack}
                  desc={item.description}
                  demo={item.demo}
                  repo={item.repo}
                  i={i}
                />
              );
            }
          })}
        </div>
        <ProjectClientWrapper />
      </div>
    </>
  );
}
