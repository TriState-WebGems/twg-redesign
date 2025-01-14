import './globals.css'
import type { Metadata } from 'next'
import { Gruppo } from 'next/font/google'
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'
import Link from 'next/link'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const gruppo = Gruppo({ weight: "400", style: 'normal', subsets: ['latin-ext'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Tri-State WebGems, LLC - the DMV\'s Website Solution',
  description: 'We\'re Tri-State WebGems, a web development, design and marketing firm serving the DMV corridor. Contact us today to build your brand and bring new life to your business!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gruppo.className + " w-4/5 mx-auto bg-gradient-to-br from-slate-900 via-pink-950 to-slate-900"}>
        <Navbar />
        <Link href="#content" className="absolute left-0 -translate-x-96">Go to content</Link>
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
