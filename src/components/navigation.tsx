import { TransitionLink } from './TransitionLink'

export default function Navigation() {
	return <>
		<div className="flex justify-center text-1xl z-10 font-extralight text-[#30306B]"> 
      <TransitionLink href="/" className="m-5 underline-grow">Home</TransitionLink>
      <TransitionLink href="/about" className="m-5 underline-grow">About</TransitionLink>
      <TransitionLink href="/projects" className="m-5 underline-grow">Projects</TransitionLink>
      <TransitionLink href="/contact" className="m-5 underline-grow">Contact</TransitionLink>
    </div>
	</>
}