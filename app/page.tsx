"use client";

import { useEffect, useState } from "react";

import { SiFedora } from "react-icons/si";
import { FaMoon } from "react-icons/fa";

import ProfilePic from "./assets/profile.jpg";
import XDivider from "./components/divider";

export default function Home() {
  const [isWhiteModeJokeVisible, setIsWhiteModeJokeVisible] = useState(false);

  useEffect(() => {
    if (!isWhiteModeJokeVisible) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setIsWhiteModeJokeVisible(false);
    }, 1700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isWhiteModeJokeVisible]);

  const aiSkills = [
    "Applied Machine Learning",
    "Image Processing",
    "Tabular & NLP model development",
    "Data preprocessing and feature engineering",
    "Model evaluation and experimentation",
    "Basic LLM integration and AI feature design"
  ];

  const webSkills = [
    "TypeScript / JavaScript",
    "React + Next.js (App Router)",
    "UI development with Tailwind CSS",
    "Frontend architecture and component design",
    "REST API integration",
    "Full-stack project development"
  ];

  const others = [
    "Linux (Fedora) development environment",
    "Git and collaborative development",
    "Debugging and problem-solving"
  ];

  const languages = [
    "Thai - Native",
    "English - Intermediate",
    "Japanese - Beginner"
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <button
        type="button"
        onClick={() => setIsWhiteModeJokeVisible(true)}
        className="mt-5 mr-6 ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-red-600 text-red-300 transition hover:bg-red-600 hover:text-white md:mr-10"

      >
        <FaMoon />
      </button>
      <div className="mx-auto w-full max-w-5xl px-6 py-12 md:px-10">
        <header className="rounded-xl border border-red-700/60 bg-zinc-950/80 p-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-400">Teetouch Noppakun</p>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <div className="flex gap-3">
                <h1 className="text-3xl font-bold leading-tight md:text-5xl">Hi, I&apos;m Kun</h1>
                <h2 className="mt-auto pb-1 text-xl text-red-400">
                  kunzaka001
                </h2>
              </div>
              <p className="mt-4 max-w-prose text-sm leading-7 text-zinc-300 sm:text-base break-words">
                An AI-focused developer focused on building practical machine learning applications. I enjoy working with data and experimenting with models, while using my web development background to turn ideas into real products.

                Outside of tech, I’m inspired by Japanese culture—especially vtuber, music, and game. Hope to see you around!
              </p>
            </div>
            <div className="h-32 w-32 shrink-0 self-center overflow-hidden rounded-xl border-red-700/60 md:h-40 md:w-40">
              <img
                src={ProfilePic.src}
                alt="Portrait of Kun"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-6 h-1 w-40 bg-red-600" />
        </header>

        <div className="m-16">
          <XDivider />
        </div>

        <main className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-4 text-xl font-semibold text-red-400">Data-sci / Machine Learning</h2>
            <ul className="space-y-2 text-zinc-300">
              {aiSkills.map((skill) => (
                <li key={skill} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-4 text-xl font-semibold text-red-400">Web Development</h2>
            <ul className="space-y-2 text-zinc-300">
              {webSkills.map((skill) => (
                <li key={skill} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-4 text-xl font-semibold text-red-400">Others</h2>
            <ul className="space-y-2 text-zinc-300">
              {others.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  <span className="inline-flex items-center gap-2">
                    {item}
                    {item === "Linux (Fedora) development environment" && (
                      <SiFedora className="text-red-400" size={16} />
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-4 text-xl font-semibold text-red-400">Languages</h2>
            <ul className="space-y-2 text-zinc-300">
              {languages.map((lang) => (
                <li key={lang} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  <span>{lang}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
      {isWhiteModeJokeVisible && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white px-6 text-center">
          <p className="text-2xl font-bold text-gray-500 sm:text-3xl">Flashed!</p>
          <p className="text-2xl font-bold text-gray-500 sm:text-3xl">*wink*</p>
        </div>
      )}
    </div>
  );
}
