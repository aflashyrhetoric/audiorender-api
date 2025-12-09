import React, { JSX } from 'react';

type Props = {
    icon: JSX.Element;
    className?: string;
    children: React.ReactNode;
};

const FeatureSquare: React.FC<Props> = ({ icon, children, className = '' }: Props) => {
    return (
        <div className={`cs-12 md:cs-6 lg:cs-3 rounded-xl p-5 bg-black ${className}`}>
            <div className={`mb-3 text-3xl`}>{icon}</div>
            <p className={`text-base`}>{children}</p>
        </div>
    );
};

export default FeatureSquare;
