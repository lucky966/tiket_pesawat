"use client" // Pastikan berjalan di client

import { useEffect, useState } from "react"

export default function Loading() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true) // Mencegah perbedaan antara server dan klien
  }, [])

  if (!show) return null // Jangan render elemen sebelum klien siap

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
    </div>
  )
}
