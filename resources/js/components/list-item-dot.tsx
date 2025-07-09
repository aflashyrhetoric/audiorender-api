import React from 'react';

type Props = {
    className?: string;
};

const ListItemDot: React.FC<Props> = ({ className = '' }: Props) => {
    return (
        <span className={`relative py-1 dark:bg-[#161615] ${className}`}>
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] border-[#3E3E3A] bg-[#161615]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3E3E3A]" />
            </span>
        </span>
    );
};

export default ListItemDot;
