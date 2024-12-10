import React, { FC, ReactNode } from "react"
import SeatProvider from "./providers/seat-provider"

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <SeatProvider>{children}</SeatProvider>
}

export default Layout
