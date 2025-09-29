import { MdArrowOutward } from "react-icons/md";

export default function ContactContent() {
	return <>
	<div className="flex flex-col h-screen py-30 items-center">
		<div className="w-screen text-left ml-50">
			<h1 className="font-bold text-4xl mb-5 text-[#30306B]">Contact</h1>
		</div>
		<hr className="h-px w-350 my-2 bg-[#30306B] border-0" />
		<div className="flex justify-between w-screen items-start my-5 text-[#30306B]">
			<div className="flex items-center text-2xl ml-20">
				<h2 className="font-bold mr-5 ml-5">Mail</h2>
				<MdArrowOutward />
				<a href="mailto:mail@mail.com" className="italic font-extralight">
					<span className="underline-grow ml-4">pirkolahelmi@gmail.com</span>
				</a>
			</div>
			<div className="flex items-start mr-50">
				<h2 className="text-2xl font-bold mr-5">Other</h2>
				<div className="flex flex-col text-2xl">
					<div className="flex flex-row">
						<MdArrowOutward className="relative top-1"/>
						<a href="https://github.com/hpirkola" target="_blank" className="italic font-extralight">
							<span className="underline-grow ml-4">Github</span>
						</a>
					</div>
					<div className="flex flex-row my-5">
						<MdArrowOutward className="relative top-1"/>
						<a href="www.linkedin.com/in/helmipirkola" target="_blank" className="italic font-extralight">
							<span className="underline-grow ml-4">LinkedIn</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	</>
}

/*
-linkedin
-email
-github
*/