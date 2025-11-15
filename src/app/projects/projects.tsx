import ProjectCarousel, { Project } from "@/components/ProjectCarousel";

const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A portfolio built with Next.js, GSAP and Tailwind.",
    techStack: ["Next.js", "TypeScript", "GSAP", "Tailwind"],
    imageUrl: "/portfolio.png",
    link: "https://your-portfolio-url.com",
  },
  {
    id: "2",
    title: "IRC-server",
    description: "A custom Internet Relay Chat (IRC) server built in C++17.",
    techStack: ["C++"],
    imageUrl: "/irc.png",
    link: "https://github.com/hpirkola/ft_irc",
  },
  {
	id: "3",
	title: "Minishell",
	description: "A custom Unix shell implemented in C, replicating key features of Bash.",
	techStack: ["C", "Bash", "Pipes"],
	imageUrl: "/minishell.png",
	link: "https://github.com/hpirkola/minishell",
  },
  {
	id: "4",
	title: "Cub3d",
	description: "A 3D graphical game inspired by Wolfenstein 3D.",
	techStack: ["C", "MLX42", "Raycasting", "Graphics"],
	imageUrl: "/cub3d.png",
	link: "https://github.com/hpirkola/cub3D"
  },
  {
	id: "5",
	title: "FdF",
	description: "A 3D wireframe renderer.",
	techStack: ["C", "MLX42", "Graphics"],
	imageUrl: "/fdf.png",
	link: "https://github.com/hpirkola/FdF"
  },
  {
	id: "6",
	title: "Philosophers",
	description: "Multithread project of the dining philosophers.",
	techStack: ["C", "Threads"],
	imageUrl: "/philo.png",
	link: "https://github.com/hpirkola/philo"
  }
]

export default function ProjectsSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <ProjectCarousel projects={projects} />
    </div>
  );
}