import RESUME from "@/data/resume";
import { SITE_URL } from "@/lib/site";

export function JsonLd() {
	const person = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: RESUME.name,
		url: SITE_URL,
		jobTitle: RESUME.experience[0]?.role,
		worksFor: RESUME.experience.map((e) => ({
			"@type": "Organization",
			name: e.company,
			url: e.company_website,
		})),
		sameAs: [
			"https://github.com/dancer",
			"https://x.com/nishimiya",
			"https://bsky.app/profile/someo.ne",
		],
	};

	const website = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "josh",
		url: SITE_URL,
		description: RESUME.bio.intro,
	};

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires a script tag
				dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
			/>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires a script tag
				dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
			/>
		</>
	);
}
