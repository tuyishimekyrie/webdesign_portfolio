import type { Metadata } from 'next'
import { Inter,Poppins } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AuthProvider from './auth/Provider'

const pop =  Poppins({subsets: ['latin'],weight: ['400','500']})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Website design Po',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pop.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
