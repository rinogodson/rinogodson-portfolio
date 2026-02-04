import AnimationWrapper from "@/components/Button/AnimationWrapper/AnimationWrapper";
import Button from "@/components/Button/Button";
import Social from "@/components/Button/Socials/Social";
import Hero from "@/components/Hero";
import LanguageSet from "@/components/Languages/LangaugeSet";
import projectData from "@/components/ProjectSection/data";
import ProjectBox from "@/components/ProjectSection/ProjectBox";
import ProjectClientWrapper from "@/components/ProjectSection/ProjectClientWrapper";
import ImageSSR from "@/components/TheFloatingPhoto/ImageSSR";
import { FaAsterisk } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <div className="h-svh relative w-svw flex flex-col overflow-hidden justify-start items-start">
        {/* THis was the star animation and i removed it  */}
        {/* <div className="space w-screen h-screen absolute -z-100"></div> */}
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
            <div className="flex gap-4">
              <Button
                icon={<FaAsterisk className="text-sm animate-spinsmooth" />}
                text="PROJECTS"
                onclick="projects"
                resume={false}
              />
              <Button
                icon={<IoDocumentText className="text-lg" />}
                text="RESUME"
                onclick="projects"
              />
            </div>
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
        <div className="flex sm:flex-row flex-col justify-between sm:px-10 items-center gap-20">
          <div>
            <div
              id="skills"
              className="mb-4 mt-20 sm:text-5xl max-[800px]:px-10 text-3xl font-bold text-[#7EAABA]"
            >
              # Skills
            </div>
            <div
              id="skills"
              className="sm:text-3xl max-[800px]:px-10 text-2xl font-bold text-[#7F91AF]"
            >
              ## Languages
            </div>
            <LanguageSet />

            <div
              id="skills"
              className="mt-10 sm:text-3xl max-[800px]:px-10 text-2xl font-bold text-[#7F91AF]"
            >
              ## Tools
            </div>
            <div className="flex flex-wrap max-[800px]:px-10 mt-3 gap-2">
              <a
                className={
                  "flex justify-center items-center bg-[#CAAC7A] font-bold text-black px-4 py-1 text-2xl"
                }
              >
                NEOVIM
              </a>
              <a
                className={
                  "flex justify-center items-center bg-[#CAAC7A] font-bold text-black px-4 py-1 text-2xl"
                }
              >
                GIT
              </a>
              <a
                className={
                  "flex justify-center items-center bg-[#CAAC7A] font-bold text-black px-4 py-1 text-2xl"
                }
              >
                FIGMA
              </a>
              <a
                className={
                  "flex justify-center items-center bg-[#CAAC7A] font-bold text-black px-4 py-1 text-2xl"
                }
              >
                POSTMAN
              </a>
            </div>
          </div>
          <div className="sm:-translate-x-40 -rotate-10 text-[#CAAC7A] font-[Caveat] sm:text-5xl text-2xl">
            These skills helped me <br />
            build all these projects!
          </div>
        </div>
      </div>

      <div className="w-full h-[30vh] text-5xl font-bold flex justify-center items-center">
        Thank You!
      </div>
    </>
  );
}
