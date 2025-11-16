import { BiRightArrowAlt } from "react-icons/bi";
import { SiGithub } from "react-icons/si";

function ProjectBox({
  title,
  stack,
  desc,
  demo,
  repo,
}: {
  title: string;
  stack: string;
  desc: string;
  demo: string | null;
  repo: string;
  i: number;
}) {
  return (
    <div className="p-5 bg-[rgba(9,14,19,0.5)] w-full justify-between max-[640px]:border-x-0 font-bold h-full border-x-2 border-y-2 border-white/10 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="text-3xl text-[#7E9F6E]">{title}</div>
        <div className="text-[1.1rem] text-[#75797F]">{stack}</div>
        <div className="text-[#8D9190]">{desc}</div>
      </div>

      <div className="flex gap-3">
        <a
          href={String(repo)}
          className="flex items-center  gap-2 bg-white/3 px-2 py-1"
        >
          <SiGithub /> Repo
        </a>
        {demo && (
          <a
            href={String(demo)}
            className="flex underline text-[#7F91AF] items-center gap-1"
          >
            View Project <BiRightArrowAlt />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectBox;
