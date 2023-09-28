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
  description: 'Texas WebGems: Putting the Diamond in Your Rough',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gruppo.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
