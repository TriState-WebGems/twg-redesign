'use client'

import Link from 'next/link'
import Time from '../components/time'
import Image from 'next/image'
import img from '../viv0dd.webp'
import img2 from '../gemafawell.webp'
import dev from '../dev.webp'
import maintenance from '../maintenance.webp'
import seo from '../seo.webp'
import Greeting from '../components/date'
import AnimatedRoutes from '../animatedRoutes'

export default function Page() {
  return (
    <AnimatedRoutes>
      <div className='w-full h-full'>
      <section suppressHydrationWarning={true} className="flex flex-col justify-center items-center bg-gray-300 text-black text-xl h-20">
        Welcome! The time is <Time />.
        <Greeting />
      </section>
      <section className="flex flex-row justify-around items-center bg-purple-600 text-light text-xl h-20">
        <div className="flex flex-col justify-center text-center items-center">
          <h2 className="text-2xl">Hey! We&apos;re Texas WebGems.</h2>
          <p className="text-lg">We&apos;re a web development company based in Austin, TX.</p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center bg-black text-light text-xl py-8">
        <h2 className="text-2xl pb-8">Our services include:</h2>
        <ul className="flex flex-row w-4/5 justify-around items-center">
          <li className="flex flex-col justify-center items-center">
            <Image priority={false} className='rounded-md' src={dev} alt="Web Development" width={200} height={200} />
            <p>Web Development</p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <Image className='rounded-md' src={maintenance} alt="Website Maintenance" width={200} height={200} />
            <p>Website Maintenance</p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <Image className='rounded-md' src={seo} alt="SEO Optimization" width={200} height={200} />
            <p>SEO Optimization</p>
          </li>
        </ul>
      </section>
      <section className="bg-yellow-300 text-black text-xl py-8">
        <h2 className="text-2xl text-center pb-8">Our Work</h2>
        <section className="flex flex-row justify-around items-center w-4/5 m-auto">
          <div className='flex flex-col justify-center items-center'>
            <Image className='rounded-xl' src={img} alt="Odd Thoughts, a Blog by vivacious0dd" width={400} height={200} />
            <Link className='text-xl text-purple-700' href="https://vivacious0dd.blog">Odd Thoughts, a Blog by vivacious0dd</Link>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <Image className='rounded-xl' src={img2} alt="GemAfaWell" width={400} height={200} />
            <Link className='text-xl text-purple-700' href="https://gemafawell.dev">GemAfaWell Dev Portfolio</Link>
          </div>
        </section>
      </section>
      <section className="flex flex-col justify-center items-center bg-gray-300 text-black text-xl py-8">
        <h2 className="text-2xl pb-4">Testimonials</h2>
        <div className="w-4/5">
          <blockquote className="flex flex-col justify-center items-center bg-gray-700 text-white text-xl p-4 rounded-xl">
            <p>&lsquo;Texas WebGems did a fantastic job creating my blog. Communication was fast and easy, I was able to get clarify on where we were on the project within 24 hours. The owner, Gem was a delight to work with, I wound up wanting some extra features after the project was completed and they were quick to accommodate. I&apos;ll be using them again for future projects!&rsquo;</p>
            <cite>- <Link href="https://twitter.com/vivacious0dd" className='text-yellow-400 underline'>vivacious0dd</Link>, Odd Thoughts</cite>
          </blockquote>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center bg-purple-900 text-light text-xl h-40">
        <h2 className="text-2xl">Want to work with us?</h2>
        <p>Fill out our <Link href="/contact" className='text-yellow-400 underline'>contact form</Link>!</p>
      </section>
    </div>
    </AnimatedRoutes>
  )
}