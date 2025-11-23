import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EXPOMER 2ème Édition - Concept ECOGiC',
  description: 'Proposition de concept pour la 2ème édition d\'EXPOMER par le bureau ECOGiC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
