import React from 'react';

export type AudiogramConfigType = 'static_image' | 'looping_video' | 'audiogram';

type Props = {
    className?: string
    children: React.ReactNode;
};

const VideoTag: React.FC<Props> = ({ className = "bg-blue-500 ", children }: Props) => {
    return <span className={`w-fit rounded-lg px-2 py-1 font-bold text-white ${className}`}>{children}</span>;
};

export default VideoTag;
