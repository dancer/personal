export type BlogPostMeta = {
	slug: string;
	title: string;
	date: string;
	description: string;
	readTime: string;
	draft?: boolean;
};

export const BLOG_POSTS: BlogPostMeta[] = [
	{
		slug: "future",
		title: "build. ship. post.",
		date: "2026-03-31",
		description:
			"on making expensive mistakes, phoenix arizona, and the three words that will get you any job.",
		readTime: "8 min read",
	},
	{
		slug: "vercel",
		title: "how i accidentally joined vercel",
		date: "2025-09-22",
		description:
			"from a random hello at v0 summit to building the future of ai development tools.",
		readTime: "12 min read",
	},
];

export function getPublishedPosts(): BlogPostMeta[] {
	return BLOG_POSTS.filter((p) => !p.draft).sort((a, b) =>
		b.date.localeCompare(a.date),
	);
}
