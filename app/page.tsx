import Link from "next/link";
import { Contributions } from "@/components/contributions";
import Header from "@/components/header";
import RESUME from "@/data/resume";
import { getCachedContributions } from "@/lib/github-contributions";

export default async function Home() {
	const { contributions } = await getCachedContributions();

	return (
		<div className="font-mono text-sm leading-relaxed max-w-6xl">
			<Header />

			<div className="space-y-12">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16">
					<div className="col-span-1 md:col-span-3 text-muted-foreground text-sm font-medium mb-2 md:mb-0">
						About
					</div>
					<div className="col-span-1 md:col-span-9">
						<p className="text-muted-foreground">{RESUME.bio.about}</p>
					</div>
				</div>

				{contributions.length > 0 && (
					<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16">
						<div className="col-span-1 md:col-span-3 text-muted-foreground text-sm font-medium mb-2 md:mb-0">
							Recent GitHub Activity
						</div>
						<div className="col-span-1 md:col-span-9">
							<Contributions data={contributions} />
						</div>
					</div>
				)}

				<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16">
					<div className="col-span-1 md:col-span-3 text-muted-foreground text-sm font-medium mb-2 md:mb-0">
						Experience
					</div>
					<div className="col-span-1 md:col-span-9">
						<div className="space-y-8">
							{RESUME.experience.map((experience) => (
								<div key={experience.company}>
									<div className="mb-3">
										<Link
											href={experience.company_website}
											target="_blank"
											className="text-foreground font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
										>
											{experience.company}
										</Link>
										<span className="text-muted-foreground ml-2">
											{experience.role}
										</span>
									</div>
									<div className="text-muted-foreground leading-relaxed mb-3">
										{experience.description}
									</div>
									<div className="text-muted-foreground text-xs">
										{experience.display_range}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16">
					<div className="col-span-1 md:col-span-3 text-muted-foreground text-sm font-medium mb-2 md:mb-0">
						Education
					</div>
					<div className="col-span-1 md:col-span-9">
						<div className="flex justify-between">
							<div>
								<div className="mb-2">
									<span className="text-foreground font-medium">
										{RESUME.education.institution}
									</span>
								</div>
								<div className="text-muted-foreground">
									{RESUME.education.degree} in {RESUME.education.major}
								</div>
							</div>
							<div className="text-muted-foreground">
								{RESUME.education.display_range}
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}
