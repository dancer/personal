import Link from "next/link";
import Header from "@/components/header";

export default function NotFound() {
	return (
		<div className="font-mono text-sm leading-relaxed max-w-6xl">
			<Header />
			<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16">
				<div className="col-span-1 md:col-span-3 text-muted-foreground text-sm font-medium">
					404
				</div>
				<div className="col-span-1 md:col-span-9">
					<p className="text-muted-foreground mb-4">
						nothing here.{" "}
						<Link
							href="/"
							className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
						>
							go home
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
