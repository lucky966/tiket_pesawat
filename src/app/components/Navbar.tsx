import Image from "next/image"
import Link from "next/link"
import React from "react"
import NavbarAuth from "./navbar-auth"

export default function Navbar() {
  return (
    <nav
      id="Navbar"
      className="container max-w-[1130px] mx-auto flex justify-between items-center p-4"
    >
      <Link href="/" className="flex items-center shrink-0">
        <Image
          src="/assets/images/logos/logo.svg"
          alt="logo"
          width={120}
          height={20}
        />
      </Link>
      <ul className="nav-menus hidden sm:flex gap-6 items-center w-fit">
        <li>
          <Link href="" className="font-medium text-sm sm:text-base">
            Packages
          </Link>
        </li>
        <li>
          <Link href="" className="font-medium text-sm sm:text-base">
            Stories
          </Link>
        </li>
        <li>
          <Link href="" className="font-medium text-sm sm:text-base">
            About
          </Link>
        </li>
        <NavbarAuth />
      </ul>
      <button
        className="sm:hidden bg-flysha-light-purple p-2 rounded-lg"
        aria-label="Menu"
      >
        <Image
          src="/assets/images/icons/menu.svg"
          alt="menu"
          width={24}
          height={24}
        />
      </button>
    </nav>
  )
}
