import "@/styles/globals.css";

export default function Background() {
	return <>
	<div className="fixed inset-0 -z-10 pointer-events-none">
		<div className="h-screen gradient-anim z-0"></div>
	</div>
	</>
}