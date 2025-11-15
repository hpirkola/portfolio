"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePageTransition } from "./PageTransitions";

type TransitionLinkProps = React.PropsWithChildren<{ href: string; className?: string; replace?: boolean }>;

export function TransitionLink({ href, className, replace, children }: TransitionLinkProps) {
	const router = useRouter();
	const { animateOut } = usePageTransition();

	const onClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
			return;
		}
		e.preventDefault();
		await animateOut();
		replace ? router.replace(href) : router.push(href);
	};

	return (
		<Link href={href} className={className} onClick={onClick}>
			{children}
		</Link>
	);
}
