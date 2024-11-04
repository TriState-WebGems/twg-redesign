import './globals.css'
import type { Metadata } from 'next'
import { Gruppo } from 'next/font/google'
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const gruppo = Gruppo({ weight: "400", style: 'normal', subsets: ['latin-ext'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Texas WebGems',
  description: 'We\'re Texas WebGems, a web development and design firm in Austin, TX.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gruppo.className + " w-4/5 m-auto bg-gradient-to-b from-black via-purple-800 to-black"}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
