export default function AboutMePage() {
    return (
        <div className='content !max-w-[1224px] mt-16 max-sm:mt-8 max-sm:items-center'>
                <div className="max-w-[250px]">
                    <img alt="My picture" src="./portrait.png" />
                </div>
            <ul className="sm:list-disc list-inside w-full text-3xl [&>li>span]:text-white">
                <li><span>Frameworks:</span> React.js, Svelte(Kit), Vue.js, Next.js, Nuxt.js</li>
                <li><span>Languages:</span> JavaScript, TypeScript, CSS/SASS/SCSS, HTML5, C++/C#, Python, Golang, SQL, JSON</li>
                <li><span>Styling & UI:</span> Tailwind CSS, Storybook</li>
                <li><span>Testing:</span> React/Svelte Testing Library, Vitest, Playwright</li>
                <li><span>APIs:</span> GraphQL (Apollo), REST</li>
                <li><span>CMS:</span> Commercetools, Contentful, Hygraph</li>
                <li><span>DevOps & Cloud:</span> AWS, Vercel</li>
                <li><span>Database:</span> MySQL</li>
                <li><span>Version Control & PM:</span> Git, Jira, Trello, Asana, Wrike</li>
            </ul>
            <div className="text-3xl">
                <p>
                    I am an experienced Frontend Developer with a focus on accessibility and SEO-friendly practices. Proficient in React, Svelte, TypeScript, JavaScript, Next.js and with expertise in developing design systems with Storybook. Additionally, I have expanded my skill set to include Vue.js development. Successfully delivered various projects throughout my career.
                </p>
            </div>
            <div className='flex justify-between gap-4 w-full'>
                <a href='/' className="text-3xl hover:text-white">&lt; <span className="underline">Home</span></a>
                <a href='/projects' className="text-3xl hover:text-white"><span className="underline">Projects</span> &gt;</a>
            </div>
        </div>
    )
}