"use client";
import { useState } from "react";
import { TbArrowBigRightFilled, TbArrowBigLeftFilled } from "react-icons/tb";

type mode = 1 | 2 | 3;

export default function ProjectsContent() {
	const [mode, setMode] = useState(1);
	const handleModePrev = (oldMode) => {
		if (oldMode > 1) {
			setMode(oldMode - 1);
		} else {
			setMode(3);
		}
	};
	const handleModeNext = (oldMode) => {
		if (oldMode < 3) {
			setMode(oldMode + 1);
		} else {
			setMode(1);
		}
	};
	return <>
	<div className="flex h-screen justify-center">
		<button onClick={() => handleModePrev(mode)} className="y-100 text-6xl mr-10">
			<TbArrowBigLeftFilled className="text-white hover:text-[#30306B]"/>
		</button>
		<div className="flex flex-col items-center w-120 h-160 bg-transparent mt-10 rounded-2xl">
			<div className="flex justify-center items-center w-100 h-60 bg-white m-10 rounded-2xl">
				{mode === 1 && (<h1 className="text-[#30306B] text-2xl">IMAGE 1</h1>)}
				{mode === 2 && (<h1 className="text-[#30306B] text-2xl">IMAGE 2</h1>)}
				{mode === 3 && (<h1 className="text-[#30306B] text-2xl">IMAGE 3</h1>)}
			</div>
			<div className="flex flex-col justify-between items-center text-[#30306B]">
				{mode === 1 && (
					<div className="flex flex-col justify-between items-center">
						<h1 className="text-2xl">IRC server</h1>
						<p className="text-justify m-5">A custom Internet Relay Chat (IRC) server built in C++17. It uses epoll for efficient event-driven networking and supports multi-client communication, channels, private messaging, operator features, and file transfers. The project emphasizes low-level network programming, protocol implementation, and scalable server design.</p>
					</div>)}
				{mode === 2 && (
					<div className="flex flex-col justify-between items-center">
						<h1 className="text-2xl">Basic 3D game engine</h1>
						<p className="text-justify m-5">A 3D graphical game inspired by Wolfenstein 3D, developed in C using the MLX42 graphics library. The project implements a raycasting engine to render a first-person view inside a maze, with support for textures, collision detection, and smooth player movement. It focuses on computer graphics, math for 3D rendering, and low-level event handling for an interactive experience.</p>
					</div>
				)}
				{mode === 3 && (
					<div className="flex flex-col justify-between items-center">
						<h1 className="text-2xl">UNIX shell</h1>
						<p className="text-justify m-5">A custom Unix shell implemented in C, replicating key features of Bash. It supports command parsing, pipes, redirections, environment variables, and built-in commands, while handling signals and errors gracefully. The project emphasizes process management, system calls, and a deeper understanding of how shells interact with the operating system.</p>
					</div>
				)}
				{mode === 1 && (
					<div className="mt-6 mb-5">
						<a href="https://github.com/hpirkola/ft_irc" target="_blank">
							<button className="bg-white hover:bg-[#7287fd] p-2 rounded-2xl font-bold">View Project</button>
						</a>
					</div>
				)}
				{mode === 2 && (
					<div className="mb-5">
						<a href="https://github.com/hpirkola/cub3d" target="_blank">
							<button className="bg-white hover:bg-[#7287fd] p-2 rounded-2xl font-bold">View Project</button>
						</a>
					</div>)}
				{mode === 3 && (
					<div className="mb-5">
						<a href="https://github.com/hpirkola/minishell" target="_blank">
							<button className="bg-white hover:bg-[#7287fd] p-2 rounded-2xl font-bold">View Project</button>
						</a>
					</div>
				)}
			</div>
		</div>
		<button onClick={() => handleModeNext(mode)} className="y-100 text-6xl ml-10">
			<TbArrowBigRightFilled className="text-white hover:text-[#30306B]" />
		</button>
	</div>
	</>
}