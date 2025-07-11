import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';

type Props = {
    className?: string;
};

const FAQSection: React.FC<Props> = ({ className = '' }: Props) => {
    const faqSections = [
        {
            title: 'How does AudioRender work?',
            text: 'Upload your mp3 files into the application. Select an image and an output location. The image will be used as the "background" for the audio and you\'ll have an mp4 ready for upload wherever you like. Later, we plan to support both video templates and the use of a looping video instead of a still/static image.',
            content: (
                <div>
                    <ol className={`list-decimal space-y-3 pl-5`}>
                        <li>
                            <span className={`mr-1 font-bold`}>Upload your mp3 files.</span>You can upload however many files you&apos;d like. Each one will be turned into its OWN video.
                        </li>
                        <li>
                            <span className={`mr-1 font-bold`}>Upload an image - jpg or png.</span> This will be used on every frame, as the background for the video.
                        </li>
                        <li>
                            <span className={`mr-1 font-bold`}>Select an Output Folder.</span>
                        </li>
                        <li>
                            <span className={`mr-1 font-bold`}>Click Begin Render,</span> and simply wait for your computer to finish processing. It can take some time depending on your machine, so be patient!
                        </li>
                        <li>
                            <span className={`mr-1 font-bold`}>Done!</span> You&apos;re ready to upload your videos wherever you like.
                        </li>
                    </ol>
                </div>
            ),
        },
        {
            title: 'Does this support bulk video creation?',
            text: 'Yes! Many "audio-only" podcasts have a backlog of MP3 files with no easy way to create videos from them. AudioRender lets you easily make dozens of videos at once, with ease.',
        },
        {
            title: 'What customization options are available?',
            text: 'As of now, you can only use a static image that you import into the program. We soon plan to have a variety of templates, the option to use a looping video instead of a still image, as well as "add-on" effects like waveforms, baked-in captions, and more.',
        },
        {
            title: 'Is this private? How does my data get used?',
            text: 'Yes. The application is fully local and private. The only data we collect is your e-mail and very basic device detection and that is only for the purpose of license verification and device registration in order to prevent abuse.',
        },
        {
            title: 'Is there a device limit?',
            text: 'Not technically. We understand workflows can vary greatly and sometimes you need to hop around your machines - please use AudioRender comfortably and without worry. However, activating AudioRender on a device will REGISTER that device. We do not intend to act on this information in particular, but if we detect any obvious cases of license sharing or abuse - like one license being installed on dozens of machines - we reserve the right to take action by imposing ad-hoc device limits on users or by deactivating licenses entirely.',
        },
        {
            title: 'Is there a version for Intel Macs? Or Windows / Linux?',
            text: "No. We currently have no plans to expand to other platforms as of now because of limited resources, but we've selected our technology stack (Tauri) specifically to be compatible with other platforms if there is a demand. Please let us know if you'd like to see a version for your platform by contacting us.",
        },
        {
            title: 'Are there bulk discounts for teams?',
            text: 'Yes, please contact us. We can arrange ad-hoc discounts for teams that need to use AudioRender on many devices.',
        },
        {
            title: 'Are there educational discounts?',
            text: 'Yes, please contact us. We can arrange significant discounts for educational institutions that need to use AudioRender on many devices.',
        },
        {
            title: 'Why should I use AudioRender over _______?',
            text: "Our . AudioRender is local software. Use it free with some limitations forever, or purchase it once, and it's yours. All processing happens on your device. While many similar applications have overlap with ours, they are often web-based, meaning you have to upload your MP3 files and download files once they're ready.",
            content: (
                <div>
                    <p className={`mb-5 text-2xl`}>Fair question. Here are some of AudioRender&apos;s strengths:</p>
                    <ol className={`list-decimal space-y-2 pl-5`}>
                        <li>
                            <span className={`mr-1 font-bold`}>Free for short audio files. One-time payment for everything else.</span>AudioRender is
                            not a SaaS application. Use it free forever for audio files under 10 minutes, or unlock all available features with a
                            one-time purchase. No subscription required.
                        </li>
                        <li>
                            <span className={`mr-1 font-bold`}>Local-first. Bulk-friendly.</span>AudioRender processes everything locally on your
                            device. Whether you need 1 video or 100, you can do it all. Web-based services often enforce monthly credits and other
                            types of limitations.
                        </li>
                        <li>
                            <span className={`mr-1 font-bold`}>Simplicity.</span>AudioRender has essentially no learning curve.
                        </li>
                        <li>
                            <span className={`mr-1 font-bold`}>All future updates included.</span>All future updates to AudioRender will be included as a free update. If and when we decide to release a true successor app (e.g. AudioRender 2.0), we will offer a significant discount to existing users. (But that will not be for many, many years, if ever.)
                        </li>
                    </ol>
                </div>
            ),
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
