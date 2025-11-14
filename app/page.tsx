"use client";

import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-end text-white">
      <div className="h-screen w-screen flex flex-col justify-end items-center">
        <Hero />
      </div>
    </div>
  );
}
