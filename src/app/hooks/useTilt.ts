import { useState, useEffect, type RefObject } from "react"

interface TiltValues {
  tiltX: number
  tiltY: number
  mouseX: number
  mouseY: number
}

export const useTilt = (ref: RefObject<HTMLElement|null>): TiltValues => {
  const [tilt, setTilt] = useState<TiltValues>({ tiltX: 0, tiltY: 0, mouseX: 0.5, mouseY: 0.5 })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = element.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      setTilt({
        tiltX: (y - 0.5) * 20, // Tilt range: -10 to 10 degrees
        tiltY: (x - 0.5) * -20, // Tilt range: -10 to 10 degrees
        mouseX: x,
        mouseY: y,
      })
    }

    const handleMouseLeave = () => {
      setTilt({ tiltX: 0, tiltY: 0, mouseX: 0.5, mouseY: 0.5 })
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [ref])

  return tilt
}

