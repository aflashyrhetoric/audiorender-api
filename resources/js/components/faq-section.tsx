import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';

type Props = {
    className?: string;
};

const FAQSection: React.FC<Props> = ({ className = '' }: Props) => {
    const faqSections = [
        {
            title: 'What is AudioRender?',
            text: 'AudioRender is a macOS app that lets you drop in an MP3 file and create simple, upload-ready videos with waveforms and transcriptions in a few clicks.',
        },
        {
            title: 'My video renders but it\'s completely black.',
            text: 'If you used the Template Editor and rendered a template, this may happen, but it\'s not a bug! Note that we do not provide a default background, so your template (which usually has black/dark colored text and waveforms) may be rendering on top of a black background. To fix this, simply add a background image. Or, you can add a Solid color element, maximize it, and send it to the bottom layer.',
        },
        {
            title: 'Why is the first render so slow?',
            text: 'Some things need to be downloaded and set up behind the scenes. They are essential to the core rendering functionality. You only need to do this once, and sometimes when you need a new version.',
        },
        {
            title: "My first render isn't working.",
            text: 'Please see the above FAQ item. If you do not have internet access, are on a VPN, or on a restricted network, it may fail. Please ensure you have a stable internet connection and try again. If it repeatedly fails, please try re-downloading the application and trying again. If it still fails, please contact our support at contact@audiorender.app.',
        },
        {
            title: 'Is there a free version?',
            text: 'The trial version is free, with some limitations. Audio file duration is limited to under 10 minutes. Only the static image + looping video configurations are enabled. Audiograms - including waveform and transcription - are not available. We hope this allows those with simpler use-cases to comfortable use AudioRender for free, while allowing us to support ourselves as a business.',
        },
        {
            title: 'What comes with a premium license?',
            text: 'No limits. All current and future features will be unlocked. Audiogram-style videos will be unlocked, granting access to templates with waveforms and caption support. Custom templates are also unlocked, letting you build your own templates from scratch.',
        },
        {
            title: 'How does this compare to ________?',
            text: "First, this is not another subscription - AudioRender is a macOS app with a free tier. Premium features are unlocked with a one-time payment. We also prioritize ease-of-use. If you're looking for fully-fledged video compositing software that lets you tweak your video to pixel-perfect perfection with blend modes and layering, AudioRender is probably not for you. Of course, we do have a template editor that lets you customize some things to fit your exporting needs and branding. However, if you're looking for a simple, reliable way to convert hours of audio into great-looking videos without too much hassle, AudioRender is going to be an excellent fit into your workflow. 😎",
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
            text: "No. We currently have no plans to expand to other platforms as of now. Please let us know if you'd like to see a version for your platform by contacting us.",
        },
        {
            title: 'Are there educational discounts?',
            text: 'Yes, please contact us. We may be able to arrange discounts for educational institutions that need to use AudioRender on many devices.',
        },
        {
            title: 'How can I contact customer support?',
            text: 'Send us an email at contact@audiorender.app.',
        },
    ];
    return (
        <Accordion type="single" collapsible>
            {faqSections.map((section, index) => (
                <AccordionItem
                    value={section.title}
                    key={`faq-section-${section.title}`}
                    className={`border-0 pr-4 transition-all hover:bg-gray-800 hover:pl-4`}
                >
                    <AccordionTrigger className={`font-inter text-xl lg:text-3xl`}>{section.title}</AccordionTrigger>
                    {section.content ? (
                        <AccordionContent className={`font-inter rounded bg-transparent p-10 text-lg lg:text-2xl`}>
                            {section.content}
                        </AccordionContent>
                    ) : (
                        <AccordionContent className={`font-alegreya rounded p-8 py-4 pb-10 text-xl text-neutral-200 lg:text-2xl`}>
                            {section.text}
                        </AccordionContent>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default FAQSection;
