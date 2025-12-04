import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export type Slide = {
	imageSrc: string;
	imageAlt: string;
	caption?: string;
	buttonText: string;
	imageKey: string;
};

type SlideState = "inactive" | "activating" | "active" | "deactivating";

export function ImagesSlideshow({ slides }: { slides: Slide[] }) {
	const [activeSlide, setActiveSlide] = useState(slides[0]);

	useEffect(() => {
		// Initialize first slide
		setActiveSlide(slides[0]);
	}, []);

	function handleSelectSlide(slideButtonIndex: number) {
		setActiveSlide(slides[slideButtonIndex]);
	}

	return (
		<div className="max-w flex w-full flex-col items-center gap-10">
			<div className={`ific flex-ol gap-2 lg:flex-row`}>
				{slides.map((slide, slideButtonIndex) => {
					const isActive = activeSlide?.imageKey === slide.imageKey;
					return (
						<div className={`flex flex-col`} key={`button-${slide.imageKey}`}>
							<Button
								className={cn(
									`border px-2 lg:px-3 py-1 rounded text-xs lg:text-lg transition-colors`,
									isActive
										? "bg-white text-black hover:bg-white hover:text-black"
										: "bg-transparent text-white hover:bg-white/10",
								)}
								onClick={() => handleSelectSlide(slideButtonIndex)}
							>
								{slide.buttonText}
							</Button>

							<div
								className={cn(
									`hidden transition-transform lg:block`,
									isActive ? "translate-y-3" : "translate-y-1",
								)}
							>
								<div
									className={cn(
										`h-1 w-full rounded-full transition-all`,
										isActive ? "bg-white" : "bg-transparent",
									)}
								/>
							</div>
						</div>
					);
				})}
			</div>

			{slides.length > 1 && activeSlide && (
				<p className={`font-alegreya max-w-screen px-8 text-2xl lg:px-0`}>
					{activeSlide.caption}
				</p>
			)}
			<div className={`fc`}>
				{slides.length > 1 && activeSlide && (
					<div className="w-[90vw] lg:w-[75vw]">
						<picture className={`rounded-xl`}>
							{/* Mobile source: auto-add "-sm" suffix */}
							<source
								media="(max-width: 1024px)" // Tailwind lg breakpoint
								srcSet={activeSlide.imageSrc.replace(
									/(\.[a-zA-Z0-9]+)$/,
									"-sm$1",
								)}
								className={`rounded-xl`}
							/>

							{/* Desktop fallback */}
							<img
								className="max-w-full rounded-xl"
								src={activeSlide.imageSrc}
								alt={activeSlide.imageAlt}
							/>
						</picture>
					</div>
				)}
			</div>
		</div>
	);
}
