const RESUME = {
	name: "Josh",
	avatar_path: "/me.jpg",
	bio: {
		intro: "cs student at mdx, software engineer.",
		about:
			"Passionate about creating meaningful software and exploring new technologies. I love building products that solve real problems and make people's lives better.",
	},
	skills: ["Go", "Rust", "TypeScript", "Java", "Python"],
	interests: ["Open source", "Gaming", "Pokemon", "Inazuma Eleven"],
	experience: [
		{
			icon: (
				<svg
					aria-label="Vercel logomark"
					height="20"
					role="img"
					viewBox="0 0 74 64"
					style={{ width: "auto", overflow: "visible" }}
				>
					<path
						d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
						fill="#ffffff"
					/>
				</svg>
			),
			company: "Vercel",
			role: "Software Engineer",
			description:
				"Building next-generation web applications and AI developer tools. Currently helping build the AI SDK and focused on developer experience.",
			display_range: "Jun 2025 to Present — London / SF",
			company_website: "https://vercel.com",
		},
		{
			icon: (
				<div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground text-xs font-mono">
					W
				</div>
			),
			company: "Warp",
			role: "AI/ML Engineer",
			description:
				"Leveraging AI to intelligently process PDFs, receipts, and financial documents. Building machine learning systems that extract, understand, and automate complex document workflows.",
			display_range: "Oct 2024 to Mar 2025 — Remote",
			company_website: "https://joinwarp.com",
		},
	],
	education: {
		institution: "MDX University",
		degree: "Bachelor of Science",
		major: "Computer Science",
		display_range: "2024–2026",
		location: "London, UK",
	},
};

export default RESUME;
