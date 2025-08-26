import VideoTag from '@/pages/partials/video-tag';
import React from 'react';

export type AudiogramConfigType = 'static_image' | 'looping_video' | 'audiogram';

type Props = {
    className?: string;

    text: string;
    additionalTags?: string[];
};

const VideoLabel: React.FC<Props> = ({ text, additionalTags = [], className = '' }: Props) => {
    const indexToBgColorClass = ['bg-blue-500','bg-green-500', 'bg-orange-500', 'bg-purple-500'];

    return (
        <div className={`mt-8 flex w-[3/5] flex-col items-center justify-center ${className}`}>
            <p className={`tac mb-5 text-xl font-bold text-balance`}>{text}</p>
            <div className={`flex flex-wrap px-24 justify-center items-center gap-3`}>
                {additionalTags.map((tag, index) => {
                    const bgColorClass = indexToBgColorClass[index % indexToBgColorClass.length];
                    return (
                        <VideoTag key={`${tag}-${index}`} className={bgColorClass}>
                            {tag}
                        </VideoTag>
                    );
                })}
            </div>
        </div>
    );
};

export default VideoLabel;
