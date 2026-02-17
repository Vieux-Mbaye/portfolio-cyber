"use client"

import { useEffect, useRef } from "react"

const JAPANESE_CHARS = [
  "\u30A2", "\u30A4", "\u30A6", "\u30A8", "\u30AA",
  "\u30AB", "\u30AD", "\u30AF", "\u30B1", "\u30B3",
  "\u30B5", "\u30B7", "\u30B9", "\u30BB", "\u30BD",
  "\u30BF", "\u30C1", "\u30C4", "\u30C6", "\u30C8",
  "\u30CA", "\u30CB", "\u30CC", "\u30CD", "\u30CE",
  "\u30CF", "\u30D2", "\u30D5", "\u30D8", "\u30DB",
  "\u30DE", "\u30DF", "\u30E0", "\u30E1", "\u30E2",
  "\u30E4", "\u30E6", "\u30E8",
  "\u30E9", "\u30EA", "\u30EB", "\u30EC", "\u30ED",
  "\u30EF", "\u30F2", "\u30F3",
  "\u6570", "\u5B89", "\u5168", "\u7DB2", "\u7D61",
  "\u4FB5", "\u5165", "\u691C", "\u77E5", "\u9632",
  "\u5FA1", "\u6697", "\u53F7", "\u5316", "\u89E3",
  "\u6790", "\u8106", "\u5F31", "\u6027", "\u653B",
  "\u6483", "\u76E3", "\u8996", "\u8B66", "\u544A",
]

function randomChar() {
  return JAPANESE_CHARS[Math.floor(Math.random() * JAPANESE_CHARS.length)]
}

export default function JapaneseRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId
    let drops = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initDrops()
    }

    const initDrops = () => {
      const fontSize = 18
      const colCount = Math.floor(canvas.width / fontSize)
      drops = []
      for (let i = 0; i < colCount; i++) {
        const trailLength = 8 + Math.floor(Math.random() * 18)
        const trail = []
        for (let t = 0; t < trailLength; t++) {
          trail.push(randomChar())
        }
        drops.push({
          x: i * fontSize,
          y: Math.random() * canvas.height * -2,
          speed: 2 + Math.random() * 4,
          fontSize: fontSize,
          trail: trail,
          trailLength: trailLength,
        })
      }
    }

    const animate = () => {
      // Clear completely - transparent background, no dark overlay
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drops.forEach((drop) => {
        drop.y += drop.speed

        for (let t = 0; t < drop.trailLength; t++) {
          const charY = drop.y - t * drop.fontSize
          if (charY < -drop.fontSize || charY > canvas.height + drop.fontSize) continue

          const progress = t / drop.trailLength

          if (t === 0) {
            // Head character - bright white-green glow
            ctx.shadowColor = "rgba(74, 222, 128, 0.9)"
            ctx.shadowBlur = 12
            ctx.fillStyle = "rgba(220, 252, 231, 0.9)"
          } else if (t === 1) {
            // Second character - bright green
            ctx.shadowColor = "rgba(74, 222, 128, 0.4)"
            ctx.shadowBlur = 6
            ctx.fillStyle = "rgba(134, 239, 172, 0.7)"
          } else {
            // Trail - fading green
            const alpha = 0.5 * (1 - progress)
            ctx.shadowColor = "transparent"
            ctx.shadowBlur = 0
            ctx.fillStyle = `rgba(34, 197, 94, ${Math.max(alpha, 0.03)})`
          }

          ctx.font = `${drop.fontSize}px monospace`
          ctx.fillText(drop.trail[t], drop.x, charY)
        }

        // Reset shadow after each drop
        ctx.shadowColor = "transparent"
        ctx.shadowBlur = 0

        // Randomly change characters in trail
        if (Math.random() < 0.02) {
          const idx = Math.floor(Math.random() * drop.trailLength)
          drop.trail[idx] = randomChar()
        }

        // Reset drop when it goes off screen
        const totalHeight = drop.trailLength * drop.fontSize
        if (drop.y - totalHeight > canvas.height) {
          drop.y = -(Math.random() * canvas.height) - totalHeight
          drop.speed = 2 + Math.random() * 4
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 2,
        pointerEvents: "none",
      }}
    />
  )
}
