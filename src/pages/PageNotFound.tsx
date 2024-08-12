export default function PageNotFound() {
    return (
        <div className='content mt-16 max-sm:mt-8 max-sm:items-center'>
            <div className="flex sm:gap-6 justify-center max-sm:flex-col">
                <h1 className="text-[12rem] leading-[12rem] max-sm:text-center">404</h1>
                <div className="flex flex-col justify-center">
                    <p className="text-[3rem] leading-[3rem]">Page not found</p>
                    <p className="text-[3rem] leading-[3rem]">Sorry, Neo...</p>
                </div>
            </div>
        </div>
    )
}