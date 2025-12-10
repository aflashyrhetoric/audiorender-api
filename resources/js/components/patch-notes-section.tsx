import { PatchNoteData } from '@/components/marketing/patch-notes-partials/PatchNoteData';
import React from 'react';

type Props = {
    className?: string;
};

export type PatchNoteChange = {
    text: string; // Description of the change
    isBugfix: boolean; // Optional flag to indicate if it's a bugfix
};

export type PatchNoteVersion = {
    version: string;
    type: 'major' | 'minor' | 'bugfix';
    changes: PatchNoteChange[];
};

const PatchNotes: React.FC<Props> = () => {
    const patchNotes: PatchNoteVersion[] = [
        {
            version: '1.0.0',
            type: 'major',
            changes: [
                {
                    text: 'Initial release with core features and functionalities.',
                    isBugfix: false,
                },
            ],
        },
        {
            version: '1.1.0',
            type: 'bugfix',
            changes: [
                {
                    text: 'Bugfixes',
                    isBugfix: true,
                },
            ],
        },
        {
            version: '1.2.0',
            type: 'major',
            changes: [
                {
                    text: 'Added caption generation support with Whisper CPP.',
                    isBugfix: false,
                },
                {
                    text: 'Added basic waveform support.',
                    isBugfix: false,
                },
                {
                    text: 'Added custom audiograms',
                    isBugfix: false,
                },
            ],
        },
        {
            version: '1.3.0',
            type: 'major',
            changes: [
                {
                    text: 'Added template editor.',
                    isBugfix: true,
                },
                {
                    text: 'Fixed intermittent issue where captions would sometimes not generate',
                    isBugfix: true,
                },
                {
                    text: 'Adjusted UI for better usability',
                    isBugfix: false,
                },
            ],
        },
    ];

    return (
        <div className={`grid12 gap-8 xl:p-5 xl:p-0`}>
            {patchNotes.reverse().map((note) => (
                <PatchNoteData key={note.version} note={note} />
            ))}
        </div>
    );
};

export default PatchNotes;
