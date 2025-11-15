"use client";
import Image from "next/image";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack?: string[];
  imageUrl?: string;
  link?: string;
};

type ProjectCarouselProps = {
  projects: Project[];
};

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const positionsRef = useRef<number[]>([]); // x offsets per card

  const totalProjects = projects.length;

  useLayoutEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const computePositions = () => {
      if (!containerRef.current || !trackRef.current) {
        return;
      }

      const container = containerRef.current;
      const track = trackRef.current;

      const prevX = (gsap.getProperty(track, "x") as number) || 0;

      gsap.set(track, { x: 0 });

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.width / 2;

      const cards = Array.from(track.querySelectorAll<HTMLDivElement>("[data-index]"));

      positionsRef.current = cards.map((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left - containerRect.left + cardRect.width / 2;
        const x = containerCenter - cardCenter;
        return x;
      });

      gsap.set(track, { x: prevX });
    };

    computePositions();

    window.addEventListener("resize", computePositions);
    return () => window.removeEventListener("resize", computePositions);
  }, [projects.length]);

  useEffect(() => {
    if (!trackRef.current) return;

    const positions = positionsRef.current;
    const targetX = positions[activeIndex] ?? 0;

    gsap.to(trackRef.current, {
      x: targetX,
      duration: 0.9,
      ease: "power4.inOut",
    });
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, totalProjects - 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const isAtStart = activeIndex === 0;
  const isAtEnd = activeIndex === totalProjects - 1;

  if (!projects.length) return null;

  return (
    <section className="w-full">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-[#30306B] tracking-tight">
          Projects
        </h2>
        <p className="mt-1 text-sm text-[#30306B]">
          Some things I&apos;ve worked on.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative overflow-x-hidden overflow-y-visible py-4">
        <div
          ref={trackRef}
          className="flex gap-4 px-4 will-change-transform">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <article
                key={project.id}
                data-index={index}
                className={`
                  group rounded-2xl p-5 bg-[#48487e]
                  transform transition-all duration-500 ease-out
                  ${
                    isActive
                      ? "scale-105 shadow-sm"
                      : "scale-95 opacity-70 hover:scale-100 hover:opacity-100"
                  }
                  lg:flex-[0_0_32%]   /* large screens: ~3 visible */
                `}
                >
                {project.imageUrl && (
                  <div className="mb-3 overflow-hidden rounded-xl">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={100}
                      height={40}
                      className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <h3 className="mb-1 text-white text-lg font-semibold">
                  {project.title}
                </h3>

                <p className="mb-3 text-white text-sm">
                  {project.description}
                </p>

                {project.techStack && project.techStack.length > 0 && (
                  <ul className="mb-3 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <li key={tech} className="rounded-full bg-[#30306B] px-2 py-0.5 text-[11px] uppercase tracking-wide text-neutral-300">
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-medium text-white hover:text-[#30306B]"
                  >
                    View project
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {Array.from({ length: totalProjects }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === activeIndex
                ? "w-6 bg-[#30306B]"
                : "w-2 bg-[#30306B]/40 hover:bg-[#30306B]/70"
            }`}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          type="button"
          onClick={handlePrev}
          disabled={isAtStart}
          className={`rounded-xl border border-[#30306B] px-4 py-2 text-sm text-[#30306B] transition
            ${
              isAtStart
                ? "cursor-not-allowed opacity-40"
                : "hover:bg-[#30306B] hover:text-white"
            }`}
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={isAtEnd}
          className={`rounded-xl border border-[#30306B] px-4 py-2 text-sm text-[#30306B] transition
            ${
              isAtEnd
                ? "cursor-not-allowed opacity-40"
                : "hover:bg-[#30306B] hover:text-white"
            }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ProjectCarousel;
