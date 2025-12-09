import { PatchNoteVersion } from '@/components/patch-notes-section';
import { cn } from '@/lib/utils';
import { LuDot, LuGitCompare, LuWrench } from 'react-icons/lu';

type Props = {
    note: PatchNoteVersion;
};
export const PatchNoteData = ({ note }: Props) => {
    return (
        <div key={note.version} className="cs-12 max-w-sm border border-violet-500/30 p-5 md:cs-6 lg:cs-4">
            <h3 className="ific mb-2 w-full justify-between text-2xl font-bold tracking-tight text-violet-400">
                <span>v{note.version}</span>
                <LuGitCompare className={`mr-1 text-violet-400`} />
            </h3>
            <p className={`mb-4 border-b border-violet-500/30 pb-2 text-sm text-violet-300/80`}>
                {note.type === 'major' ? 'Feature update' : note.type === 'minor' ? '' : 'Minor fixes'}
            </p>
            <ul className="space-y-1">
                {note.changes.map((change, index) => (
                    <li key={index} className={cn('text-sm', change.isBugfix ? 'italic' : '')}>
                        {change.isBugfix ? <LuWrench className={`mr-1 inline`} /> : <LuDot className={`mr-1 inline`} />}
                        {change.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
