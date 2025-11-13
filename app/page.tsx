export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white">
      <div
        id="hero_nav"
        className="font-space-grotesk flex flex-col items-center absolute bottom-5 w-[calc(100vw-5rem)] text-[22vw] sm:text-[14vw] leading-none font-bold uppercase"
      >
        <p className="font-space-grotesk text-2xl sm:text-5xl mb-4 self-start sm:ml-15 text-[#757980] -ml-1 tracking-widest">
          HELLO, I&apos;M
        </p>
        RINO GODSON
      </div>
    </div>
  );
}
// TODO: Make this Text here like Daniel Sun's website (Completely based of grid, conditional grid might be good)
// Also, make it so that it goes up and becomes the navigation bar's logo
