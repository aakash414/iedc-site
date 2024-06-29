"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Link from "next/link";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        IEDC CUSAT <br />{" "}
        <p className="text-xl">
          Innovation and Entrepreneurship Development Cell
        </p>
      </motion.h1>
      <button className="mt-14 rounded-full bg-gradient-conic from-emerald-500 via-transparent to-emerald-500 px-4 py-2 text-xl  text-white hover:cursor-pointer hover:bg-opacity-60 ">
        <Link href="#about">Know More</Link>
      </button>
    </LampContainer>
  );
}
