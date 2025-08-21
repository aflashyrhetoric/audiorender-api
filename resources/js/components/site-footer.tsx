import React from 'react';

type Props = {
    className?: string;
};

const SiteFooter: React.FC<Props> = ({ className = '' }: Props) => {
    return (
        <>
            <>
                <footer className={`w-full`}>
                    <div className={`gradient-dark grid12 p-10 text-neutral-200`}>
                        <div className={`cs-4 space-y-5`}>
                            <p className={`text-sm font-bold`}>Developed with ❤️ by Kevin Oh</p>
                            <iframe
                                width="380"
                                height="38"
                                style={{ border: 0 }}
                                src="https://climate.stripe.com/badge/4t34HZ?theme=dark&size=small&locale=en-US"
                            ></iframe>
                        </div>
                        <div className={`cs-8 font-inter font-medium text-sm`}>
                            <ul className={`inline-flex w-full flex-col justify-between`}>
                                <li className={`inline`}>
                                    <a href="/terms">Terms of Use</a>
                                </li>
                                <li className={`inline`}>
                                    <a href="/privacy">Privacy Policy</a>
                                </li>
                                <li className={`inline`}>
                                    <a href="/refund">Refund Policy</a>
                                </li>
                            </ul>
                            <p>For customer support, data deletion requests, refund requests, or general inquiries, email contact@audiorender.app</p>
                        </div>
                    </div>
                </footer>
            </>
        </>
    );
};

export default SiteFooter;
