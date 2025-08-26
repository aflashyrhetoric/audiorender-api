import SiteFooter from '@/components/site-footer';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function RefundPolicy() {
    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6 text-gray-800">
            <h1 className="text-3xl font-bold">Refund Policy</h1>

            <p>
                At AudioRender, we strive to offer software that is both powerful and accessible. Because our product can be used as a one-time-use, instantly accessible tool, we have specific guidelines around refunds to ensure fairness and to protect against abuse.
            </p>

            <h2 className="text-xl font-semibold">Eligibility for Refunds</h2>
            <ul className="list-disc list-inside space-y-2">
                <li>
                    Refunds are available within <strong>14 days</strong> of purchase <em>only if the license key has not been activated</em> in the AudioRender application.
                </li>
                <li>
                    Activation is defined as entering and verifying your license key within the app interface.
                </li>
                <li>
                    Exceptions may be made in cases where the software fails to function as described, and a reasonable effort has been made to resolve the issue. We reserve the right to make exceptions at our own discretion, and software is provided "as is".
                </li>
            </ul>

            <h2 className="text-xl font-semibold">Abuse Prevention</h2>
            <p>
                We'll be frank - due to the nature of AudioRender as a utility that enables batch conversion, the potential for one-time misuse is high. To protect the integrity of the product and its users, we cannot offer refunds once the license has been used.
            </p>

            <h2 className="text-xl font-semibold">How to Request a Refund</h2>
            <p>
                To initiate a refund request, please contact us via email at <strong>support@audiorender.app</strong>. Please include your purchase details and any relevant context.
            </p>

            <p>
                We aim to review all refund requests within <strong>5–7 business days</strong>. Once a decision has been made, please note that actual fund reversals are handled by Stripe and may take additional time depending on your payment method and financial institution. That part is out of our control.
            </p>

            <h2 className="text-xl font-semibold">Ineligible Refund Situations</h2>
            <ul className="list-disc list-inside space-y-2">
                <li>License keys that have already been activated.</li>
                <li>Purchases made through unauthorized third parties or resellers (which are not permitted).</li>
                <li>Failure to review or meet clearly listed system requirements (shown on our homepage).</li>
            </ul>

            <h2 className="text-xl font-semibold">International Users</h2>
            <p>
                At this time, AudioRender is intended for use primarily within the United States. International users are welcome, but we do not offer country-specific refund guarantees (e.g., EU digital goods policies). By purchasing, you agree to our terms as defined here.
            </p>
        </div>
    );
}
