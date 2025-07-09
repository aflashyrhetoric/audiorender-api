import AppLogo from '@/components/app-logo';
import ListItemDot from '@/components/list-item-dot';
import { ScreenshotSlideshow } from '@/components/marketing/screenshot-slideshow';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from '@/lib/icons';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { DotIcon } from 'lucide-react';
import { Checkmark } from 'react-checkmark';
import CountUp from 'react-countup';
import { FaYoutube } from 'react-icons/fa6';

import FAQSection from '@/components/faq-section';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    const ref = useRef(null);
    const secondSectionIsInView = useInView(ref);

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=alegreya-sans:100,400,700,900|inter:400,500,600|amaranth:400,700" rel="stylesheet" />
            </Head>
            <div className="gradient-dark flex flex-col items-center text-white">
                <main>
                    <div className={`fc min-h-[80vh] flex-col`}>
                        <div className="ific space-x-1">
                            <AppLogo className={`size-10`} />
                            <h1 className="font-alegreya text-[2rem] font-normal tracking-tight">audiorender</h1>
                        </div>
                        <p className={`fic mt-10 gap-2 font-amaranth text-[4rem] tracking-tight`}>Create still-image videos from mp3 files.</p>
                        <p className={`fic font-amaranth mt-4 mb-8 gap-2 text-[2rem] tracking-tight`}>
                            One-at-a-time or in bulk. Ready to upload.
                        </p>
                        <div className={`text-xl`}>
                            <ul className={`fc flex-col space-y-3 font-sans text-lg font-medium`}>
                                <li className={`fic`}>
                                    <span className={`mr-2`}> <Checkmark size={'medium'} /> </span>
                                    <span>Free basic features for audio under 10 minutes.</span>
                                </li>
                                <li className={`fic`}>
                                    <span className={`mr-2`}> <Checkmark size={'medium'} /> </span>
                                    <span>Fully local. Hardware-accelerated.</span>
                                </li>
                                <li className={`fic`}>
                                    <span className={`mr-2`}> <Checkmark size={'medium'} /> </span>
                                    <span>No monthly subscription. No usage limits.</span>
                                </li>
                            </ul>
                        </div>
                        <div className={`space-around mt-12 flex space-x-5`}>
                            <div className={`flex-col justify-center`}>
                                <Button className={`mt-2 flex justify-between text-2xl bg-white font-bold tracking-tight text-black h-18 px-10`}>
                                    <span>Download AudioRender</span>
                                    <span>
                                        <DownloadIcon className={`ml-2 !w-[32px] !h-[200px]`} />
                                    </span>
                                </Button>
                                <p className={`tac mt-4 text-xs text-neutral-200`}>Free for audio &lt; 10min</p>
                                <p className={`tac mt-2 text-xs text-neutral-200`}>Apple Silicon Only.</p>
                            </div>
                            <div className={`flex-col justify-center`}>
                                <Button
                                    variant="default"
                                    className={`tracking-tight font-bold font-inter h-18 px-10 mt-2 flex justify-between bg-blue-500 text-2xl text-white hover:bg-blue-700`}
                                >
                                    <span>
                                        Buy Now <DotIcon className={`ific`} /> $15
                                    </span>
                                    {/*<span>*/}
                                    {/*    <DownloadIcon />*/}
                                    {/*</span>*/}
                                </Button>
                                <p className={`tac mt-4 text-xs text-neutral-200`}>Payment through Stripe.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full px-[12vw]`}>
                        <h2 className={`tac`}>
                            <span className={`font-inter text-4xl font-bold tracking-tight`}>Some screenshots of AudioRender.</span>
                        </h2>
                        <ScreenshotSlideshow />
                    </div>
                    <div className={`w-full px-[12vw] tracking-tight`}>
                        <p className={`font-inter text-6xl font-bold`} ref={ref}>
                            There are over{' '}
                            <strong className={`clip-gradient-text font-bold`}>{secondSectionIsInView && <CountUp end={1_000_000_000} />}</strong>
                        </p>
                        <p className={`ific font-inter mt-3 text-5xl font-bold`}>
                            monthly podcast listeners on YouTube <FaYoutube className={`ml-2 inline fill-red-500`} />
                            <a
                                target={'_blank'}
                                rel={'noreferrer noopener'}
                                href={
                                    'https://blog.youtube/news-and-events/1-billion-monthly-podcast-users/?utm_source=podnews.net&utm_medium=web&utm_campaign=podnews.net%3A2025-02-27'
                                }
                            >
                                <span className={`ml-1 align-super text-base text-blue-500`}>
                                    <sup>1</sup>
                                </span>
                            </a>
                        </p>
                        <p className={`font-inter mt-8 text-2xl text-neutral-100`}>That&apos;s almost 10x higher than Spotify.</p>
                        <p className={`font-inter mt-6 text-2xl text-neutral-400`}>AudioRender makes it easy to turn your backlog of mp3's into upload-ready video files.</p>
                    </div>
                    <div className={`mt-24 px-[12vw]`}>
                        <h2 className={`mb-5`}>
                            <span className={`font-inter text-4xl font-bold tracking-tight`}>Questions & Answers</span>
                        </h2>
                        <FAQSection />
                    </div>
                </main>
                <div className="hidden h-16 lg:block"></div>
            </div>
        </>
    );
}
