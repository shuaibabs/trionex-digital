'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type BirdsBackgroundProps = {
  children?: ReactNode
  className?: string
}

export default function BirdsBackground({ children, className }: BirdsBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let vantaEffect: any

    const loadScripts = async () => {
      // Load THREE.js first
      const threeScript = document.createElement('script')
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
      threeScript.async = true
      document.body.appendChild(threeScript)

      threeScript.onload = () => {
        const vantaScript = document.createElement('script')
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js'
        vantaScript.async = true
        document.body.appendChild(vantaScript)

        vantaScript.onload = () => {
          // @ts-ignore
          if (window.VANTA && window.VANTA.BIRDS) {
            const isDark = document.documentElement.classList.contains('dark')

            // @ts-ignore
            vantaEffect = window.VANTA.BIRDS({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              backgroundColor: isDark ? 0x0a0f1f : 0xf0f4ff, // bg changes
              backgroundAlpha: 1,
              color1: isDark ? 0x3b82f6 : 0x1e40af, // main bird color (blue tone)
              color2: isDark ? 0xffffff : 0x2563eb, // secondary accent
              colorMode: 'varianceGradient',
              quantity: 5,
              birdSize: 1.2,
              wingSpan: 30,
              speedLimit: 5,
              separation: 20,
              alignment: 20,
              cohesion: 20,
            })
          }
        }
      }
    }

    loadScripts()

    // ✅ Watch for theme changes (if user toggles light/dark)
    const observer = new MutationObserver(() => {
      if (vantaEffect) {
        vantaEffect.destroy()
        vantaEffect = null
        loadScripts()
      }
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => {
      if (vantaEffect) vantaEffect.destroy()
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={vantaRef} className={`relative h-[60vh] overflow-hidden ${className || ''}`}>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  )
}
