import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState } from "react";

const EMAIL_LIMIT = 3; // Set the limit for the number of emails a user can send
const TIMEOUT_HOURS = 3; // Set the timeout in hours before they can send emails again

export const ContactUs = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    
    const getSendCount = () => {
        const sendData = localStorage.getItem('emailSendData');
        if (sendData) {
            const { count, timestamp } = JSON.parse(sendData);
            const hoursPassed = (Date.now() - timestamp) / (1000 * 60 * 60);
            if (hoursPassed >= TIMEOUT_HOURS) {
                localStorage.removeItem('emailSendData');
                return 0;
            }
            return count;
        }
        return 0;
    };

    const updateSendCount = () => {
        const sendData = localStorage.getItem('emailSendData');
        let newCount = 1;
        if (sendData) {
            const { count, timestamp } = JSON.parse(sendData);
            newCount = count + 1;
            localStorage.setItem('emailSendData', JSON.stringify({ count: newCount, timestamp }));
        } else {
            localStorage.setItem('emailSendData', JSON.stringify({ count: newCount, timestamp: Date.now() }));
        }
    };

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (getSendCount() >= EMAIL_LIMIT) {
            setErrorMessage(`You have reached the limit of ${EMAIL_LIMIT} emails. Please try again later.`);
            return;
        }

        if (!form.current) {
            console.error("Form reference is not set.");
            return;
        }

        setIsLoading(true);
        setErrorMessage(null);

        // Add a 1-second delay before sending the email
        await new Promise(resolve => setTimeout(resolve, 1000));

        emailjs
            .sendForm('service_j5ajbl6', 'template_l0bhy9g', form.current as HTMLFormElement, {
                publicKey: 'RHe1GwwegW9F10MBh',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    updateSendCount();
                    form.current?.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setErrorMessage('Failed to send the email. Please try again.');
                },
            )
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div>
            <h4 className="text-4xl mb-4 max-sm:text-3xl">OR CONTACT ME VIA FORM</h4>
            <form ref={form} onSubmit={sendEmail} className="contactForm">
                {/* Your form inputs go here */}
                <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-0">
                    <label htmlFor="name">Name: </label>
                    <input id="name" name="name" className="input max-sm:h-[40px]" />
                </div>
                <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-0">
                    <label htmlFor="email">Email: </label>
                    <input required id="email" name="email" className="input max-sm:h-[40px]" />
                </div>
                <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-0">
                    <label htmlFor="subject">Subject: </label>
                    <input id="subject" name="subject" className="input max-sm:h-[40px]" />
                </div>
                <div className="flex items-start gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-0">
                    <label htmlFor="message">Message: </label>
                    <textarea required id="message" name="message" className="input min-h-[55px] max-sm:h-auto overflow-hidden" />
                </div>
                {errorMessage && (
                    <div className="text-red-500 mt-2 text-2xl">
                        {errorMessage}
                    </div>
                )}
                <div className="flex justify-between gap-2 mt-5 max-sm:flex-col max-sm:flex-col-reverse">
                    <button
                        className="border-2 text-3xl w-full border-[#00dd00] py-[10px] px-[20px] pointer hover:bg-[#00dd00] hover:text-white"
                        type="reset"
                        disabled={isLoading}
                    >
                        RESET
                    </button>
                    <button
                        className="border-2 text-3xl w-full border-[#00dd00] py-[10px] px-[20px] pointer hover:bg-[#00dd00] hover:text-white flex justify-center items-center"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="loader border-t-transparent border-4 border-white w-5 h-5 rounded-full animate-spin"></div>
                        ) : (
                            "SUBMIT"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};
