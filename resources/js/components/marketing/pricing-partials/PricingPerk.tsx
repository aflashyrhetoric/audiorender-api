import { CheckmarkIcon, DashIcon, XIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';

export const PricingPerk = ({ status = 'inactive', text }) => {
    const icon = {
        meh: <DashIcon className="text-sm text-neutral-800" />,
        active: <CheckmarkIcon className="text-sm text-neutral-800" />,
        inactive: <XIcon className="text-sm text-neutral-800" />,
    }[status];

    const bg = {
        meh: 'bg-yellow-200',
        active: 'bg-emerald-400',
        inactive: 'bg-neutral-500',
    }[status];

    return (
        <div className="ific">
            <div className={cn('mr-2 rounded-full p-1', bg)}>{icon}</div>
            <span className="font-inter text-base font-bold">{text}</span>
        </div>
    );
};
