import Image from 'next/image'
import img from '../frontendgems.webp'
import Link from 'next/link'
import AnimatedRoutes from '../animatedRoutes'

export default function Page() {
    return (
        <AnimatedRoutes>
            <div className='text-center text-2xl py-8 w-4/5 m-auto'>
                <h2 className='text-2xl'>Our Blog</h2>
                <p className='text-gray-300 text-lg'>Our founder, Gem, contributes to a blog called Front End Gems. They&apos;ll be exploring perspectives and changes in the web development world, as well as posting tutorials for developers looking to learn and build new things! Go ahead and check it out!</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center w-4/5 m-auto pb-8'>
                <Link href='https://frontendgems.substack.com' target='_blank'>
                    <Image className='rounded-lg' src={img} alt='Front End Gems' width={300} height={300} />
                </Link>
            </div>
        </AnimatedRoutes>
    )
}