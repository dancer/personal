export const SITE_URL = "https://jos.hn" as const;

export const SITE_LAST_UPDATED = "2026-03-29";

export const SITE_DEFAULT_DESCRIPTION =
	"cs student at mdx, software engineer." as const;

export function ogImageSearchParams(options: {
	title?: string;
	description?: string;
}): string {
	const p = new URLSearchParams();
	if (options.title) {
		p.set("title", options.title);
	}
	p.set("description", options.description ?? SITE_DEFAULT_DESCRIPTION);
	return p.toString();
}

export function ogImagePath(options: {
	title?: string;
	description?: string;
}): string {
	return `/api/og?${ogImageSearchParams(options)}`;
}
