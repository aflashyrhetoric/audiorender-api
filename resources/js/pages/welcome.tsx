import AppLogo from '@/components/app-logo';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from '@/lib/icons';
import { Head } from '@inertiajs/react';
// @ts-ignore
import { Checkmark } from 'react-checkmark';
import CountUp from 'react-countup';
import { FaYoutube } from 'react-icons/fa6';

import FAQSection from '@/components/faq-section';
import { ImagesSlideshow } from '@/components/marketing/images-slideshow';
import PatchNotes from '@/components/patch-notes-section';
import PricingSection from '@/components/pricing-section';
import RoadmapSection from '@/components/roadmap-section';
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
    LuGitCompare,
    LuHandHelping,
    LuImage,
    LuInfinity,
    LuLeaf,
    LuLock,
    LuMail,
    LuMailQuestion,
    LuMapPinned,
    LuRefreshCwOff,
    LuTabletSmartphone,
    LuVideo,
} from 'react-icons/lu';
import { AlertCircleIcon } from 'lucide-react';

export default function Welcome() {
    const ref = useRef(null);
    const secondSectionIsInView = useInView(ref);

    return (
        <>
            <Head title="AudioRender">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=alegreya-sans:100,400,700,900|inter:300,400,500i,500,600,700|amaranth:400,700"
                    rel="stylesheet"
                />
            </Head>
            <div className="gradient-dark flex flex-col items-center text-white">
                <main>
                    {/*<div className="h-32 bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>*/}

                    <div className={`fc relative min-h-[60vh] flex-col pb-32 lg:min-h-[95vh] xl:pt-24`}>
                        <div className={`fc absolute top-0 h-full w-full`}>
                            <div className={`bg h-full w-full bg-radial-[at_20%_35%] from-indigo-500/10 to-black`} />
                        </div>
                        <div className={`fc absolute top-0 h-full w-full`}>
                            <div className={`bg h-full w-full bg-radial-[at_80%_85%] from-purple-500/10 to-black/50`} />
                        </div>
                        <div className={`absolute bottom-0 h-24 md:h-32 w-full`}>
                            <div className={`bg h-full w-full bg-gradient-to-b from-black/0 to-black`} />
                        </div>
                        <div className={`fc z-10 flex-col`}>
                            <div className="fc mt-12 mb-12 flex-row lg:mt-0">
                                <AppLogo className={`size-16 lg:size-24`} />
                                <h2 className={`ml-2 text-lg font-bold tracking-tight lg:text-3xl`}>AudioRender</h2>
                            </div>
                            <div className={`fc`}>
                                <h1
                                    className={`font-inter tac mt-0 gap-2 border-neutral-100/50 pb-4 text-3xl leading-12 font-light tracking-tight text-balance md:border-b md:text-4xl`}
                                >
                                    <span className="clip-gradient-text font-bold">AudioRender</span> is a{' '}
                                    <span className="font-bold">macOS app</span> that <br className={`hidden md:block`} />
                                    lets you create
                                    <span className="font-bold"> polished videos</span> from
                                    <span className="font-bold"> MP3s</span>.
                                </h1>
                            </div>
                        </div>{' '}
                        <div className={`fc z-10 mt-8 text-xl`}>
                            <ul
                                className={`flex w-full flex-col items-start space-y-3 p-5 font-sans text-sm font-medium sm:items-center sm:text-base md:text-lg lg:w-[600px] lg:items-start`}
                            >
                                <li className={`fic`}>
                                    <span className={`mr-4`}>
                                        <Checkmark size={'medium'} />{' '}
                                    </span>
                                    <span className={`text-balance`}>Reach listeners AND viewers by crafting MP3s into upload-ready videos.</span>
                                </li>
                                <li className={`fic`}>
                                    <span className={`mr-4`}>
                                        <Checkmark size={'medium'} />{' '}
                                    </span>
                                    <span className={`text-balance`}>Bulk-friendly. Convert multiple files at once.</span>
                                </li>
                                <li className={`fic`}>
                                    <span className={`mr-4`}>
                                        {' '}
                                        <Checkmark size={'medium'} />{' '}
                                    </span>
                                    <span className={`text-balance`}>Purchase once. No subscriptions.</span>
                                </li>
                                <li className={`fic`}>
                                    <span className={`mr-4`}>
                                        <Checkmark size={'medium'} />{' '}
                                    </span>
                                    <span className={`text-balance`}>Upgrade for captions, waveforms, and custom templates.</span>
                                </li>
                            </ul>
                        </div>
                        <div className={`fc z-10 bg-orange-700 px-4 py-4 rounded-full mt-8 text-white`}>
                            <p className={`tac font-inter ific text-sm text-balance`}>
                                <AlertCircleIcon className={`mr-2`}/>
                                Download and purchase has been temporarily disabled pending review of a reliability issue with v1.3.</p>
                        </div>
                        <div className={`z-10 mt-12 mb-16 flex flex-col items-center gap-5 md:flex-row md:items-start`}>
                            <div className={`mb-5 flex-col justify-center md:mb-0`}>
                                <a href={'https://files.audiorender.app/audiorender/AudioRender_1.3.0_aarch64.dmg'} download className={`pointer-events-none`}>
                                    <Button
                                        disabled
                                        className={`flex h-10 cursor-pointer justify-between bg-white px-4 text-lg font-bold tracking-tight text-black hover:bg-neutral-800 hover:text-white lg:h-18 lg:px-10 lg:text-xl`}
                                    >
                                        <span>
                                            <span className={`underline`}>Download Latest - v1.3</span>
                                        </span>
                                        <span>
                                            <DownloadIcon className={`ml-2 lg:!h-[200px] lg:!w-[32px]`} />
                                        </span>
                                    </Button>
                                </a>
                                <p className={`tac mt-3 text-xs text-neutral-200`}>Free for audio &lt; 10min.</p>
                                <p className={`tac mt-1 text-xs text-neutral-200`}>Certain features require premium.</p>
                                <p className={`tac mt-1 text-xs text-neutral-200`}>M-Series Apple Silicon Only  </p>
                            </div>
                            <div className={`fc flex-col justify-center`}>
                                <a href={route('checkout-page')} target="_blank" rel="noreferrer noopener" className={`pointer-events-none`}>
                                    <Button
                                        disabled
                                        variant="default"
                                        className={`font-inter flex h-10 cursor-pointer justify-between bg-blue-700 px-4 text-lg font-bold tracking-tight text-white hover:bg-blue-800 lg:h-18 lg:px-10 lg:text-2xl`}
                                    >
                                        <span>Buy Now • $15</span>
                                    </Button>
                                </a>
                                <p className={`ific mt-4 w-full justify-center gap-x-1 text-xs text-neutral-200`}>
                                    <LuLock />
                                    Secure payment through Stripe.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`fc mb-20 h-[30vh] bg-black lg:gap-x-12 lg:px-[8vw] xl:h-[30vh] pb-12 xl:gap-y-12`}>
                        <div className={`flex flex-col`}>
                            <p className={`font-inter tac mb-8 text-2xl font-bold tracking-tight text-neutral-200 xl:text-5xl`}>
                                Let your voice be <span className={`clip-gradient-text z-20`}>seen</span>.
                            </p>
                            <div className={`flex items-center flex-col gap-y-3 text-lg text-neutral-300`}>
                                <p className={`tac font-inter text-xl xl:text-3xl max-w-[80%] lg:max-w-none text-balance font-bold tracking-tight`}>
                                    Videos reach more people than audio alone.
                                </p>
                                <p className={`tac font-inter text-xl xl:text-3xl tracking-tight`}>
                                    AudioRender makes it <span className={`font-bold italic`}>easy</span> to bridge the gap.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`mt-10 mb-20 w-full lg:px-[12vw]`}>
                        <h2 className={`tac mb-8`}>
                            <span className={`font-inter text-2xl font-bold tracking-tight lg:text-4xl`}>60-Second Demo ✌️</span>
                        </h2>
                        <h2 className={`tac mb-8`}>
                            <p className={`font-inter text-lg font-bold tracking-tight lg:text-xl`}></p>
                        </h2>
                        <div className="mx-auto w-full max-w-4xl lg:max-w-6xl xl:max-w-7xl">
                            <div className="relative aspect-video w-full max-w-screen" style={{ paddingTop: '56.25%' }}>
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
                    <div className={`mb-20 gap-y-12 lg:gap-x-12 lg:px-[8vw]`}>
                        <ImagesSlideshow
                            slides={[
                                {
                                    imageSrc: '/img/quick-create-start.png',
                                    imageAlt: 'drag and drop MP3 files to start creating videos',
                                    buttonText: 'Easy to Use',
                                    caption: 'Drag and drop an MP3 file. Customize your video. Render!',
                                    imageKey: 'easy-to-use',
                                },
                                {
                                    imageSrc: '/img/quick-audiograms.png',
                                    imageAlt: 'drag and drop MP3 files to start creating videos',
                                    buttonText: 'Audiograms',
                                    caption: 'Customize your audiograms with your desired aspect ratio, color scheme, and style.',
                                    imageKey: 'quick-audiograms',
                                },
                                {
                                    imageSrc: '/img/audiorender-screenshot.png',
                                    imageAlt: 'screenshot of the application showing the template editor',
                                    buttonText: 'Custom Templates',
                                    caption: 'Need even more control? Create your own templates with our drag-and-drop editor.',
                                    imageKey: 'template-editor',
                                },
                            ]}
                        />
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
                            <p className={`font-inter mb-2 text-xl text-balance`}>Below are some examples of videos created with AudioRender.*</p>
                            <p className={`text-xs text-balance text-white/50`}>
                                * Some designs were done in other programs and imported into AudioRender for rendering.
                            </p>
                        </div>
                    </div>
                    <div className={`grid12 mb-20 gap-y-12 lg:gap-x-12 lg:px-[8vw] xl:mb-32`}>
                        <div className={`cs-12 md:cs-6`}>
                            <VideoHeading className={`text-cyan-500`}>
                                <LuVideo />
                                <span className={`ml-3 text-2xl`}>Use A Looping Video</span>
                            </VideoHeading>
                            <div className="w-full">
                                <div className="relative aspect-video w-full max-w-screen">
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
                                <div className="relative aspect-video w-full max-w-screen">
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
                    <div className={`grid12 mb-12 gap-y-12 md:gap-12 lg:px-[12vw] xl:mb-20`}>
                        <div className="tac cs-12 mb-8 max-w-screen bg-black px-4 py-8 md:bg-transparent">
                            <h2 className={`font-inter mb-4 text-2xl font-bold tracking-tight text-balance lg:text-4xl`}>
                                Use built-in templates to render with ease.
                            </h2>
                            <p className={`ific font-inter max-w-full flex-wrap text-xl text-balance`}>
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
                                <div className="relative aspect-video w-full max-w-screen">
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
                                text={'Our flat style template - simple and easy.'}
                                additionalTags={['Captions', 'Waveforms', 'Multiple Aspect Ratios', 'Metadata-Friendly']}
                            />
                        </div>
                        <div className={`cs-12 md:cs-6`}>
                            <VideoHeading className={`text-purple-500`}>
                                <span className={`text-2xl`}>Card Style - 16:9 Aspect Ratio</span>
                            </VideoHeading>
                            <div className="w-full">
                                <div className="relative aspect-video w-full max-w-screen">
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
                                text={'The card style template - sleek and modern.'}
                                additionalTags={['Captions', 'Waveforms', 'Multiple Aspect Ratios', 'Uses Brand Logo']}
                            />
                        </div>
                    </div>
                    <div className={`grid12 mb-20 gap-4 p-4 lg:px-[12vw]`}>
                        <FeatureSquare icon={<LuRefreshCwOff className={`text-orange-500`} />}>No monthly subscription.</FeatureSquare>
                        <FeatureSquare icon={<LuCaptions className={`text-neutral-200`} />}>
                            Generate captions easily.<sup>**</sup>
                        </FeatureSquare>
                        <FeatureSquare icon={<LuInfinity className={`text-yellow-500`} />}>
                            No usage caps or limits.<sup>*</sup>
                        </FeatureSquare>
                        <FeatureSquare className={`lg:cs-3`} icon={<LuLeaf className={`text-green-500`} />}>
                            1% of purchases contribute to support carbon removal technologies
                        </FeatureSquare>
                        <FeatureSquare className={`lg:cs-4`} icon={<LuTabletSmartphone className={`text-blue-500`} />}>
                            Landscape. Square. Portrait. All supported.
                        </FeatureSquare>
                        <FeatureSquare className={`lg:cs-4`} icon={<LuAudioWaveform className={`text-indigo-500`} />}>
                            Customizable waveform animations.<sup>***</sup>
                        </FeatureSquare>
                        <FeatureSquare className={`lg:cs-4`} icon={<LuFeather className={`text-violet-500`} />}>
                            Basic brand asset integration.<sup>**</sup>
                        </FeatureSquare>
                        <FeatureSquare className={`lg:cs-6`} icon={<LuVideo className={`text-red-500`} />}>
                            Robust rendering pipeline built atop an ironclad foundation of industry standard tools like FFmpeg, Remotion, and
                            WhisperCPP.
                        </FeatureSquare>
                        <FeatureSquare className={`lg:cs-6`} icon={<LuDroplets className={`text-cyan-500`} />}>
                            Create your own templates with a familiar drag-and-drop interface.
                        </FeatureSquare>
                        <FeatureSquare className={`cs-12 lg:cs-12`} icon={<LuLock className={`text-white`} />}>
                            <strong className={`font-bold`}>Privacy-first.</strong> <br />
                            Everything is processed and rendered locally.
                        </FeatureSquare>
                        {/*<FeatureSquare className={`lg:cs-3`} icon={<LuHandHeart className={`text-pink-400`} />}>*/}
                        {/*    Support independent software development.*/}
                        {/*</FeatureSquare>*/}

                        <div className="cs-12 px-4">
                            <p className={`text-xs text-gray-400`}>* For premium users.</p>
                            <p className={`text-xs text-gray-400`}>** For premium users using the audiogram templates or custom templates.</p>
                            <p className={`text-xs text-gray-400`}>** For premium users using custom templates.</p>
                        </div>
                    </div>

                    <div className={`mt-8 w-full px-4 tracking-tight lg:px-[12vw] xl:mt-16`}>
                        <p className={`font-inter text-2xl font-bold lg:text-6xl`} ref={ref}>
                            There are over{' '}
                            <strong className={`clip-gradient-text font-bold`}>{secondSectionIsInView && <CountUp end={1_000_000_000} />}</strong>
                        </p>
                        <p className={`ific font-inter mt-1 text-2xl font-bold lg:mt-3 lg:text-5xl`}>
                            <span>
                                monthly podcast listeners <br className={`md:hidden`} /> on YouTube
                                <span className={`inline`}>
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
                            </span>{' '}
                        </p>
                        <p className={`font-inter mt-8 text-xl text-neutral-100 lg:text-2xl`}>That&apos;s almost 10x higher than Spotify.</p>
                        <p className={`font-inter mt-6 text-2xl text-neutral-400`}>
                            AudioRender makes it easy to turn your backlog of MP3s into upload-ready video files.
                        </p>
                    </div>

                    <div className={`mt-12 px-4 py-10 lg:px-[12vw] xl:mt-20`}>
                        <h2 className={`tac mb-4 gap-x-2 border-b-cyan-400 text-cyan-400`}>
                            <span className={`font-inter text-4xl font-bold tracking-tight`}>Pricing</span>
                        </h2>
                        <p className={`tac mb-10`}>
                            <span className={`font-bold`}>Processed via Stripe.</span>{' '}
                            <span className={`text-neutral-500`}>One-time payment. No subscriptions. No hidden fees.</span>
                        </p>
                        <PricingSection />
                    </div>
                    <div className={`mt-24 px-4 lg:px-[12vw]`}>
                        <h2 className={`ific mb-5 gap-x-2 border-b border-b-indigo-400 text-indigo-400`}>
                            <span className={`text-4xl`}>
                                <LuMailQuestion />
                            </span>
                            <span className={`font-inter text-4xl font-bold tracking-tight`}>FAQ</span>
                        </h2>

                        <FAQSection />
                    </div>
                    <div className={`mt-24 px-4 lg:px-[12vw]`}>
                        <h2 className={`ific mb-5 gap-x-2 border-b border-b-green-400 text-green-400`}>
                            <span className={`text-4xl`}>
                                <LuMapPinned />
                            </span>
                            <span className={`font-inter text-4xl font-bold tracking-tight`}>Feature Roadmap</span>
                        </h2>
                        <p className={`mb-5 text-lg tracking-tight`}>
                            <span className={`font-bold`}>Upcoming features.</span>{' '}
                            <span className={`text-neutral-500`}>These features are not yet implemented.</span>
                        </p>
                        <RoadmapSection />
                    </div>
                    <div className={`mt-12 mb-12 px-4 lg:mt-24 lg:mb-24 lg:px-[12vw]`}>
                        <h2 className={`ific mb-5 gap-x-2 border-b border-b-violet-400 text-violet-400`}>
                            <span className={`text-4xl`}>
                                <LuGitCompare />
                            </span>
                            <span className={`font-inter text-4xl font-bold tracking-tight`}>Patch Notes</span>
                        </h2>
                        <p className={`mb-5 text-lg tracking-tight`}>
                            <span className={`font-bold`}>Recent releases.</span>{' '}
                            <span className={`text-neutral-500`}>For now, downgrading to a previous version is not supported.</span>
                        </p>
                        <PatchNotes />
                    </div>
                    <div className={`mt-12 mb-12 px-4 lg:mt-24 lg:mb-24 lg:px-[12vw]`}>
                        <h2 className={`ific mb-5 gap-x-2 border-b border-b-pink-400 text-pink-400`}>
                            <span className={`text-4xl`}>
                                <LuHandHelping />
                            </span>
                            <span className={`font-inter text-4xl font-bold tracking-tight`}>Support</span>
                        </h2>
                        <p className={`mb-5 text-lg font-bold tracking-tight`}>
                            Please feel free to reach out with questions, issues, refund requests, or feedback to our support e-mail below.
                        </p>
                        <p className={`text-2xl tracking-tight`}>
                            <a className={`ific gap-x-2 rounded border p-3`} href={'mailto:contact@audiorender.app'}>
                                <LuMail className={``} />
                                contact@audiorender.app
                            </a>
                        </p>
                    </div>
                </main>
                <div className="hidden h-16 lg:block"></div>
                <SiteFooter />
            </div>
        </>
    );
}
