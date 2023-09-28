import Image from 'next/image'
import About from '../content/about.mdx'

export default function Page() {
    return (
        <div className='text-center text-2xl py-8 w-4/5 m-auto'>
            <About />
        </div>
    )
}