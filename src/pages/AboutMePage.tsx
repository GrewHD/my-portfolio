export default function AboutMePage() {
    return (
        <div className='content mt-16 max-sm:mt-8 max-sm:items-center'>
            <div className="max-w-[250px]">
                <img alt="My picture" src="./portrait.png" />
            </div>

            <div className="text-3xl">
                <p>I'm an experienced Front-End ReactJS Developer. I'm skilled in architecting design systems for seamless scalability and consistency.
                    I specialise in e-commerce solutions, leveraging cutting-edge technology to optimize user experience and drive conversions.
                </p>
                <br />
                <p>
                    Proficient in headless architecture for enhanced flexibility and scalability, I'm adept in Next.js for crafting dynamic,
                    SEO-friendly, and accessible applications. I utilize Storybook proficiently for streamlined UI component development and
                    have expanded my proficiency in Vue.js, enhancing website development.
                </p>
            </div>

            <div>
                <a href='/' className="text-3xl">&lt; <span className="underline">Back</span></a>
            </div>
        </div>
    )
}