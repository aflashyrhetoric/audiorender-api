import React from 'react';

type Props = {
    className?: string;
};

const SiteFooter: React.FC<Props> = ({ className = '' }: Props) => {
    return (
        <>
            <>
                <footer className={`w-full`}>
                    <div className={`bg-gray-800 grid12 p-2 lg:p-10 text-neutral-200`}>
                        <div className={`cs-12 lg:cs-4 space-y-5`}>
                            <p className={`text-sm font-bold`}>Developed with ❤️ and 🍜 by Kevin Oh</p>
                            <iframe
                                width="380"
                                className={`max-w-full`}
                                height="38"
                                style={{ border: 0 }}
                                src="https://climate.stripe.com/badge/4t34HZ?theme=dark&size=small&locale=en-US"
                            ></iframe>
                            <a
                                target="_blank"
                                rel="noreferrer noopener"
                                className={`text-white underline`} href={"https://climate.stripe.com/q4qsIY"}>AudioRender 🤝 Stripe Climate</a>
                        </div>
                        <div className={`cs-12 lg:cs-8 font-inter font-medium text-sm py-5`}>
                            <ul className={`inline-flex gap-2 w-full flex-col justify-between`}>
                                <li className={`inline`}>
                                    <a href="/terms">Terms of Use</a>
                                </li>
                                <li className={`inline`}>
                                    <a href="/privacy">Privacy Policy</a>
                                </li>
                                <li className={`inline`}>
                                    <a href="/refund">Refund Policy</a>
                                </li>
                                <li className={`inline`}>
                                    <p>For customer support, data deletion requests, refund requests, or general inquiries, email contact@audiorender.app</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </>
        </>
    );
};

export default SiteFooter;
