export default function AboutMePage() {
    return (
        <div className='content !max-w-[1224px] mt-16 max-sm:mt-8 max-sm:items-center'>
                <div className="max-w-[250px]">
                    <img alt="My picture" src="./portrait.png" />
                </div>
            <ul className="sm:list-disc list-inside w-full text-3xl [&>li>span]:text-white">
                <li><span>Languages:</span> Javascript/Typescript, Golang, Python </li>
                <li><span>Frontend:</span> React, Svelte, Vue.js, Javascript/TypeScript, Next.js/Nuxt.js, HTML, CSS/SASS/SCSS, Tailwind, Storybook</li>
                <li><span>Backend / APIs:</span> Node.js, Express.js, GraphQL, REST, PostgreSQL, MySQL, SQL</li>
                <li><span>Testing:</span> React/Svelte Testing Library, Vitest, Playwright</li>
                <li><span>Tools:</span> AWS, Vercel, Contentful, Commercetools, Git, Jira, Trello, Asana, Wrike</li>
            </ul>
            <div className="text-3xl">
                <p>
                    Full Stack Developer with 4+ years of experience in building scalable, high-performance web applications using
                    modern technologies such as React, Javascript / Typescript, Node.js, and GraphQL. Proven expertise in frontend
                    development with Svelte, Vue.js, and Next.js, and a background in backend development, API integration, and
                    database management. Skilled in optimizing application performance, enhancing user experience, and
                    implementing robust testing and CI/CD pipelines. Collaborative team player with a track record of delivering pixelperfect designs and maintaining brand consistency across e-commerce platforms. Passionate about creating
                    efficient, maintainable code and continuously improving development processes.
                </p>
            </div>
            <div className='flex justify-between gap-4 w-full'>
                <a href='/' className="text-3xl hover:text-white">&lt; <span className="underline">Home</span></a>
                <a href='/projects' className="text-3xl hover:text-white"><span className="underline">Projects</span> &gt;</a>
            </div>
        </div>
    )
}