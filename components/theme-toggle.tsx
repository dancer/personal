"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const [dark, setDark] = useState(true);

	useEffect(() => {
		const saved = localStorage.getItem("theme");
		const isDark = saved !== "light";
		setDark(isDark);
		document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
	}, []);

	const toggle = () => {
		const next = !dark;
		setDark(next);
		const value = next ? "dark" : "light";
		try { localStorage.setItem("theme", value); } catch {}
		const apply = () => document.documentElement.setAttribute("data-theme", value);
		if (document.startViewTransition) {
			document.startViewTransition(apply);
		} else {
			apply();
		}
	};

	return (
		<button
			onClick={toggle}
			type="button"
			aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
			className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
		>
			{dark ? <Sun size={14} /> : <Moon size={14} />}
		</button>
	);
}
