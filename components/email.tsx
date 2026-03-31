"use client";

import { Check } from "lucide-react";
import { useState } from "react";

function MailIcon() {
	return (
		<svg
			width="13"
			height="13"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<rect width="20" height="16" x="2" y="4" rx="2" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
		</svg>
	);
}

export function CopyEmailButton() {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText("josh@afterima.ge");
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<button
			onClick={handleCopy}
			className="text-muted-foreground hover:text-foreground transition-colors p-1 cursor-pointer"
			aria-label={copied ? "Copied!" : "Copy email"}
			type="button"
		>
			<span
				className="block transition-all duration-300"
				style={{
					transform: copied ? "scale(1.2)" : "scale(1)",
				}}
			>
				{copied ? <Check size={13} /> : <MailIcon />}
			</span>
		</button>
	);
}
