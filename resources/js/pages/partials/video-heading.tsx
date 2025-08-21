import VideoTag from '@/pages/partials/video-tag';
import React from 'react';

export type AudiogramConfigType = 'static_image' | 'looping_video' | 'audiogram';

type Props = {
    className?: string;

    children: React.ReactNode;
};

const VideoHeading: React.FC<Props> = ({ children, className = '' }: Props) => {

    return (
        <div className={`mb-3 flex w-[3/5] flex-col items-center justify-center ${className}`}>
            <p className={`tac inline-flex items-center mb-3 text-xl xl:text-3xl font-bold text-balance`}>{children}</p>
        </div>
    );
};

export default VideoHeading;
