import { TypeAnimation } from "react-type-animation"

import emailjs from '@emailjs/browser';
import { FormEvent, useRef } from "react";

const ContactUs = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) {
            console.error("Form reference is not set.");
            return;
        }

        emailjs
            .sendForm('service_j5ajbl6', 'template_l0bhy9g', form.current as HTMLFormElement, {
                publicKey: 'RHe1GwwegW9F10MBh',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='contactForm'>
            <div className="flex items-center gap-8">
                <label htmlFor='name'>Name: </label>
                <input id='name' name='name' className='input' />
            </div>
            <div className="flex items-center gap-8">
                <label htmlFor='email'>Email: </label>
                <input required id='email' name='email' className='input' />
            </div>
            <div className="flex items-center gap-8">
                <label htmlFor='subject'>Subject: </label>
                <input id='subject' name='subject' className='input' />
            </div>
            <div className="flex items-start gap-8">
                <label htmlFor='message'>Message: </label>
                <textarea required id='message' name='message' className='input h-[55px] overflow-hidden' />
            </div>
            <div className="flex justify-between gap-8 mt-5 max-sm:flex-col max-sm:gap-4">
                <button className="border-2 text-3xl border-[#00dd00] py-[10px] px-[100px] pointer hover:bg-[#00dd00] hover:text-white" type="submit">SUBMIT</button>
                <button className="border-2 text-3xl border-[#00dd00] py-[10px] px-[100px] pointer hover:bg-[#00dd00] hover:text-white" type="reset">RESET</button>
            </div>
        </form>
    );
};

export default function HomePage() {
    const asciiArt = `
+==============================================================+
|                                                              |
|                        MYKYTA VITOKHIN                       |
|                                                              |
+==============================================================+`

    return (
        <div className='content'>
            <header className='header'>
                {/* <pre className='logo'>
                    {asciiArt}
                </pre> */}
                <h2 className="title">MYKYTA VITOKHIN</h2>
                <div>
                    <h4 className='title'>
                        <b>F</b>
                        RONTEND
                        <b> D</b>
                        EVELOPER
                    </h4>
                </div>
            </header>
            <nav className="flex gap-6 text-3xl max-sm:justify-center">
                <a href='/about-me' className="underline hover:text-white">About Me</a>
                <a href='/projects' className="underline hover:text-white">Projects</a>
            </nav>
            <TypeAnimation
                style={{ fontSize: '30px', minHeight: '90px' }}
                sequence={[
                    '> ',
                    2000,
                    '> I make webs',
                    200,
                    '> I make e-commerce websites',
                    1000,
                    '> I optimize website performance',
                    1000,
                    '> I design accessible interfaces',
                    1000,
                    '> I build digital experiences',
                    1000,
                    '> I make websites.',
                    2000,
                    '> I make websites!',
                    1000,
                ]}
                speed={50}
                repeat={1}
            />
            <div className='contactsBlock'>
                <a href='mailto:mykyta.vitokhin@gmail.com' target='_blank' rel='noreferrer'>mykyta.vitokhin@gmail.com</a>
                <a href='https://www.linkedin.com/in/mykyta-vitokhin/' target='_blank' rel='noreferrer'>linkedin.com/in/mykyta-vitokhin</a>
            </div>
            <ContactUs />
        </div>
    )
}