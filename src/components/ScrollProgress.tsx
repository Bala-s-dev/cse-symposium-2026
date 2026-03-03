"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = totalScroll / windowHeight
      setWidth(scroll * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[100] bg-white/10">
      <div 
        className="h-full bg-gradient-to-r from-accent via-primary to-secondary neon-glow-cyan" 
        style={{ width: `${width}%` }}
      />
    </div>
  )
}
