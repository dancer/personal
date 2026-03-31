import { unstable_cache } from "next/cache";
import type { Activity } from "@/components/ui/kibo-ui/contribution-graph";

const usernames = ["dancer", "keypad", "crush"] as const;
const TOTAL_SQUARES = 417;

async function fetchForUsername(
	username: string,
): Promise<Activity[]> {
	try {
		const url = new URL(
			`/v4/${username}`,
			"https://github-contributions-api.jogruber.de",
		);
		const response = await fetch(url, { signal: AbortSignal.timeout(12_000) });
		if (!response.ok) return [];
		const data = (await response.json()) as { contributions: Activity[] };
		return data.contributions;
	} catch {
		return [];
	}
}

function mergeContributions(all: Activity[][]): Activity[] {
	const byDate = new Map<string, number>();
	for (const contributions of all) {
		for (const activity of contributions) {
			byDate.set(activity.date, (byDate.get(activity.date) ?? 0) + activity.count);
		}
	}

	const maxCount = Math.max(1, ...byDate.values());

	return Array.from(byDate.entries()).map(([date, count]) => ({
		date,
		count,
		level: count === 0 ? 0 : Math.min(4, Math.ceil((count / maxCount) * 4)),
	}));
}

async function fetchContributionsUncached(): Promise<{
	contributions: Activity[];
	total: number;
}> {
	const results = await Promise.all(usernames.map(fetchForUsername));
	const merged = mergeContributions(results);
	const year = new Date().getFullYear();

	const total = merged
		.filter((a) => a.date.startsWith(String(year)))
		.reduce((sum, a) => sum + a.count, 0);

	const sorted = merged.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	return {
		contributions: sorted.slice(0, TOTAL_SQUARES),
		total,
	};
}

export const getCachedContributions = unstable_cache(
	fetchContributionsUncached,
	["github-contributions", ...usernames],
	{ revalidate: 60 * 60 * 24 },
);
