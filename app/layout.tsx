import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adnan Yonathan | Builder & Entrepreneur',
  description: 'Entrepreneur and app developer turning ideas into products. From AI-powered sports analytics to education platforms teaching thousands to build without code.',
  keywords: 'app development, entrepreneur, SaaS, AI, no-code, Delta AI, sports betting analytics',
  openGraph: {
    title: 'Adnan Yonathan - Builder & Entrepreneur',
    description: 'Building and shipping apps that solve real problems. From Delta AI to education platforms.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-bg text-zinc-50">
        {children}
      </body>
    </html>
  )
}
