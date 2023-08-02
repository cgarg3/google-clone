import './globals.css'

export const metadata = {
  title: 'Google',
  description: 'Developed by Chirag Garg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}