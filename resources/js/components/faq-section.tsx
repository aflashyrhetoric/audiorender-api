import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';

type Props = {
    className?: string;
};

const FAQSection: React.FC<Props> = ({ className = '' }: Props) => {
    const faqSections = [
        {
            title: 'What is AudioRender?',
            text: "AudioRender is a macOS app that lets you drop in an MP3 file and create simple, upload-ready videos with waveforms and transcriptions in a few clicks."
        },
        {
            title: 'Is there a free version?',
            text: "The trial version is free, with some limitations. Audio file duration is limited to under 10 minutes. Only the static image + looping video configurations are enabled. Audiograms - including waveform and transcription - are not available. We hope this allows those with simpler use-cases to comfortable use AudioRender for free, while allowing us to support ourselves as a business.",
        },
        {
            title: 'What comes with a premium license?',
            text: "No limits. All current and future features will be unlocked. Audiogram-style videos will also be available. Audiograms let you select stylistic templates with waveforms and transcriptions embedded into the video.",
        },
        {
            title: 'How does this compare to ________?',
            text: "AudioRender is a macOS app with a one-time payment. A paid license means no usage limits, no monthly costs, and no privacy concerns. We also make a deliberate trade-off: convention over configuration. If you're looking for fully-fledged video compositing software that lets you tweak your video to perfection, AudioRender is definitely not for you. However, if you're looking for a simple, reliable way to convert hours of audio into great-looking videos with some simple branding and preset customization options, AudioRender is happy to serve. 😎",
        },
        {
            title: 'Is this private? How does my data get used?',
            text: "Yes, it's fully private. The application is fully local. The only data we collect is your e-mail and very basic device detection and that is only for the purpose of license verification and device registration in order to prevent abuse. There is literally no way for us to see what audio files you're using, what images you upload, what videos you create, etc. We do not sell user data and our business model is entirely based on license sales.",
        },
        {
            title: 'Is there a device limit?',
            text: 'Not technically. We understand workflows can vary greatly and sometimes you need to hop around your machines - please use AudioRender comfortably and without worry. However, activating AudioRender on a device will REGISTER that device. We do not intend to act on this information in particular, but if we detect any obvious cases of license sharing or abuse - like one license being installed on dozens of machines - we reserve the right to take action by imposing ad-hoc device limits on users or by deactivating licenses entirely.',
        },
        {
            title: 'Is there a version for Intel Macs? Or Windows / Linux?',
            text: "No. We currently have no plans to expand to other platforms as of now because of limited resources, but we've selected our technology stack to be relatively compatible with other architectures if there is a demand. Please let us know if you'd like to see a version for your platform by contacting us.",
        },
        {
            title: 'Are there educational discounts?',
            text: 'Yes, please contact us. We may be able to arrange discounts for educational institutions that need to use AudioRender on many devices.',
        },
    ];
    return (
        <Accordion type="single" collapsible>
            {faqSections.map((section, index) => (
                <AccordionItem
                    value={section.title}
                    key={`faq-section-${section}`}
                    className={`border-0 pr-4 transition-all hover:bg-neutral-800 hover:pl-4`}
                >
                    <AccordionTrigger className={`font-inter text-xl lg:text-3xl`}>{section.title}</AccordionTrigger>
                    {section.content ? (
                        <AccordionContent className={`font-inter rounded bg-neutral-800 p-10 text-lg lg:text-2xl`}>{section.content}</AccordionContent>
                    ) : (
                        <AccordionContent className={`font-inter rounded bg-neutral-800 p-10 py-4 pb-10 text-xl lg:text-2xl text-neutral-200`}>
                            {section.text}
                        </AccordionContent>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default FAQSection;
