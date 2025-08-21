import SiteFooter from '@/components/site-footer';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function Privacy() {
    return (
        <>
            <Head title="AudioRender - Privacy Policy">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=alegreya-sans:100,400,700,900|inter:400,500,600|amaranth:400,700" rel="stylesheet" />
            </Head>
            <div className="gradient-dark flex flex-col items-center text-white">
                <main className="fc min-h-[80vh] max-w-[80vw] flex-col space-y-4 p-10 text-xl">
                    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

                    <p><strong>Effective Date:</strong> July 11, 2025</p>

                    <p>This Privacy Policy explains how AudioRender ("we", "us", "our") collects, uses, and safeguards your information when you use our software or visit our website.</p>

                    <p>By using AudioRender, you agree to the terms of this policy.</p>

                    <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>Email Address:</strong> Collected during license registration.</li>
                        <li><strong>License Key:</strong> Stored and associated with your email.</li>
                        <li><strong>Device/System Data:</strong> Not currently collected, but may be in the future.</li>
                        <li><strong>Usage Logs:</strong> Not currently retained, but may be logged in future releases.</li>
                        <li><strong>Website Analytics:</strong> Our website may use Google Analytics or cookieless alternatives.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
                    <ul className="list-disc list-inside">
                        <li>Validate your license and provide software access</li>
                        <li>Send transactional emails</li>
                        <li>Respond to support requests</li>
                        <li>Analyze usage or detect misuse (future possibility)</li>
                        <li>Future newsletter use may involve third-party data processors</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">3. Data Storage</h2>
                    <ul className="list-disc list-inside">
                        <li>Stored in a secure MySQL database</li>
                        <li>Not encrypted at rest</li>
                        <li>Stored indefinitely unless deletion is requested</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">4. Sharing with Third Parties</h2>
                    <ul className="list-disc list-inside">
                        <li>With Stripe for payment processing</li>
                        <li>With email or analytics tools as needed</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">5. Cookies and Tracking</h2>
                    <p>Our website may use cookies or cookieless tracking. We will update this policy when systems change.</p>

                    <h2 className="text-2xl font-semibold mt-6">6. Data Access and Deletion</h2>
                    <p>Email us to request deletion. We honor requests but do not guarantee specific timelines.</p>

                    <h2 className="text-2xl font-semibold mt-6">7. Children</h2>
                    <p>AudioRender is not intended for users under 13. We do not knowingly collect data from children.</p>

                    <h2 className="text-2xl font-semibold mt-6">8. Legal Jurisdiction</h2>
                    <p>This policy is governed by the laws of New York State, United States.</p>

                    <h2 className="text-2xl font-semibold mt-6">9. Changes to This Policy</h2>
                    <p>We may update this policy from time to time. The latest version will always be available in the app or on our website. Continued use implies acceptance.</p>
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
