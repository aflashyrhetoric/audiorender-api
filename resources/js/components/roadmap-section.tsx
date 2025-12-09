import React from "react";

type Props = {
	className?: string;
};

type RoadmapItem = {
	intendedReleaseVersion: string;
	feature: string;
	description: string;
	content?: React.ReactNode;
	completed?: boolean;
};

const Roadmap: React.FC<Props> = ({ className = "" }: Props) => {
	const roadmapItems: RoadmapItem[] = [
		{
			intendedReleaseVersion: "1.4",
			feature: "Word-level caption generation",
			description:
				"Captions are currently timestamp-based. Using advanced VAD (Voice Activity Detection), we can achieve true word-level captions.",
		},
		{
			intendedReleaseVersion: "1.5",
			feature: "A suite of premade templates",
			description:
				"While we already have 3 simple Audiogram Templates, a wider selection for common use-cases will make video creation even easier.",
		},
		{
			intendedReleaseVersion: "1.6",
			feature: "Alternate waveform styles",
			description:
				"Add circular waveforms, oscilloscope-styled waveforms, and more.",
		},
		{
			intendedReleaseVersion: "1.7",
			feature: "Transparent background support",
			description:
				"Transparent backgrounds allow for AudioRender to be used as a layer in more complex video compositions.",
		},
		{
			intendedReleaseVersion: "1.8",
			feature: "Free tier value adjustment",
			description:
				"As we add new features, we will adjust the free tier to include access to more features.",
		},
		{
			intendedReleaseVersion: "1.9",
			feature: "Custom font support",
			description:
				"Provide your own fonts to use in templates for greater brand consistency.",
		},
		{
			intendedReleaseVersion: "2.0",
			feature: "Extended template editor",
			description:
				"Access to stickers, photos, shapes, and more within the template editor.",
		},
        {
            intendedReleaseVersion: "2.1",
            feature: "Windows build",
            description:
                "A build to support users on Windows machines. (Currently we only support M-Series Macs)",
        },
        {
            intendedReleaseVersion: "2.2",
            feature: "Performance pass",
            description:
                "Deep performance optimizations to make video rendering even faster.",
        },
	];
	return (
		<div className={`grid12 gap-4 lg:gap-8`}>
			{roadmapItems.map((section, index) => (
				<div
					key={`roadmap-item-${section.feature}`}
					className={`cs-12 md:cs-6 lg:cs-4 border border-neutral-300/30 hover:border-green-500 p-5`}
				>
					<span
						className={`ific font-inter text-xl lg:text-2xl tracking-tight font-bold`}
					>
						{section.feature}
					</span>
					<div className={`font-inter rounded py-4 text-neutral-200`}>
						<p
							className={`mb-5 inline-block rounded bg-neutral-200 px-2 py-1 text-base font-bold tracking-tight text-neutral-600`}
						>
							v{section.intendedReleaseVersion}
						</p>
						<p className={`text-lg`}>{section.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Roadmap;
