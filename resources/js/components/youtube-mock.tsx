import { PlayIcon } from '@/lib/icons';
import React from "react";
import {
    LuBox,
    LuCaptions,
    LuMaximize,
    LuPictureInPicture2,
    LuSettings,
    LuSkipForward,
    LuVolume2,
} from "react-icons/lu";

interface Props {
    imgPath?: string;
    className?: string;
}

const YouTubeMock: React.FC<Props> = ({ className, imgPath }: Props) => {
    return (
        <div
            className={`aspect-video relative w-full rounded-lg overflow-hidden bg-neutral-700 ${className}`}
        >
            <div className={`relative h-full`}>
                <div className={`z-0`}>
                    {!imgPath && <div className={`w-full h-[0px] bg-neutral-100/50`}></div>}
                    {imgPath && (
                        <img
                            src={imgPath}
                            alt="Selected"
                            // className="relative z-10 h-full"
                            className="absolute inset-0 z-10 h-full w-full object-contain object-center"
                        />
                    )}
                </div>
                <div className={`grid12 absolute bottom-0 w-full z-50 bg-black/20 p-3`}>
                    <div className={`pl-2 cs-1`}>
                        <PlayIcon className={`fill-white stroke-0 text-xl`} />
                    </div>
                    <div className={`cs-1 pl-2`}>
                        <LuSkipForward className={`fill-white stroke-white text-xl`} />
                    </div>
                    <div className={`cs-1 pl-2`}>
                        <LuVolume2 className={`fill-white stroke-white text-xl`} />
                    </div>
                    <div className={`cs-4`}></div>
                    <div className={`cs-1 flex justify-end`}>
                        <LuCaptions className={` stroke-white text-xl`} />
                    </div>
                    <div className={`cs-1 flex justify-end`}>
                        <div className={`relative`}>
                            <LuSettings className={` stroke-white text-xl`} />
                            <div
                                className={`absolute top-0 left-4 bg-red-500 text-white text-[8px] px-[2px] rounded-[2px]`}
                            >
                                HD
                            </div>
                        </div>
                    </div>
                    <div className={`cs-1 flex justify-end`}>
                        <LuPictureInPicture2 className={` stroke-white text-xl`} />
                    </div>
                    <div className={`cs-1 flex justify-end`}>
                        <LuBox className={` stroke-white text-xl`} />
                    </div>
                    <div className={`cs-1 flex justify-end`}>
                        <LuMaximize className={` stroke-white text-xl`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YouTubeMock;
