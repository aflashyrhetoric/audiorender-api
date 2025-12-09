import { PricingPerk } from '@/components/marketing/pricing-partials/PricingPerk';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from '@/lib/icons';
import React from 'react';

type Props = {
    className?: string;
};

const Pricing: React.FC<Props> = ({ className = '' }: Props) => {
    return (
        <div className={`flex flex-col justify-around gap-8 lg:flex-row`}>
            <div className={`w-full rounded-xl border border-neutral-700 bg-neutral-900/30 lg:w-[450px]`}>
                <div className={`ific h-[80px] w-full justify-between border-b border-neutral-700 p-8`}>
                    <span className={`ific font-inter text-xl font-bold tracking-tight lg:text-2xl`}>Free</span>
                    <span className={`font-inter text-3xl text-cyan-400`}>$0</span>
                </div>
                <div className={`h-[195px] w-full border-b border-neutral-700 p-8`}>
                    <p className={`font-inter text-xl font-bold tracking-tight text-neutral-300 lg:text-2xl`}>
                        Get started for <span className={`text-cyan-500`}>free</span> with MP3 files up to 10 minutes and the{' '}
                        <span className="text-white">Static</span> and <span className="text-white">Looping Video</span> video configurations.
                    </p>
                </div>
                <div className={`flex flex-col gap-2 rounded p-8 text-neutral-200`}>
                    <PricingPerk status={'meh'} text="MP3 files up to 10 minutes" />
                    <PricingPerk status={'active'} text="Create videos in bulk" />
                    <PricingPerk status={'active'} text="Use PNGs as background" />
                    <PricingPerk status={'active'} text="Use looping MP4s as background" />
                    <PricingPerk status={'active'} text="Portrait, landscape, square supported" />
                    <PricingPerk status={'active'} text="No watermarks" />
                    <PricingPerk status="inactive" text="Use captions & waveforms" />
                    <PricingPerk status="inactive" text="Unlock Audiogram templates" />
                    <PricingPerk status="inactive" text="Build custom templates w/ Template Editor" />
                    <PricingPerk status={'meh'} text="Availability-based customer support" />
                </div>
                <div className="p-8 pt-0">
                    <a href={'https://files.audiorender.app/audiorender/AudioRender_1.3.0_aarch64.dmg'} download>
                        <Button
                            className={`flex h-10 w-full cursor-pointer justify-between bg-white px-4 text-lg font-bold tracking-tight text-black hover:bg-neutral-800 hover:text-white lg:h-18 lg:px-10 lg:text-xl`}
                        >
                            <span>
                                <span className={`underline`}>Download Latest - v1.3</span>
                            </span>
                            <span>
                                <DownloadIcon className={`ml-2 lg:!h-[200px] lg:!w-[32px]`} />
                            </span>
                        </Button>
                    </a>
                </div>
            </div>
            <div className={`w-full rounded-xl border border-transparent bg-gradient-to-br from-blue-950 to-purple-950 lg:w-[450px]`}>
                <div className={`ific h-[80px] w-full justify-between border-b border-transparent p-8`}>
                    <span className={`ific font-inter clip-gradient-text text-xl font-bold tracking-tight lg:text-2xl`}>Premium</span>
                    <span className={`font-inter text-3xl text-cyan-400`}>
                        $15 <span className={`text-xs`}>Once</span>{' '}
                    </span>
                </div>
                <div className={`h-[195px] w-full border-b border-transparent p-8`}>
                    <p className={`font-inter text-xl font-bold tracking-tight text-neutral-300 lg:text-2xl`}>
                        Unlock more with a <span className={`text-cyan-500`}>one-time payment of $15</span> with no limitations.
                    </p>
                </div>
                <div className={`flex flex-col gap-2 rounded p-8 text-neutral-200`}>
                    <PricingPerk status={'active'} text="No limit on MP3 duration" />
                    <PricingPerk status={'active'} text="Create videos in bulk" />
                    <PricingPerk status={'active'} text="Use PNGs as background" />
                    <PricingPerk status={'active'} text="Use looping MP4s as background" />
                    <PricingPerk status={'active'} text="Portrait, landscape, square supported" />
                    <PricingPerk status={'active'} text="No watermarks" />
                    <PricingPerk status={'active'} text="Use captions & waveforms" />
                    <PricingPerk status={'active'} text="Unlock Audiogram templates" />
                    <PricingPerk status={'active'} text="Build custom templates w/ Template Editor" />
                    <PricingPerk status={'active'} text="Priority customer support" />
                </div>
                <div className="p-8 pt-0">
                    {' '}
                    <a href={route('checkout-page')} target="_blank" rel="noreferrer noopener">
                        <Button
                            variant="default"
                            className={`font-inter flex h-10 w-full cursor-pointer justify-between bg-blue-700 px-4 text-lg font-bold tracking-tight text-white hover:bg-blue-800 lg:h-18 lg:px-10 lg:text-2xl`}
                        >
                            <span>Buy Now • $15</span>
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
