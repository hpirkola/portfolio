"use client";

import React, { createContext, useContext, useLayoutEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

type TransitionContext = { animateOut: () => Promise<void> };
const Context = createContext<TransitionContext>({ animateOut: async () => {} });
export const usePageTransition = () => useContext(Context);

type Props = { children: React.ReactNode };

export default function PageTransition({ children }: Props) {
	const pathname = usePathname();
	const ref = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const el = ref.current;
		if (!el) {
			return;
		}
		const context = gsap.context(() => {
			gsap.fromTo(
				el,
				{ opacity: 0, filter: "blur(8px)" },
				{ opacity: 1, filter: "blur(0px)", duration: 1.0, ease: "power2.out" }
			);
		}, ref);
		return () => context.revert();
	}, [pathname]);

	const api = useMemo<TransitionContext>(() => ({
		animateOut: () => new Promise<void>((resolve) => {
			const el = ref.current;
			if (!el) {
				return resolve();
			}
			gsap.to(el, {
				opacity: 0,
				filter: "blur(8px)",
				duration: 0.7,
				ease: "power2.inOut",
				onComplete: () => resolve(),
			});
		}),
	}), []);

	return (
		<Context.Provider value={api}>
		<div ref={ref} className="relative will-change-[filter,opacity]">
			{children}
		</div>
		</Context.Provider>
	);
}

