"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('button, a, input, textarea, .hover-target')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleHover)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleHover)
    }
  }, [])

  return (
    <>
      <div 
        className="custom-cursor hidden md:block"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.8 : 1})`,
          borderColor: isHovering ? 'hsl(var(--secondary))' : 'hsl(var(--accent))'
        }}
      />
      <div 
        className="custom-cursor-dot hidden md:block"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          backgroundColor: isHovering ? 'hsl(var(--secondary))' : 'hsl(var(--accent))'
        }}
      />
    </>
  )
}
