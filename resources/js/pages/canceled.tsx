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
            <Head title="Payment canceled.">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=alegreya-sans:100,400,700,900|inter:400,500,600|amaranth:400,700" rel="stylesheet" />
            </Head>
            <div className="gradient-dark flex flex-col items-center text-white">
                <main className={`fc min-h-screen`}>
                    <div className={`tac`}>
                        <div className={`bg-neutral-800 animate rounded-xl p-24 mb-12`}>
                            <h2 className={`mb-8 text-4xl font-bold`}>The transaction was canceled. ✅</h2>
                            <p className={`text-lg`}>
                                No further action is required.
                            </p>
                        </div>
                        <p className={`font-bold`}>Not what you were expecting?</p>
                        <p className={`mt-5 mb-12`}>
                            <strong>
                                Don&apos;t worry.
                            </strong>{" "}
                            Reach out to <strong>contact@audiorender.app</strong> and let us know what happened.
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
