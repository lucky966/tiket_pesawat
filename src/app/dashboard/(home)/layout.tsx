import type { Metadata } from "next"
import localFont from "next/font/local"
import "../../globals.css"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plane, BookOpenText, Ticket, User } from "lucide-react"
import ButtonLogout from "./components/button-logout"
import { redirect } from "next/navigation"
import { getUser } from "@/lib/auth"

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Dashboard ",
}

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { session, user } = await getUser()

  if (session === null || user.role === "CUSTOMER") {
    redirect("/dashboard/signin")
  }
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <section>
          <nav className="border-b border-muted p-5">
            <div className="flex flex-row items-center justify-beetwen">
              <div className="font-bold text-primary">TickWat Dashboard</div>
            </div>
          </nav>
          <section className="flex flex-row gap-5 items-start flex-nowrap">
            <section className="grow-0 w-[20%] h-screen shadow p-5 space-y-5">
              <div className="space-y-2">
                <Button
                  asChild
                  className="w-full justify-start"
                  variant={"ghost"}
                >
                  <Link href={"/dashboard"}>Dashboard</Link>
                </Button>
              </div>
              <div className="space-y-2">
                <div className="uppercase font-xs font-bold">Master Data</div>
                <Button
                  asChild
                  className="w-full justify-start"
                  variant={"ghost"}
                >
                  <Link href={"/dashboard/airplanes"}>
                    <Plane className="mr-2 h-4 w-4" /> Airplane
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full justify-start"
                  variant={"ghost"}
                >
                  <Link href={"/dashboard/flights"}>
                    <BookOpenText className="mr-2 h-4 w-4" /> Flight
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full justify-start"
                  variant={"ghost"}
                >
                  <Link href={"/dashboard/tickets"}>
                    <Ticket className="mr-2 h-4 w-4" /> Ticket
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full justify-start"
                  variant={"ghost"}
                >
                  <Link href={"/dashboard/users"}>
                    <User className="mr-2 h-4 w-4" /> User
                  </Link>
                </Button>
              </div>
              <ButtonLogout />
            </section>
            <section className="grow mr-5 mt-5 h-[87vh] overflow-y-auto">
              {children}
            </section>
          </section>
        </section>
      </body>
    </html>
  )
}
