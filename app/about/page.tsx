import Image from 'next/image'
import About from '../content/about.mdx'
import AnimatedRoutes from '../animatedRoutes'

export default function Page() {
    return (
        <AnimatedRoutes>
        <div className='text-center text-2xl py-8 w-4/5 m-auto'>
            <About />
        </div>
        </AnimatedRoutes>
    )
}