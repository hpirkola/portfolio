import Link from 'next/link'

export default function Navigation() {
	return <>
		<div className="flex justify-center text-1xl z-10 font-extralight text-[#30306B]"> 
          <Link href="/" className="m-5 underline-grow">Home</Link>
          <Link href="/about" className="m-5 underline-grow">About</Link>
          <Link href="/projects" className="m-5 underline-grow">Projects</Link>
          <Link href="/contact" className="m-5 underline-grow">Contact</Link>
        </div>
	</>
}