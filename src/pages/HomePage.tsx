import { TypeAnimation } from "react-type-animation"
import { ContactUs } from '../components/ContactUs'

export default function HomePage() {
    return (
        <div className='content'>
            <header className='header'>
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
                    '> Wake up, Neo...',
                    2000,
                    '> I make websites',
                    1000,
                    '> I optimize website performance',
                    1000,
                    '> I design accessible interfaces',
                    1000,
                    '> I build digital experiences',
                    1000,
                    '> I make websites.',
                    1000,
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