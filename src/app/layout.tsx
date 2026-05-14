import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'

export const metadata: Metadata = {
  title: '김한결 | Links',
  description: '김한결의 링크 모음',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  return (
    <html lang="ko">
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      <body>{children}</body>
    </html>
  )
}
