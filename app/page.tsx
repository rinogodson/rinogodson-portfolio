import AnimationWrapper from "@/components/Button/AnimationWrapper/AnimationWrapper";
import Button from "@/components/Button/Button";
import Social from "@/components/Button/Socials/Social";
import Hero from "@/components/Hero";
import ImageSSR from "@/components/TheFloatingPhoto/ImageSSR";

export default function Home() {
  return (
    <>
      <div className="h-svh relative w-svw flex flex-col overflow-hidden justify-start items-start">
        <AnimationWrapper>
          <div className="p-20 flex flex-col gap-5 max-[1200px]:p-10 max-[600px]:p-5">
            <h1 className="text-2xl max-[600px]:text-xl max-[1200px]:text-[1em] font-bold text-[#7F91AF]">
              turning coffee into code &amp; bugs into features
            </h1>

            <p className="text-xl max-[600px]:text-sm w-150 max-[600px]:w-full max-[1200px]:text-[1em]">
              i&apos;m hands-off with docs. i learn by building - sometimes
              small, sometimes wild. i like turning ideas into real, working
              stuff. even if it&apos;s half-broken at first, it works...
              eventually.
            </p>
            <Button />
            <Social />
          </div>
        </AnimationWrapper>
        <ImageSSR />
        <Hero />
      </div>

      <div className="px-4 py-8 w-full mx-auto">
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
        <p className="text-2xl">dhjashdja</p>
      </div>
    </>
  );
}
