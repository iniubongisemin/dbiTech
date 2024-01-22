import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { Providers } from './Providers'
import { Metadata } from 'next'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'dbiTech',
  description: 'Design by Inie Technologies portfolio',
  keywords: 'web development, frontend web development, backend web development, fullstack web development, product design, product ideation'
}
        
export default function RootLayout({ children }) {
  return (
    <html lang="en" supressHydrationWarning>
        <body className={`bg-gray-50 dark:bg-slate-800`}>
          <Providers>
            <Navbar />
            <main>
              {children}            
            </main>
          </Providers>          
        </body>
    </html>
  )
}



