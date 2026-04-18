"use client";
import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { useState } from "react";
import { MusicPlayer } from "./music";
import { anim, txt1, txt1_1, txt2, txt2_1, txt3 } from "@/data/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { Program } from "./Program";

export function Home() {
  return (
    <div className="text-center overflow-hidden  FontSHK_Dzeragir ">
      <div
        className="FontSHK_Dzeragir py-20  tracking-0 h-screen bg-cover bg-top flex flex-col justify-between pt-20 p-7 "
        style={{ backgroundImage: "url('/img1.jpg')" }}
      >
        <div className="flex items-center justify-center">
          <h2 className="text-[64px] mt-20 -mr-10 text-vrayi">Խաչիկ</h2>
          <span className="text-9xl text-taki"> & </span>
          <h2 className="text-[64px] mb-20 -ml-10 text-vrayi">Վարյա</h2>
        </div>
        <p className="FontSHK_Dzeragir text-[64px] text-vrayi">06/09/2026</p>
      </div>

      <div className="FontSHK_Dzeragir px-5 my-20">
        <motion.h3 {...anim} className=" text-sovorakan relative text-[36px]">
          Սիրելիներս
          <p className=" absolute -z-1 text-5xl top-3 left-1/2 -translate-x-1/2 text-taki">
            Սիրելիներս
          </p>
        </motion.h3>
        <motion.p
          {...anim}
          className=" text-sovorakan relative  text-2xl mt-10"
        >
          {txt1}
          <span className=" absolute w-[200%] -z-1 text-4xl -top-1 left-1/2 -translate-x-1/2 text-taki">
            {txt1_1}
          </span>
        </motion.p>
      </div>

      <div className=" mt-30 relative w-full text-[#580000] ">
        <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee-2 text-7xl -rotate-2  -translate-x-full">
          I Love You I Love You I Love You I Love You I Love You I Love You I
          Love You I Love You I Love You I Love You I Love You I Love You I Love
          You I Love You I Love You I Love You I Love You I Love You I Love You
          I Love You I Love You I Love You I Love You I Love You I Love You I
          Love You I Love You I Love You I Love You I Love You I Love You I Love
          You I Love You
        </div>
        <div  className="FontBabylonica-Regular whitespace-nowrap animate-marquee text-6xl mb-10 rotate-2  -translate-x-full">
          I Love You I Love You I Love You I Love You I Love You I Love You I
          Love You I Love You I Love You I Love You I Love You I Love You I Love
          You I Love You I Love You I Love You I Love You I Love You I Love You
          I Love You I Love You I Love You I Love You I Love You I Love You I
          Love You I Love You I Love You I Love You I Love You I Love You I Love
          You I Love You
        </div>
        <div  className="FontBabylonica-Regular whitespace-nowrap animate-marquee-2 text-5xl mt-15  -rotate-2 -translate-x-full">
          I Love You I Love You I Love You I Love You I Love You I Love You I
          Love You I Love You I Love You I Love You I Love You I Love You I Love
          You I Love You I Love You I Love You I Love You I Love You I Love You
          I Love You I Love You I Love You I Love You I Love You I Love You I
          Love You I Love You I Love You I Love You I Love You I Love You I Love
          You I Love You
        </div>
        <div  className="FontBabylonica-Regular whitespace-nowrap animate-marquee text-4xl mb-10 rotate-2  -translate-x-full">
          I Love You I Love You I Love You I Love You I Love You I Love You I
          Love You I Love You I Love You I Love You I Love You I Love You I Love
          You I Love You I Love You I Love You I Love You I Love You I Love You
          I Love You I Love You I Love You I Love You I Love You I Love You I
          Love You I Love You I Love You I Love You I Love You I Love You I Love
          You I Love You
        </div>
        <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee-2 text-3xl mt-15 -rotate-2 -translate-x-full">
          I Love You I Love You I Love You I Love You I Love You I Love You I
          Love You I Love You I Love You I Love You I Love You I Love You I Love
          You I Love You I Love You I Love You I Love You I Love You I Love You
          I Love You I Love You I Love You I Love You I Love You I Love You I
          Love You I Love You I Love You I Love You I Love You I Love You I Love
          You I Love You
        </div>
        <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee text-2xl mb-10 rotate-2  -translate-x-full">
          I Love You I Love You I Love You I Love You I Love You I Love You I
          Love You I Love You I Love You I Love You I Love You I Love You I Love
          You I Love You I Love You I Love You I Love You I Love You I Love You
          I Love You I Love You I Love You I Love You I Love You I Love You I
          Love You I Love You I Love You I Love You I Love You I Love You I Love
          You I Love You
        </div>
        <div  className="FontBabylonica-Regular whitespace-nowrap animate-marquee-2 text-xl mt-15 -rotate-2 -translate-x-full">
          I Love You I Love You I Love You I Love You I Love You I Love You I
          Love You I Love You I Love You I Love You I Love You I Love You I Love
          You I Love You I Love You I Love You I Love You I Love You I Love You
          I Love You I Love You I Love You I Love You I Love You I Love You I
          Love You I Love You I Love You I Love You I Love You I Love You I Love
          You I Love You
        </div>
        <Image
          src="/img2.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl absolute object-cover  "
        />
      </div>

      <TimeBox />

    <Program/>

      <motion.div {...anim} className="px-5">
        <Image
          src="/img3.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-full  object-cover rounded-xl mb-20 "
        />
      </motion.div>

      <motion.p
        {...anim}
        className=" mb-20 text-sovorakan relative  text-2xl mt-10"
      >
        {txt2}
        <span className=" absolute w-[200%] -z-1 text-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-taki">
          {txt2_1}
        </span>
      </motion.p>
    </div>
  );
}
