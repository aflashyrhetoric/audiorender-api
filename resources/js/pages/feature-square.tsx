import React, { JSX } from 'react';

type Props = {
    icon: JSX.Element;
    className?: string;
    children: React.ReactNode;
};

const FeatureSquare: React.FC<Props> = ({ icon, children, className = '' }: Props) => {
    return (
        <div className={`cs-12 md:cs-6 rounded-full p-5 bg-black md:bg-red-500 ${className}`}>
            <div>{icon}</div>
            <p className={`text-2xl`}>{children}</p>
        </div>
    );
};

export default FeatureSquare;
