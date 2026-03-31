import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/header";
import { getPublishedPosts } from "@/data/blog";
import { SITE_DEFAULT_DESCRIPTION, ogImagePath } from "@/lib/site";

export const metadata: Metadata = {
	title: "blog",
	description: SITE_DEFAULT_DESCRIPTION,
	openGraph: {
		images: [{ url: ogImagePath({ title: "blog" }), width: 1200, height: 630 }],
	},
};

export default function Blog() {
	const posts = getPublishedPosts();

	return (
		<div className="font-mono text-sm leading-relaxed max-w-6xl">
			<Header />

			<div className="space-y-8">
				{posts.map((post) => (
					<article
						key={post.slug}
						className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16"
					>
						<div className="col-span-1 md:col-span-3 text-muted-foreground text-sm font-medium mb-2 md:mb-0">
							<div>
							{(() => {
								const [y, m, d] = post.date.split("-").map(Number);
								return new Date(y, m - 1, d).toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
									year: "numeric",
								});
							})()}
							</div>
							<div className="mt-1">{post.readTime}</div>
						</div>
						<div className="col-span-1 md:col-span-9">
							<h2 className="text-foreground font-medium mb-2">
								<Link
									href={`/blog/${post.slug}`}
									className="hover:underline underline-offset-4"
								>
									{post.title}
								</Link>
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								{post.description}
							</p>
						</div>
					</article>
				))}
			</div>
		</div>
	);
}
