'use client'

import Link from 'next/link'
import Time from '../components/time'
import Image from 'next/image'
import dev from '@/public/dev.webp'
import maintenance from '@/public/maintenance.webp'
import seo from '@/public/seo.webp'
import Greeting from './date'
import AnimatedRoutes from '../animatedRoutes'

export default function Page() {
  return (
    <AnimatedRoutes>
      <div className='mx-auto mb-10 h-full'>
        <section suppressHydrationWarning={true} className="flex flex-col justify-center items-center bg-gradient-to-t from-slate-900 to-slate-950 text-gray-200 text-xl h-20">
          Welcome! The time is <Time />.
          <Greeting />
        </section>
        <section className="flex flex-row justify-around items-center bg-gradient-radial to-blue-900 from-gray-700 text-gray-200 text-xl h-20">
          <div className="flex flex-col justify-center text-center items-center font-semibold">
            <h2 className="text-2xl">Hey! We&apos;re Tri-State WebGems!</h2>
            <p className="text-lg">We&apos;re a web development and marketing firm serving the DMV region.</p>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black text-white text-xl py-8">
          <h2 className="text-2xl pb-8 font-semibold">Our services include:</h2>
          <ul className="flex flex-row w-4/5 justify-around items-center">
            <li className="flex flex-col justify-center items-center">
              <Image priority={false} className='rounded-md' src={dev} alt="a computer desk is pictured; an all-in-one Macbook stands at center; an iPhone sits on a stand to the right. The MacBook has magenta backlighting." width={192} height={192} />
              <p className='my-2'>Web Development</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <Image className='rounded-md' src={maintenance} alt="lines of JavaScript code" width={192} height={192} />
              <p className='my-2'>Website Maintenance</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <Image className='rounded-md' src={seo} alt="a notebook is positioned at a distance over a keyboard; the notebook is full of differing ideas centered around the phrase 'Amazon Optimizing.' Phrases include 'headline search ads,' 'sponsored product ads,' and 'amazon marketing services'. Two pencils are on top of the notebook, one with black color and one with red color." width={192} height={192} />
              <p className='my-2'>SEO Optimization</p>
            </li>
          </ul>
        </section>
        <section className="bg-gradient-to-b from-yellow-900 via-yellow-600 to-yellow-900 text-black font-semibold text-xl py-8">
          <h2 className="text-2xl text-center pb-8" id='#portfolio'>Portfolio</h2>
          <section className="flex flex-col justify-center items-center w-4/5 m-auto">
            <div className='flex flex-col justify-center items-center text-center'>
              <Link className='text-xl text-blue-800 drop-shadow-2xl' href="https://healthdata.dshs.texas.gov" target='_blank'>Texas DSHS Health Data (C#, Razor, Bootstrap, jQuery, JSON)</Link>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
              <Link className='text-xl text-blue-800 drop-shadow-2xl' href='https://www.gianinecarbonedesigns.com/' target='_blank'>Gianine Carbone Designs (Shopify Liquid, CSS, JavaScript)</Link>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
              <Link className='text-xl text-blue-800 drop-shadow-2xl' href='https://www.dshs.texas.gov/center-health-statistics/advanced-analytics-team' target='_blank'>DSHS Advanced Analytics Page (Drupal)</Link>
            </div>
            <div className='flex flex-col justify-center items-center text-center my-4'>
              <h3>I also built this site!</h3>
            </div>
          </section>
        </section>
        <section className="flex flex-col items-center justify-center bg-gradient-to-br from-purple-800 to-yellow-800 text-black text-xl py-8">
          <h2 className="text-2xl text-center text-white pb-4 font-semibold">Testimonials</h2>
          <div className="lg:w-3/5 col-span-2 sm:w-4/5 mx-auto">
            <blockquote className="flex flex-col justify-center items-center text-white text-xl p-4 rounded-xl bg-gradient-to-bl from-slate-800 to-yellow-800">
              <p>I found Gemini through a local online group, where someone had recommended her to help me with my website. I was really in a bind. I already had a website on one platform but needed to switch to a different platform that interfaces with Instagram. Not only did Gemini help me, but she did it so quickly and was in touch during the whole process. She also took the time to help me get hooked up to my Instagram page, which I&apos;d been unable to do with my previous website. It all looks great and she showed me how to add items to my website as they get made. She was very thorough. I&apos;m so so grateful. Thank you Gemini!</p>
              <cite className='font-semibold'>- <Link href="https://instagram.com/gianinecarbonedesigns" target='_blank'>Gianine Carbone</Link>, <Link href='https://www.gianinecarbonedesigns.com' target='_blank'>Gianine Carbone Designs</Link></cite>
            </blockquote>
          </div>
          <div className="lg:w-3/5 sm:w-4/5 mt-6 mx-auto">
            <blockquote className="flex flex-col justify-center items-center bg-gradient-to-br from-purple-900 to-gray-500 text-white text-xl px-8 py-4 rounded-xl">
              <p>Gemini was a huge asset to our team. She was communicative, knowledgeable, resourceful, and detail oriented. I could always trust Gemini to complete assigned tasks with excellence and in a timely manner. I would highly recommend her for SEO and web development work.</p>
              <cite className='font-semibold'>- <Link href="https://digi-solutions.com">Jason Mroz, Digi Solutions</Link></cite>
            </blockquote>
          </div>
          <div className="lg:w-3/5 sm:w-4/5 mt-6 mx-auto">
            <blockquote className="flex flex-col justify-center items-center bg-gradient-to-br from-pink-900 to-gray-800 text-white text-xl px-8 py-4 rounded-xl">
              <p>Working with Gemini has been a dream. She helped me form my brand, and gave it a home on the web. She is extraordinarily talented , and is not afraid to be innovative in her designs, all while making sure everything looks clean and is accessible to everyone. She is truly amazing, and having her help me has been one of the best decisions I have ever made.</p>
              <cite className='font-semibold'>- <Link href="https://instagram.com/arosefromchaosart">Rosalie Cherkassky</Link>, ARose from Chaos Art (coming soon)</cite>
            </blockquote>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center bg-purple-950 text-light text-xl h-40 rounded-b-xl font-semibold">
          <h2 className="text-2xl">Want to work with us?</h2>
          <p>Fill out our <Link href="/contact" className='text-yellow-400 underline'>contact form</Link>!</p>
        </section>
      </div>
    </AnimatedRoutes>
  )
}