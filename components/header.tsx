import DropdownMenu from "@/components/dropdown-menu";
import { CopyEmailButton } from "@/components/email";
import RESUME from "@/data/resume";
import Link from "next/link";

function TwitterIcon() {
	return (
		<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
		</svg>
	);
}

function BlueskyIcon() {
	return (
		<svg width="13" height="13" viewBox="0 0 600 530" fill="currentColor" aria-hidden="true">
			<path d="M135.72 44.03C202.216 93.951 273.74 195.17 300 249.49c26.262-54.316 97.782-155.54 164.28-205.46C512.26 8.009 590-19.862 590 68.825c0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.38-3.69-10.832-3.708-7.896-.017-2.936-1.193.516-3.707 7.896-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.449-163.25-81.433C20.15 217.613 10 86.535 10 68.825c0-88.687 77.742-60.816 125.72-24.795z" />
		</svg>
	);
}

function GitHubIcon() {
	return (
		<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
		</svg>
	);
}

export default function Header() {
	return (
		<div className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-border/30 pb-6 mb-12 relative">
			<div className="hidden md:block absolute -left-9 top-0">
				<DropdownMenu />
			</div>
			<div>
				<div className="flex items-center gap-2 mb-3">
					<div className="md:hidden">
						<DropdownMenu />
					</div>
					<h1 className="text-sm font-bold">{RESUME.name.toLowerCase()}</h1>
					<div className="flex items-center">
						<a
							href="https://x.com/nishimiya"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors p-1"
							aria-label="Twitter"
						>
							<TwitterIcon />
						</a>
						<a
							href="https://bsky.app/profile/someo.ne"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors p-1"
							aria-label="Bluesky"
						>
							<BlueskyIcon />
						</a>
						<CopyEmailButton />
						<a
							href="https://github.com/dancer"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors p-1"
							aria-label="GitHub"
						>
							<GitHubIcon />
						</a>
					</div>
				</div>
				<nav className="flex flex-wrap gap-2 md:gap-4 text-muted-foreground text-sm">
					<Link href="/" className="hover:text-foreground transition-colors">
						home
					</Link>
					<Link href="/blog" className="hover:text-foreground transition-colors">
						blog
					</Link>
					<Link href="/uses" className="hover:text-foreground transition-colors">
						uses
					</Link>
				</nav>
			</div>
			<div className="text-muted-foreground text-sm hidden md:block">
				N. Ireland
			</div>
		</div>
	);
}
