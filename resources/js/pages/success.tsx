import { Head } from '@inertiajs/react';
// @ts-ignore

import SiteFooter from '@/components/site-footer';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { LuArrowLeft } from 'react-icons/lu';

export default function Welcome() {
    const ref = useRef(null);
    const secondSectionIsInView = useInView(ref);

    return (
        <>
            <Head title="Payment Successful!">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=alegreya-sans:100,400,700,900|inter:400,500,600|amaranth:400,700" rel="stylesheet" />
            </Head>
            <div className="gradient-dark flex flex-col items-center text-white">
                <main className={`fc min-h-screen`}>
                    <div className={`tac`}>
                        <div className={`gradient-blue animate rounded-xl p-24 mb-12`}>
                            <h2 className={`mb-8 text-4xl font-bold`}>Your payment was successfully processed. 🎉</h2>
                            <p className={`text-lg`}>
                                Please check your email for your License Key and instructions on how to proceed with activation.
                            </p>
                            <p className={`mt-4 text-neutral-300`}>If you do not see an e-mail, check your Spam or Junk folder.</p>
                        </div>
                        <p className={``}>Thank you for supporting AudioRender's development.</p>
                        <p className={`mt-5 mb-12`}>
                            For customer support, reach out to <strong>contact@audiorender.app</strong>.
                        </p>

                        <a className={`ific inline-block text-2xl font-bold`} href={'/'}>
                            <LuArrowLeft className={`ific`} />
                            Return Home
                        </a>
                    </div>
                </main>
                <div className="hidden h-16 lg:block"></div>
                <SiteFooter />
            </div>
        </>
    );
}
