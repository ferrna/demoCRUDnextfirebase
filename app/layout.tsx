import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { Container } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Demo CRUD next firebase',
  description: 'Demo CRUD next firebase',
  authors: [{ name: '', url: '' }],
  keywords: ['next firebase', 'demo next firebase'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Container maxWidth="md">
            <h1 className="text-center">Demo CRUD next firebase</h1>
            {children}
          </Container>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
