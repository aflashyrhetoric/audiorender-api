import AppLogo from '@/components/app-logo';
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
import {
    LuArrowBigDown,
    LuAudioWaveform,
    LuCaptions,
    LuDroplets,
    LuFeather,
    LuImage,
    LuInfinity,
    LuLock,
    LuRefreshCwOff,
    LuTabletSmartphone,
    LuVideo,
} from 'react-icons/lu';

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
                    <div className={`fc min-h-[60vh] flex-col pt-24 lg:min-h-[95vh] xl:pt-32`}>
                        <div className="fc flex-col p-6 pt-16 md:pt-6">
                            <AppLogo className={`size-32`} />
                            <h1 className="font-inter mt-4 text-[2rem] font-bold tracking-tight">AudioRender</h1>
                        </div>
                        <p className={`fic tac font-inter mt-10 gap-2 text-3xl font-bold tracking-tight text-balance md:text-4xl`}>
                            Create upload-ready videos from mp3 files.
                        </p>
                        <div className={`fc mt-8 text-xl`}>
                            <ul className={`flex w-[400px] flex-col items-start space-y-3 p-5 font-sans text-lg font-medium`}>
                                <li className={`fic`}>
                                    <span className={`mr-4`}>
                                        <Checkmark size={'medium'} />{' '}
                                    </span>
                                    <span className={`text-balance`}>Fully local. Hardware-accelerated.</span>
                                </li>
                                <li className={`fic`}>
                                    <span className={`mr-4`}>
                                        {' '}
                                        <Checkmark size={'medium'} />{' '}
                                    </span>
                                    <span className={`text-balance`}>Purchase once. No subscription.</span>
                                </li>
                                <li className={`fic`}>
                                    <span className={`mr-4`}>
                                        {' '}
                                        <Checkmark size={'medium'} />{' '}
                                    </span>
                                    <span className={`text-balance`}>Templates w/ captions & waveforms.</span>
                                </li>
                            </ul>
                        </div>
                        <div className={`mt-12 mb-16 flex flex-col items-center gap-5 md:flex-row md:items-start`}>
                            <div className={`flex-col justify-center`}>
                                <a href={'https://files.audiorender.app/audiorender/AudioRender_1.2.0_aarch64.dmg'} download>
                                    <Button
                                        className={`flex h-10 justify-between bg-white px-4 text-lg font-bold tracking-tight text-black hover:bg-neutral-600 hover:text-white lg:h-18 lg:px-10 lg:text-xl`}
                                    >
                                        <span>Download for macOS (M1, M2, etc)</span>
                                        <span>
                                            <DownloadIcon className={`ml-2 lg:!h-[200px] lg:!w-[32px]`} />
                                        </span>
                                    </Button>
                                </a>
                                <p className={`tac mt-4 text-xs text-neutral-200`}>Free for audio &lt; 10min</p>
                                <p className={`tac mt-2 text-xs text-neutral-200`}>Apple Silicon Only  </p>
                            </div>
                            <div className={`flex-col justify-center`}>
                                <a href={route('checkout-page')} target="_blank" rel="noreferrer noopener">
                                    <Button
                                        variant="default"
                                        className={`font-inter flex h-10 justify-between bg-blue-500 px-4 text-lg font-bold tracking-tight text-white hover:bg-blue-700 lg:h-18 lg:px-10 lg:text-2xl`}
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
                    <div className={`grid12 mt-12 mb-12 gap-8 lg:px-[12vw] xl:mt-16`}>
                        <div className="tac cs-12 mb-8">
                            <h2 className={`ific mb-5`}>
                                <span className={`mr-5 hidden text-5xl md:inline`}>
                                    <LuArrowBigDown className={`animate-bounce fill-white`} />
                                </span>
                                <span className={`font-inter text-3xl font-bold tracking-tight text-balance md:text-3xl lg:text-4xl xl:text-5xl`}>
                                    See What You Can Make
                                </span>
                                <span className={`ml-5 hidden text-5xl md:inline`}>
                                    <LuArrowBigDown className={`animate-bounce fill-white`} />
                                </span>
                            </h2>
                            <p className={`font-inter text-xl text-balance`}>Check out what you can make with AudioRender.</p>
                        </div>
                    </div>
                    <div className={`grid12 mb-20 gap-y-12 lg:gap-x-12 lg:px-[8vw] xl:mb-32`}>
                        <div className={`cs-12 md:cs-6`}>
                            <VideoHeading className={`text-cyan-500`}>
                                <LuVideo />
                                <span className={`ml-3 text-2xl`}>Use A Looping Video</span>
                            </VideoHeading>
                            <div className="w-full">
                                <div className="relative aspect-video w-full">
                                    <iframe
                                        className="absolute inset-0 h-full w-full"
                                        src="https://www.youtube.com/embed/2fRIdQKfpyI?si=bOGOET44HZbBYvY9"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                            <VideoLabel
                                text={'Use an MP4 to create looping video backgrounds'}
                                additionalTags={['Plug & Play', 'Use Your Own Asset', 'Loops Endlessly']}
                            />
                        </div>
                        <div className={`cs-12 md:cs-6`}>
                            <VideoHeading className={`text-emerald-500`}>
                                <LuImage />
                                <span className={`ml-3 text-2xl`}>Use An Image</span>
                            </VideoHeading>
                            <div className="w-full">
                                <div className="relative aspect-video w-full">
                                    <iframe
                                        className="absolute inset-0 h-full w-full"
                                        src="https://www.youtube.com/embed/4gLtEHcpM8Q?si=3tnyDfVZaqgiq2Ym"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <VideoLabel
                                text={'Use a PNG to create branded video backgrounds'}
                                additionalTags={['Plug & Play', 'Use Your Own Asset', 'Fast Render Speeds']}
                            />
                        </div>
                    </div>
                    <div className={`grid12 mb-20 gap-y-12 lg:px-[12vw]`}>
                        <div className="tac cs-12 mb-20 bg-gray-900 py-5 md:bg-transparent">
                            <h2 className={`font-inter mb-4 text-2xl font-bold tracking-tight text-balance lg:text-4xl`}>
                                Use built-in templates to render with ease.
                            </h2>
                            <p className={`text-balance flex-wrap max-w-full ific font-inter text-xl`}>
                                {/*<span className={`mr-2`}>*/}
                                {/*    <Checkmark size={'small'} />*/}
                                {/*</span>*/}
                                Captions included. Waveforms included.
                            </p>
                        </div>
                        <div className={`cs-12 md:cs-6`}>
                            <VideoHeading className={`text-pink-500`}>
                                <span className={`text-2xl`}>Flat Style - 1:1 Aspect Ratio</span>
                            </VideoHeading>
                            <div className="w-full">
                                <div className="relative aspect-video w-full">
                                    <iframe
                                        className="absolute inset-0 h-full w-full"
                                        src="https://www.youtube.com/embed/3F4Z5xsaPEM"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <VideoLabel
                                text={'Use a PNG to create branded video backgrounds'}
                                additionalTags={['Captions', 'Waveforms', 'Multiple Aspect Ratios', 'Metadata-Friendly']}
                            />
                        </div>
                        <div className={`cs-12 md:cs-6`}>
                            <VideoHeading className={`text-purple-500`}>
                                <span className={`text-2xl`}>Card Style - 16:9 Aspect Ratio</span>
                            </VideoHeading>
                            <div className="w-full">
                                <div className="relative aspect-video w-full">
                                    <iframe
                                        className="absolute inset-0 h-full w-full"
                                        src="https://www.youtube.com/embed/WRw9w79ayfM?si=eNdxUkeTGdRvouyN"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <VideoLabel
                                text={'Generate videos in seconds - just add audio.'}
                                additionalTags={['Captions', 'Waveforms', 'Multiple Aspect Ratios', 'Uses Brand Logo']}
                            />
                        </div>
                    </div>
                    <div className={`grid12 mb-20 gap-4 p-4 lg:px-[12vw]`}>
                        <FeatureSquare className={`cs-12 lg:cs-12`} icon={<LuLock className={`text-white`} />}>
                            <strong className={`font-bold`}>Privacy-first.</strong> <br />
                            Everything is processed and rendered locally.
                        </FeatureSquare>
                        <FeatureSquare icon={<LuVideo className={`text-red-500`} />}>Robust rendering pipeline.</FeatureSquare>
                        <FeatureSquare icon={<LuRefreshCwOff className={`text-orange-500`} />}>No monthly subscription.</FeatureSquare>
                        <FeatureSquare icon={<LuInfinity className={`text-yellow-500`} />}>
                            No usage caps or limits.<sup>*</sup>
                        </FeatureSquare>
                        <FeatureSquare icon={<LuCaptions className={`text-green-500`} />}>
                            Caption generation. Fully local.<sup>**</sup>
                        </FeatureSquare>
                        <FeatureSquare icon={<LuTabletSmartphone className={`text-blue-500`} />}>
                            Landscape, square, and portrait Aspect Ratios supported.
                        </FeatureSquare>
                        <FeatureSquare icon={<LuAudioWaveform className={`text-indigo-500`} />}>
                            Responsive audio waveform animations.<sup>**</sup>
                        </FeatureSquare>
                        <FeatureSquare icon={<LuFeather className={`text-violet-500`} />}>
                            Basic brand asset integration.<sup>**</sup>
                        </FeatureSquare>
                        <FeatureSquare icon={<LuDroplets className={`text-pink-500`} />}>Preset color-schemes available.</FeatureSquare>

                        <div className="cs-12 px-4">
                            <p className={`text-xs text-gray-400`}>* For premium users.</p>
                            <p className={`text-xs text-gray-400`}>** For premium users using the audiogram templates.</p>
                        </div>
                    </div>
                    <div className={`mt-10 w-full lg:px-[12vw]`}>
                        <h2 className={`tac mb-5`}>
                            <span className={`font-inter text-2xl font-bold tracking-tight lg:text-4xl`}>60-Second Demo</span>
                        </h2>
                        <div className="mx-auto w-full max-w-4xl lg:max-w-6xl xl:max-w-7xl">
                            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                                <iframe
                                    src="https://customer-z7s53ua6boediiub.cloudflarestream.com/85e521b6ea231f858fd24127741b6e89/iframe?muted=true&autoplay=true&poster=https%3A%2F%2Fcustomer-z7s53ua6boediiub.cloudflarestream.com%2F85e521b6ea231f858fd24127741b6e89%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full border-0"
                                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                    allowFullScreen
                                ></iframe>
                                {/*<iframe*/}
                                {/*    className="absolute inset-0 h-full w-full"*/}
                                {/*    src="https://www.youtube-nocookie.com/embed/sI1n3tmD6l8?si=SxKUdMSrhMlohRZp&amp;controls=0"*/}
                                {/*    title="YouTube video player"*/}
                                {/*    frameBorder="0"*/}
                                {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                                {/*    referrerPolicy="strict-origin-when-cross-origin"*/}
                                {/*    allowFullScreen*/}
                                {/*></iframe>*/}
                            </div>
                        </div>
                        {/*<ScreenshotSlideshow />*/}
                    </div>

                    <div className={`mt-8 w-full px-4 tracking-tight lg:px-[12vw] xl:mt-16`}>
                        <p className={`font-inter text-2xl font-bold lg:text-6xl`} ref={ref}>
                            There are over{' '}
                            <strong className={`clip-gradient-text font-bold`}>{secondSectionIsInView && <CountUp end={1_000_000_000} />}</strong>
                        </p>
                        <p className={`ific font-inter mt-1 text-2xl font-bold lg:mt-3 lg:text-5xl`}>
                            monthly podcast listeners on YouTube{' '}
                            <span className={`lg:inline`}>
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
