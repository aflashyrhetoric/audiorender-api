import React from 'react';

type Props = {
    className?: string;
};

const UpwardGradient: React.FC<Props> = ({ className = '' }: Props) => {
    return (
        <div
            className="absolute inset-x-0 top-0 w-[100vw] h-[320px]"
            style={{
                background: `linear-gradient('
                to top,
                hsl(240, 100%, 6%) 0%,
                hsla(240, 100%, 6%, 0.987) 8.1%,
                hsla(240, 100%, 6%, 0.951) 15.5%,
                hsla(240, 100%, 6%, 0.896) 22.5%,
                hsla(240, 100%, 6%, 0.825) 29%,
                hsla(240, 100%, 6%, 0.741) 35.3%,
                hsla(240, 100%, 6%, 0.648) 41.2%,
                hsla(240, 100%, 6%, 0.55) 47.1%,
                hsla(240, 100%, 6%, 0.45) 52.9%,
                hsla(240, 100%, 6%, 0.352) 58.8%,
                hsla(240, 100%, 6%, 0.259) 64.7%,
                hsla(240, 100%, 6%, 0.175) 71%,
                hsla(240, 100%, 6%, 0.104) 77.5%,
                hsla(240, 100%, 6%, 0.049) 84.5%,
                hsla(240, 100%, 6%, 0.013) 91.9%,
                hsla(240, 100%, 6%, 0) 100%')`
            }}
        ></div>
    );
};

export default UpwardGradient;
