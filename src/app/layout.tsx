import { UserProvider } from '@/context/UserContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { WorkshopProvider } from '@/context/WorkshopContext'
import QueryWrapper from '@/wrapper/queryWrapper'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`dark ${inter.className}`}>
        <QueryWrapper>
          <UserProvider>
            <WorkshopProvider>
              <Header/>
              
              {children}
            </WorkshopProvider>
          </UserProvider>
        </QueryWrapper>
      </body>
    </html>
  )
}
