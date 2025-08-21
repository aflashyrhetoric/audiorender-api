import SiteFooter from '@/components/site-footer';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function Terms() {
    return (
        <>
            <Head title="AudioRender - Terms of Use">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=alegreya-sans:100,400,700,900|inter:400,500,600|amaranth:400,700" rel="stylesheet" />
            </Head>
            <div className="gradient-dark flex flex-col items-center text-white">
                <main className={`fc min-h-[80vh] max-w-[80vw] flex-col space-y-4 p-10 text-xl`}>
                    <h1 className={`text-2xl font-bold tracking-tight`}>AudioRender Terms and Conditions Effective Date: July 11, 2025</h1>

                    <p>
                        Welcome to AudioRender. By purchasing, downloading, or using the AudioRender software (“Software”), you agree to the following
                        terms and conditions. If you do not agree, do not use the Software.
                    </p>
                    <p>
                        1. License<br /> AudioRender is licensed, not sold. Your purchase grants you a non-exclusive, non-transferable license to use the
                        Software. There is currently no device limit, but excessive or abusive use may result in license deactivation or additional
                        usage restrictions.
                    </p>
                    <p>
                        2. Usage Restrictions You agree not to: <br />
                        - Copy, share, rent, lease, or redistribute the Software or your license key.<br />
                        - Reverse engineer, decompile, or attempt to extract the Software’s source code.<br />
                        - Use the Software for any unlawful or harmful purposes.<br />
                        - Circumvent, disable, or interfere with licensing mechanisms or software security features.<br />
                    </p>
                    <p>
                        3. Refund Policy <br />Due to the nature of the Software (single-use or batch-use conversion functionality), refunds are only
                        available within 14 days of purchase, and only if the license key has not been registered. If a license has already been
                        activated, we are unable to offer refunds except in rare, exceptional cases at our sole discretion. Please evaluate carefully
                        before purchasing.
                    </p>
                    <p>
                        4. Software Updates and Support<br /> The Software is provided “as-is” with no guarantee of updates or future features. We aim to
                        provide reasonable support via email, but response times and issue resolution are not guaranteed.
                    </p>
                    <p>
                        5. AI Features Disclaimer<br /> Some future versions of the Software may include AI-assisted features (such as transcription). These
                        tools may be imperfect or inaccurate. You are solely responsible for reviewing and verifying any AI-generated content.
                    </p>
                    <p>
                        6. Privacy<br /> The Software collects only your email address for license verification. We do not collect or share personal
                        information from your device, nor do we use tracking or analytics in the app. The website may use standard marketing analytics
                        tools. These are covered in a separate Website Privacy Policy.
                    </p>
                    <p>
                        7. Termination<br /> We reserve the right to deactivate any license found to be in violation of these terms, including but not
                        limited to abuse, fraud, or sharing of keys.
                    </p>
                    <p>
                        8. Governing Law<br /> These Terms are governed by the laws of the State of New York. Any legal disputes must be resolved in the
                        courts of New York.
                    </p>
                    <p>9. Contact For any questions or support, please contact Kevin Oh at contact@audiorender.app.</p>
                </main>
                <a href={'/'} className="mt-10">
                    <Button>Return Home</Button>
                </a>
                <div className="hidden h-16 lg:block"></div>
                <SiteFooter />
            </div>
        </>
    );
}
