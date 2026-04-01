import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/header";
import { ogImagePath } from "@/lib/site";

const title = "build. ship. post.";
const description =
	"on making expensive mistakes, phoenix arizona, and the three words that will get you any job.";

export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
		images: [{ url: ogImagePath({ title, description }), width: 1200, height: 630, alt: title }],
		locale: "en_US",
		type: "article",
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: [ogImagePath({ title, description })],
	},
};

export default function BuildShipPost() {
	return (
		<div className="font-mono text-sm leading-relaxed max-w-6xl">
			<Header />

			<div className="space-y-12">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16">
					<div className="col-span-1 md:col-span-3 text-muted-foreground text-sm font-medium mb-2 md:mb-0">
						<Link href="/blog" className="hover:text-foreground transition-colors">
							← back to blog
						</Link>
					</div>
					<div className="col-span-1 md:col-span-9">
						<div className="mb-8">
							<h1 className="text-foreground font-medium text-lg mb-2">
								build. ship. post.
							</h1>
							<div className="text-muted-foreground text-xs">
								Mar 31, 2026 · 8 min read
							</div>
						</div>

						<div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
							<p>
								i made a mistake at vercel. a bad one. forgot to set limits and
								racked up a cost that had a lot of zeroes in it. the kind of
								number that makes your stomach drop the moment you see it.
							</p>

							<p>
								i sat there waiting for the fallout. prepared for the worst.
								because that's what you do when you're 21 and you just cost the
								company a very uncomfortable amount of money. you brace.
							</p>

							<p>it never came.</p>

							<p>
								instead,{" "}
								<Link
									href="https://x.com/cramforce"
									target="_blank"
									rel="noopener noreferrer"
									className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
								>
									malte
								</Link>{" "}
								took time out of his day to help me figure it out and fix it.
								others showed up too. not to point fingers. not to document the
								incident for some performance review. they just... helped.
								explained. walked me through it. made sure i understood what
								happened and why, and then kept pushing me to be better. no
								blame. no drama. just the team.
							</p>

							<p>
								i was so scared i was going to get fired. that's the honest
								truth. i lay awake thinking about it. running through every
								outcome. and the one where i get let go felt the most likely
								because that's just how my brain works when i'm spiralling.
							</p>

							<p>
								but here's what i know now. don't be afraid of making mistakes.
								actually, you have to make them. you can't grow without breaking
								something. and if the place you work punishes you for that,
								it's not a job worth keeping anyway.
							</p>

							<p>
								vercel isn't my boss. it isn't a business partner i have to
								impress. it's my family. and that changes everything about how
								you show up.
							</p>

							<p>
								i think about that moment a lot. no careers page in the world
								tells you that.
							</p>

							<p>life moved fast after that.</p>

							<p>
								fast forward a few months. phoenix, arizona. vercel offsite.
							</p>

							<p>
								some massive resort. the kind of place where you walk outside and
								think "wait, is this real." the whole team is there,{" "}
								<Link href="https://x.com/nicoalbanese10" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">nico</Link>,{" "}
								<Link href="https://x.com/gr2m" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">gregor</Link>,{" "}
								<Link href="https://x.com/aayushkapoor_" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">aayush</Link>,{" "}
								<Link href="https://x.com/felixarntz" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">felix</Link>, and we're not in meetings all day. we're
								just hacking. sitting together outside in the sun, laptops out,
								digging into the realtime api spec, bouncing ideas, breaking
								things, laughing about it. swimming between sessions. eating
								some genuinely sick food. and then at 1am, finding ourselves at{" "}
								<Link
									href="https://x.com/elsigh"
									target="_blank"
									rel="noopener noreferrer"
									className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
								>
									lindsey's
								</Link>{" "}
								parties. (no one tell{" "}
								<Link
									href="https://x.com/rauchg"
									target="_blank"
									rel="noopener noreferrer"
									className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
								>
									@g
								</Link>{" "}
								about the parties.)
							</p>

							<p>
								honestly? it was the most fun i've had in a while. not because
								of the resort. because of the people.
							</p>

							<p>
								there's something different about building irl with your team.
								slack is fine. video calls work. but sitting in the same room,
								watching someone's face light up when a thing clicks, that hits
								different. we were just a bunch of people who care about the same
								problems, locked in, having the time of our lives at what was
								technically a work trip.
							</p>

							<p>
								arizona is also where i met most of the vercel team properly.
								not on a call, not through a slack message. in person. and
								something shifts when that happens. you stop seeing usernames and
								start seeing people. people who are genuinely insane at what
								they do. the kind that make you feel behind just by watching
								them work. i came back a different engineer. not because of one
								conversation. because of all of them.
							</p>

							<p>
								i got to spend time with{" "}
								<Link
									href="https://x.com/javivelasco"
									target="_blank"
									rel="noopener noreferrer"
									className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
								>
									javi
								</Link>
								. we built the{" "}
								<Link
									href="https://oss-vibe-coding-platform.vercel.app/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
								>
									oss vibe coding platform
								</Link>{" "}
								together and now i get to keep building with him. he's amazing.
								i genuinely can't wait to see what we make next.
							</p>

							<p>
								then there's{" "}
								<Link
									href="https://x.com/timer150"
									target="_blank"
									rel="noopener noreferrer"
									className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
								>
									timer
								</Link>
								. one of the greatest engineers at vercel. also he's old.
								(respect. please don't fire me.)
							</p>

							<p>
								i've been pestering him to build something together and i'm not
								going to stop until it happens. timer, consider this public
								notice.
							</p>

							<p>
								and then there's{" "}
								<Link
									href="https://bsky.app/profile/danielroe.dev"
									target="_blank"
									rel="noopener noreferrer"
									className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
								>
									daniel roe
								</Link>
								, who spent the whole trip just helping me. telling me things i
								wish i'd known before. genuinely one of the best people i've met
								in this industry. he's been helping me get deeper into open
								source, which is something i've always wanted to do more of.
								i'm excited to see where that goes. oh, and he got me on
								bluesky too, so if you're on there{" "}
								<Link
									href="https://bsky.app/profile/someo.ne"
									target="_blank"
									rel="noopener noreferrer"
									className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
								>
									come find me
								</Link>
								. i'll be posting there too.
							</p>

							<p>
								and it made me think about what i actually want. the answer is
								simple. grow vercel. make it better for every developer who
								opens a new project and trusts it. not for a metric. not for a
								promo. because it actually matters. that's it.
							</p>

							<p>
								if you told me five years ago this is where i'd be, i would've
								laughed. i genuinely never thought i'd get a job. not this kind.
								not at a company like this. not with a team like this. i was just
								some kid building things in his room hoping someone would
								notice.
							</p>

							<p>and somehow, someone did.</p>

							<p>
								which brings me to the dms. i get them constantly. "how do i get
								a job at vercel?" "how do i break into a company like this?"
								"what's the secret?"
							</p>

							<p>there's no secret. three words:</p>

							<p>
								<strong className="text-foreground">build. ship. post.</strong>
							</p>

							<p>
								build something real. doesn't have to be big. doesn't have to be
								original. just has to work and show you can think.
							</p>

							<p>
								ship it. don't sit on it waiting for it to be perfect. perfect
								ships never leave the harbour. put it out there.
							</p>

							<p>
								post about it. tell people what you made. show your thinking.
								share what you learnt. the internet is small in the best way,
								the right person will see it.
							</p>

							<p>
								if you read my{" "}
								<Link
									href="/blog/vercel"
									className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
								>
									other post
								</Link>
								, you already know i shot my shot and it worked. i walked up to
								guillermo rauch at a summit i wasn't supposed to be at and just
								talked to him like a person. that conversation only happened
								because i had things to say. and i only had things to say because
								i'd been building, shipping, and posting.
							</p>

							<p>
								so if you're out there waiting for the right moment, the right
								project, the right intro, stop. just make something. put it out.
								tag me{" "}
								<Link
									href="https://x.com/nishimiya"
									target="_blank"
									rel="noopener noreferrer"
									className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
								>
									@nishimiya
								</Link>{" "}
								when you do. i read everything.
							</p>

							<p>
								and if you ever need help, career advice, feedback on something
								you're building, or you just want to talk, i'm a ping away.
								seriously. i mean that.
							</p>

							<p>
								but if your goal is to join vercel, know that it comes at a cost.
								that cost is build, ship, post. no shortcuts. no cold applications
								into a void. just proof of work. show me what you've made and
								i'll show up for you.
							</p>

							<p>
								i've made mistakes here. expensive ones. and i've also had some
								of the best moments of my life here. both things are true and
								neither cancels the other out.
							</p>

							<p>that's what a good job feels like.</p>

							<p>
								oh, and some big news. i graduate next month. which means no one
								can call me an intern anymore. not that it matters much, because
								vercel already took a chance on me full time before the degree
								was done. but still. the paper hits different.
							</p>

							<p>
								if only the higher ups knew the kind of firepower they hired.
								(they already do.)
							</p>

							<p>also. face reveal might be coming soon. something's happening. 👀</p>

							<p className="text-xs text-muted-foreground/70 italic pt-4">
								phoenix was special. thank you my fellow vercelians.
							</p>

							<p className="text-xs text-muted-foreground/50 pt-2">
								to future josh. whatever you're worried about right now, you've
								been here before. you figured it out then. you'll figure it out
								again. keep building.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
