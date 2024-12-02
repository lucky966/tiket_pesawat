import type { Metadata } from "next"
// import localFont from "next/font/local"
import "./globals.css"

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// })
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// })

export const metadata: Metadata = {
  title: "TicWat | Website Ticket Pesawat ",
}

export default async function DashboardLayout({
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
