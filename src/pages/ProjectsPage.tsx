export default function ProjectsPage() {
    return (
        <div className='content mt-16 max-sm:mt-8'>
            <h2 className="title self-center">My Projects</h2>
            <ul className="text-3xl max-sm:text-2xl">
                <li className="flex flex-col gap-4">
                    <div className="max-h-[36px] overflow-hidden">----------------------------------------------------------------</div>
                    <p><b>Alinta </b> - <a className="underline hover:text-white" target="_blank" href="https://www.alintaenergy.com.au/" rel="noreferrer">Link</a></p>
                    <p><b>Key tools & Technologies:</b> Svelte, SvelteKit, Typescript, Tailwind, HTML5, Storybook, Vitest, AWS, Vercel, Asana, Trello, Jira</p>
                    <p><b>Description:</b> We developed a solution to help our client boost conversions on Australia's east coast. Our team created a custom checkout widget, designed to enhance the customer experience, which was seamlessly integrated into the client's website using our in-house product.</p>
                </li>
                <li className="flex flex-col gap-4">
                    <div className="max-h-[36px] overflow-hidden">----------------------------------------------------------------</div>
                    <p><b>Beany </b> - <a className="underline hover:text-white" target="_blank" href="https://www.beany.com/en-au" rel="noreferrer">Link</a></p>
                    <p><b>Key tools & Technologies:</b> React.js, Typescript, SCSS, HTML5, Next.js, Contentful, Storybook, React Testing Library, Wrike</p>
                    <p><b>Description:</b> A solution provided for a progressive business accounting firm based in New Zealand, to enhance their digital platform and deliver a seamless, stress-free experience for their clients. The project had to be delivered in a short period of time and was successfully done so.</p>
                </li>
                <li className="flex flex-col gap-4">
                    <div className="max-h-[36px] overflow-hidden">----------------------------------------------------------------</div>
                    <p><b>Generate Kiwisaver </b> - <a className="underline hover:text-white" target="_blank" href="https://www.generatewealth.co.nz/" rel="noreferrer">Link</a></p>
                    <p><b>Key tools & Technologies:</b> VueJS, Typescript, Hygraph, Tailwind, HTML5, Nuxt.js, Storybook, GraphQL API, Jira, Wrike</p>
                    <p><b>Description:</b> Engaged with a prestigious New Zealand-based KiwiSaver Scheme and wealth manager, to create an innovative digital platform that aligns with their mission of delivering exceptional long-term performance and impactful investments. To be able to work on this project I had to quickly learn Vue.js.</p>
                </li>
                <li className="flex flex-col gap-4">
                    <div className="max-h-[36px] overflow-hidden">----------------------------------------------------------------</div>
                    <p><b>Hastings Deering</b> - <a className="underline hover:text-white" target="_blank" href="https://hastingsdeering.com.au/" rel="noreferrer">Link</a></p>
                    <p><b>Key tools & Technologies:</b> ReactJS, Typescript, Tailwind, HTML5, Next.js, Storybook, GraphQL API, Jira, Wrike</p>
                    <p><b>Description:</b> Hastings Deering is Australia's top Caterpillar equipment supplier, dominating the machinery sector. I was deeply involved in developing the headless solution for their project, implementing key features and optimizing performance.</p>
                </li>
                <li className="flex flex-col gap-4">
                    <div className="max-h-[36px] overflow-hidden">----------------------------------------------------------------</div>
                    <p><b>Jaycar </b> - <a className="underline hover:text-white" target="_blank" href="https://www.jaycar.com.au/" rel="noreferrer">Link</a></p>
                    <p><b>Key tools & Technologies:</b> Carrots, ReactJS, Typescript, Tailwind, HTML5, Next.js, Storybook, Apollo GraphQL, Playwright, Jira, Wrike</p>
                    <p><b>Description:</b> Australia-based retailer dealing in electronic components and related products for electronics enthusiasts. The site is built with the help of our Headless e-commerce accelerator called Carrots.</p>
                </li>
                <li className="flex flex-col gap-4">
                    <div className="max-h-[36px] overflow-hidden">----------------------------------------------------------------</div>
                    <p><b>Petbarn </b> - <a className="underline hover:text-white" target="_blank" href="https://www.petbarn.com.au/" rel="noreferrer">Link</a></p>
                    <p><b>Key tools & Technologies:</b> Carrots, Vue Storefront, Commercetools, React.js Next.js, Typescript, HTML5, Storybook, Jira, Wrike</p>
                    <p><b>Description:</b> Australasia's largest integrated consumer facing pet care company. The site is built with the help of our Headless e-commerce accelerator called Carrots.</p>
                </li>
                <li className="flex flex-col gap-4">
                    <div className="max-h-[36px] overflow-hidden">----------------------------------------------------------------</div>
                    <p><b>Carrots </b></p>
                    <p><b>Key tools & Technologies:</b> React.js, Typescript, SCSS, HTML5, Next.js, Storybook, React Testing Library, GraphQL API, Wrike</p>
                    <p><b>Description:</b> Headless e-commerce accelerator, it’s built on top of Next.js and with help of previously created internal design system</p>
                    <div className="max-h-[36px] overflow-hidden">----------------------------------------------------------------</div>
                </li>
            </ul>
            <div className='flex justify-between gap-4'>
                <a href='/' className="text-3xl hover:text-white">&lt; <span className="underline">Home</span></a>
                <a href='/about-me' className="text-3xl hover:text-white"><span className="underline">About Me</span> &gt;</a>
            </div>
        </div>
    )
}