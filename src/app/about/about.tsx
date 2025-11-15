"use client";
import { useState } from "react"
import Image from "next/image";

type Mode = "about" | "skills";

export default function AboutContent() {
	const [mode, setMode] = useState<Mode>("about");
	const handleModeChange = (newMode: Mode) => {
		setMode(newMode);
	};
	return <>
	<div className="flex flex-row items-start m-20 py-5 justify-center translate-y-2">
		<div className="w-120 text-[#30306B] py-20 mr-10 text-justify">
			<div className="flex mb-5">
				<button onClick={() => handleModeChange("about")} className={`text-4xl mr-4 underline-grow ${mode === "about" ? "font-bold" : ""}`} aria-pressed={mode == "about"}>About me</button>
				<h1 className="text-4xl"> / </h1>
				<button onClick={() => handleModeChange("skills")} className={`text-4xl ml-4 underline-grow ${mode === "skills" ? "font-bold" : ""}`} aria-pressed={mode == "skills"}>Skills</button>
			</div>
			<div className="min-h-[14rem]">
				{mode === "about" && (
				<>
					<p className="mb-3">Hi, my name is Helmi Pirkola and I&apos;m a programmer based in Helsinki, Finland. I&apos;m currently studying at Hive Helsinki, where my focus is on C and C++ programming. Outside of my studies, I explore other languages and frameworks through personal projects (like this portfolio).</p>
					<p className="mb-3">Before transitioning into tech, I built a career as a circus artist and teacher. That creative and playful side of me will follow me where ever I go next.</p>
					<p className="mb-3">I love problem-solving, figuring out how things work, and building projects from the ground up. I&apos;m always curious, always learning, and excited to grow with new technologies. I&apos;m currently looking for my first job on this new career path.</p>
					<p>Thanks for stopping by! &lt;3</p>
				</>
				)}
				{mode === "skills" && (
					<div className="flex flex-col">
						<h2 className="font-bold mt-3">Languages</h2>
						<p className="font-light">C, C++, Python, JavaScript, TypeScript</p>
						<h2 className="font-bold mt-3">Web Technologies</h2>
						<p className="font-light">HTML, Tailwind CSS</p>
						<h2 className="font-bold mt-3">Frameworks & Libraries</h2>
						<p className="font-light">React, Next.js</p>
						<h2 className="font-bold mt-3">Build Tools</h2>
						<p className="font-light">CMake, Make</p>
						<h2 className="font-bold mt-3">Version Control & Platforms</h2>
						<p className="font-light">GitHub</p>
						<h2 className="font-bold mt-3">Other</h2>
						<p className="font-light"> Juggling, making world&apos;s greatest avocado pasta</p>
					</div>
				)}
			</div>
		</div>
		<Image
			src="/me.jpeg"
			alt="Portrait of me"
			width={400}
			height={600}
			className="rounded-4xl shadow-md ml-10"
		/>
	</div>
	</>
}