import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "TicWat | Website Ticket Pesawat",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`text-white font-poppins bg-flysha-black antialiased`}>
        {children}
      </body>
    </html>
  )
}
