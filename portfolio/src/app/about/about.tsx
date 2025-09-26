import Image from "next/image";

export default function AboutContent() {
	return <>
	<div className="flex flex-row items-center m-20 py-5 justify-center translate-y-2">
		<div className="w-120 text-[#30306B] mr-10">
			<h1 className="font-bold text-4xl mb-5">About me</h1>
			<p className="mb-3">Hi, I’m Helmi Pirkola and I’m a programmer based in Helsinki, Finland. I’m currently studying at Hive Helsinki, where my focus is on C and C++ programming. Outside of my studies, I explore other languages and frameworks through personal projects (like this portfolio).</p>
			<p className="mb-3">Before transitioning into tech, I built a career as a circus artist and teacher. That creative and playful side of me will follow me where ever I go next.</p>
			<p className="mb-3">I love problem-solving, figuring out how things work, and building projects from the ground up. I’m always curious, always learning, and excited to grow with new technologies. I’m currently looking for my first job on this new career path.</p>
			<p>Thanks for stopping by! &lt;3</p>
		</div>
		<Image
			src="/me.jpeg"
			alt="Portrait of me"
			width={400}
			height={600}
			className="rounded-2xl shadow-md ml-10"
		/>
	</div>
	</>
}