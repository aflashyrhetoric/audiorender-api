import AppLogo from '@/components/app-logo';
import { ScreenshotSlideshow } from '@/components/marketing/screenshot-slideshow';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from '@/lib/icons';
import { Head } from '@inertiajs/react';
import { DotIcon } from 'lucide-react';
// @ts-ignore
import { Checkmark } from 'react-checkmark';
import CountUp from 'react-countup';
import { FaYoutube } from 'react-icons/fa6';

import FAQSection from '@/components/faq-section';
import SiteFooter from '@/components/site-footer';
import FeatureSquare from '@/pages/feature-square';
import VideoHeading from '@/pages/partials/video-heading';
import VideoLabel from '@/pages/partials/video-label';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { LuArrowBigDown, LuImage, LuVideo } from 'react-icons/lu';

export default function Welcome() {
    const ref = useRef(null);
    const secondSectionIsInView = useInView(ref);

    return (
        <>
            <Head title="AudioRender">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=alegreya-sans:100,400,700,900|inter:400,500,600|amaranth:400,700" rel="stylesheet" />
            </Head>
            <div className="gradient-dark flex flex-col items-center text-white">
                <main>
                    <div className={`fc min-h-[60vh] flex-col lg:min-h-[95vh]`}>
                        <div className="fc flex-col gap-6">
                            <AppLogo className={`size-32`} />
                            <h1 className="font-inter text-[2rem] font-bold tracking-tight">AudioRender</h1>
                        </div>
                        <p className={`fic font-inter mt-10 gap-2 text-2xl font-bold tracking-tight md:text-4xl lg:text-[3rem]`}>
                            Create upload-ready videos from mp3 files.
                        </p>
                        <div className={`mt-8 text-xl`}>
                            <ul className={`fc flex-col space-y-3 font-sans text-lg font-medium`}>
                                <li className={`fic`}>
                                    <span className={`mr-2`}>
                                        <Checkmark size={'medium'} />{' '}
                                    </span>
                                    <span>Fully local. Hardware-accelerated.</span>
                                </li>
                                <li className={`fic`}>
                                    <span className={`mr-2`}>
                                        {' '}
                                        <Checkmark size={'medium'} />{' '}
                                    </span>
                                    <span>No monthly subscription. No usage limits.</span>
                                </li>
                                <li className={`fic`}>
                                    <span className={`mr-2`}>
                                        {' '}
                                        <Checkmark size={'medium'} />{' '}
                                    </span>
                                    <span>Audiogram templates w/ waveforms & transcriptions.</span>
                                </li>
                            </ul>
                        </div>
                        <div className={`space-around mt-12 flex space-x-5`}>
                            <div className={`flex-col justify-center`}>
                                <a href={'https://files.audiorender.app/audiorender/AudioRender_0.1.0_aarch64.dmg'} download>
                                    <Button
                                        className={`mt-2 flex h-10 justify-between bg-white px-4 text-lg font-bold tracking-tight text-black hover:bg-neutral-600 hover:text-white lg:h-18 lg:px-10 lg:text-xl`}
                                    >
                                        <span>Download AudioRender</span>
                                        <span>
                                            <DownloadIcon className={`ml-2 lg:!h-[200px] lg:!w-[32px]`} />
                                        </span>
                                    </Button>
                                </a>
                                <p className={`tac mt-4 text-xs text-neutral-200`}>Free for audio &lt; 10min</p>
                                <p className={`tac mt-2 text-xs text-neutral-200`}>Apple Silicon Only.</p>
                            </div>
                            <div className={`flex-col justify-center`}>
                                <a href={route('checkout-page')} target="_blank" rel="noreferrer noopener">
                                    <Button
                                        variant="default"
                                        className={`font-inter mt-2 flex h-10 justify-between bg-blue-500 px-4 text-lg font-bold tracking-tight text-white hover:bg-blue-700 lg:h-18 lg:px-10 lg:text-2xl`}
                                    >
                                        <span>
                                            Buy Now <DotIcon className={`ific`} /> $15
                                        </span>
                                    </Button>
                                </a>
                                <p className={`tac mt-4 text-xs text-neutral-200`}>Payment through Stripe.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`grid12 mb-12 lg:px-[12vw]`}>
                        <div className="cs-12 tac mb-8">
                            <h2 className={`ific mb-5`}>
                                <span className={`mr-5 text-5xl`}>
                                    <LuArrowBigDown className={`animate-bounce fill-white`} />
                                </span>
                                <span className={`font-inter text-4xl font-bold tracking-tight lg:text-4xl xl:text-5xl`}>See What You Can Make</span>
                                <span className={`ml-5 text-5xl`}>
                                    <LuArrowBigDown className={`animate-bounce fill-white`} />
                                </span>
                            </h2>
                            <p className={`font-inter text-xl`}>Check out what you can make with AudioRender.</p>
                        </div>
                    </div>
                    <div className={`grid12 mb-20 lg:px-[12vw] xl:mb-32`}>
                        <div className={`cs-6`}>
                            <VideoHeading className={`text-cyan-500`}>
                                <LuVideo />
                                <span className={`ml-3`}>Use A Looping Video</span>
                            </VideoHeading>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/2fRIdQKfpyI?si=bOGOET44HZbBYvY9"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                            <VideoLabel text={'Use an MP4 to create looping video backgrounds'} additionalTags={['Plug & Play', 'Loops Endlessly']} />
                        </div>
                        <div className={`cs-6`}>
                            <VideoHeading className={`text-emerald-500`}>
                                <LuImage />
                                <span className={`ml-3`}>Use An Image</span>
                            </VideoHeading>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/4gLtEHcpM8Q?si=3tnyDfVZaqgiq2Ym"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                            <VideoLabel
                                text={'Use a PNG to create branded video backgrounds'}
                                additionalTags={['Plug & Play', 'Fast Render Speeds']}
                            />
                        </div>
                    </div>
                    <div className={`grid12 mb-20 lg:px-[12vw]`}>
                        <div className="cs-12 tac mb-20">
                            <h2 className={`mb-4`}>
                                <span className={`font-inter text-2xl font-bold tracking-tight lg:text-4xl`}>
                                    Use built-in templates to render with ease.
                                </span>
                            </h2>
                            <p className={`ific font-inter text-xl`}>
                                {/*<span className={`mr-2`}>*/}
                                {/*    <Checkmark size={'small'} />*/}
                                {/*</span>*/}
                                Captions included. Waveforms included.
                            </p>
                        </div>
                        <div className={`cs-6`}>
                            <VideoHeading className={`text-pink-500`}>
                                <span className={`ml-3`}>Flat-Style</span>
                            </VideoHeading>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/2fRIdQKfpyI?si=bOGOET44HZbBYvY9"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                            <VideoLabel
                                text={'Use a PNG to create branded video backgrounds'}
                                additionalTags={['Plug & Play', 'Fast Render Speeds']}
                            />
                        </div>
                        <div className={`cs-6`}>
                            <VideoHeading className={`text-purple-500`}>
                                <span className={`ml-3`}>Card-Style</span>
                            </VideoHeading>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/4gLtEHcpM8Q?si=3tnyDfVZaqgiq2Ym"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                            <VideoLabel
                                text={'Use a PNG to create branded video backgrounds'}
                                additionalTags={['Plug & Play', 'Fast Render Speeds']}
                            />
                        </div>
                    </div>
                    <div className={`grid12 mb-20 gap-6 lg:px-[12vw]`}>
                        <FeatureSquare icon={<LuVideo />}>Own your tools.</FeatureSquare>
                    </div>
                    <div className={`w-full lg:px-[12vw]`}>
                        <h2 className={`tac`}>
                            <span className={`font-inter text-2xl font-bold tracking-tight lg:text-4xl`}>Some screenshots of AudioRender.</span>
                        </h2>
                        <ScreenshotSlideshow />
                    </div>
                    <div className={`w-full px-4 tracking-tight lg:px-[12vw]`}>
                        <p className={`font-inter text-2xl font-bold lg:text-6xl`} ref={ref}>
                            There are over{' '}
                            <strong className={`clip-gradient-text font-bold`}>{secondSectionIsInView && <CountUp end={1_000_000_000} />}</strong>
                        </p>
                        <p className={`ific font-inter mt-1 text-2xl font-bold lg:mt-3 lg:text-5xl`}>
                            monthly podcast listeners on YouTube{' '}
                            <span className={`hidden lg:inline`}>
                                <FaYoutube className={`ml-2 inline fill-red-500`} />
                            </span>
                            <a
                                target={'_blank'}
                                rel={'noreferrer noopener'}
                                href={
                                    'https://blog.youtube/news-and-events/1-billion-monthly-podcast-users/?utm_source=podnews.net&utm_medium=web&utm_campaign=podnews.net%3A2025-02-27'
                                }
                                className={`inline`}
                            >
                                <span className={`ml-1 align-super text-base text-blue-500`}>
                                    <sup>1</sup>
                                </span>
                            </a>
                        </p>
                        <p className={`font-inter mt-8 text-xl text-neutral-100 lg:text-2xl`}>That&apos;s almost 10x higher than Spotify.</p>
                        <p className={`font-inter mt-6 text-2xl text-neutral-400`}>
                            AudioRender makes it easy to turn your backlog of mp3's into upload-ready video files.
                        </p>
                    </div>
                    <div className={`mt-24 px-4 lg:px-[12vw]`}>
                        <h2 className={`mb-5`}>
                            <span className={`font-inter text-4xl font-bold tracking-tight`}>Questions & Answers</span>
                        </h2>
                        <FAQSection />
                    </div>
                </main>
                <div className="hidden h-16 lg:block"></div>
                <SiteFooter />
            </div>
        </>
    );
}
