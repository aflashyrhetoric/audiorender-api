import React from 'react';

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

const Roadmap: React.FC<Props> = ({ className = '' }: Props) => {
    const roadmapItems: RoadmapItem[] = [
        {
            intendedReleaseVersion: '1.5 or 1.6',
            feature: 'Word-level caption generation',
            description:
                'Captions are currently timestamp-based. Using deeper VAD (Voice Activity Detection), we can achieve true word-level captions.',
        },
        {
            intendedReleaseVersion: '1.5 or 1.6',
            feature: 'Premade templates',
            description:
                'While we already have 3 simple Audiogram Templates, a wider selection for common use-cases will make video creation even easier.',
        },
        {
            intendedReleaseVersion: '1.7',
            feature: 'Alternate waveform styles',
            description: 'Add circular waveforms, oscilloscope-styled waveforms, and more.',
        },
        {
            intendedReleaseVersion: '1.8',
            feature: 'Transparent background support',
            description: 'Transparent backgrounds allow for AudioRender to be used as a layer in more complex video compositions.',
        },
        {
            intendedReleaseVersion: '1.9',
            feature: 'Free tier value adjustment',
            description: 'As we add new features, we will adjust the free tier to include access to more features.',
        },
        {
            intendedReleaseVersion: '1.9',
            feature: 'Custom font support',
            description: 'Provide your own fonts to use in templates for greater brand consistency.',
        },
        {
            intendedReleaseVersion: '2.0',
            feature: 'Extended template editor',
            description: 'Access to stickers, photos, shapes, and more within the template editor.',
        },
    ];
    return (
        <div className={`grid12 gap-8`}>
            {roadmapItems.map((section, index) => (
                <div key={`roadmap-item-${section.feature}`} className={`cs-4 border border-neutral-300/30 hover:border-purple-500 p-5`}>
                    <span className={`ific font-inter text-xl lg:text-2xl tracking-tight font-bold`}>{section.feature}</span>
                    <div className={`font-inter rounded py-4 text-neutral-200`}>
                        <p className={`mb-5 inline-block rounded bg-neutral-200 px-2 py-1 text-base font-bold tracking-tight text-neutral-600`}>
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
