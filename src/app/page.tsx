"use client";

import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
} from "@geist-ui/icons";
import { useEffect, useState } from "react";
import {
  AcademicFormation,
  Courses,
  GradientTitle,
  WorkExperience,
} from "./ui/components";
import { Resume } from "./ui/components/resume";
import { Skills } from "./ui/components/skills";

export default function Home() {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 lg:px-[20vw] transition-all duration-700">
      <div
        className="flex-none pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            900px at ${position.x}px ${position.y}px,
          rgba(0,105,168,0.2),
            transparent 80%
          )`,
        }}
      />

      <header className="flex flex-col flex-3/5 gap-8 lg:sticky lg:top-0 lg:h-screen lg:justify-between lg:py-[4vw]">
        <div className="font-[family-name:var(--font-geist-mono)]">
          <GradientTitle
            title="Rômulo Evangelista"
            style="font-bold text-3xl"
          />
          <p className="text-lg">Full Stack Developer</p>
          <Skills />
        </div>

        <div className="flex gap-4">
          <a
            className="hover:text-sky-700 transition-all duration-300"
            href="https://www.linkedin.com/in/romulo-evangelista-ferreira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            className="hover:text-sky-700 transition-all duration-300"
            href="https://github.com/romulo-evangelista"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </header>

      <main className="flex flex-col flex-4/5 gap-16 lg:py-[4vw] font-[family-name:var(--font-geist-sans)]">
        <Resume />
        <WorkExperience />
        <AcademicFormation />
        <Courses />

        <footer>
          <GradientTitle
            title="# Rômulo Evangelista - 2025"
            style="font-[family-name:var(--font-geist-mono)]"
          />
        </footer>
      </main>
    </div>
  );
}
