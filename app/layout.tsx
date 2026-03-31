import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { SITE_DEFAULT_DESCRIPTION, SITE_URL, ogImagePath } from "@/lib/site";

export const metadata: Metadata = {
	title: { default: "josh", template: "%s — josh" },
	description: SITE_DEFAULT_DESCRIPTION,
	metadataBase: new URL(SITE_URL),
	openGraph: {
		description: SITE_DEFAULT_DESCRIPTION,
		images: [
			{
				url: ogImagePath({ description: SITE_DEFAULT_DESCRIPTION }),
				width: 1200,
				height: 630,
				alt: SITE_DEFAULT_DESCRIPTION,
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		description: SITE_DEFAULT_DESCRIPTION,
		images: [ogImagePath({ description: SITE_DEFAULT_DESCRIPTION })],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<JsonLd />
			</head>
			<body className="antialiased font-mono">
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-background focus:text-foreground focus:px-3 focus:py-1.5 focus:rounded focus:text-sm focus:outline-none focus:ring-2 focus:ring-ring"
				>
					skip to content
				</a>
			<main
				id="main-content"
				className="min-h-screen flex items-start justify-center relative"
			>
				<div className="w-full max-w-4xl px-4 md:px-16 py-8 md:py-12">
					{children}
				</div>
			</main>
			</body>
		</html>
	);
}
