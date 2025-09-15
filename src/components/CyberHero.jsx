"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function CyberHero() {
  const [text, setText] = useState("")
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const fullText = "</Next-Gen SSI Engineer>"

  useEffect(() => {
    setMounted(true)
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  const codeSnippets = [
    "01001010",
    "11010011",
    "10110101",
    "01110010",
    "11001001",
    "sudo rm -rf",
    "nc -lvp 4444",
    "python exploit.py",
    "nmap -sS",
    "hydra -l admin",
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950"></div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: isScrolled ? 1 : 0,
          y: isScrolled ? 0 : -50,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-16 left-4 z-40 md:hidden"
      >
        {/* <div className="bg-slate-950/90 backdrop-blur-sm px-3 py-2 rounded-lg cyber-border">
          <span className="text-blue-400 text-sm font-bold">Cyber.Engineer</span>
        </div> */}
      </motion.div>

      {mounted && (
        <>
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                animate={{
                  x: [0, (i * 47 + 123) % dimensions.width],
                  y: [0, (i * 73 + 456) % dimensions.height],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: (i % 4) + 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i % 3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`code-${i}`}
                className="absolute text-green-400 text-xs font-mono opacity-20"
                style={{
                  left: `${(i * 10) % 100}%`,
                  top: "-10%",
                }}
                animate={{
                  y: ["0vh", "110vh"],
                }}
                transition={{
                  duration: (i % 2) + 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: (i % 3) * 0.5,
                  ease: "linear",
                }}
              >
                {codeSnippets[i]}
              </motion.div>
            ))}
          </div>
        </>
      )}

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 sm:mb-8"
        >
          <div className="text-sm sm:text-lg md:text-xl text-blue-200 mb-2 font-light">VIEUX MBAYE NDOUR</div>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight transition-opacity duration-300 ${isScrolled ? "md:opacity-100 opacity-30" : "opacity-100"}`}
          >
            <motion.span
              className="text-blue-400 inline-block"
              animate={{
                textShadow: [
                  "0 0 20px rgba(96, 165, 250, 0.5), 0 0 40px rgba(96, 165, 250, 0.3)",
                  "0 0 30px rgba(96, 165, 250, 0.7), 0 0 60px rgba(96, 165, 250, 0.4)",
                  "0 0 20px rgba(96, 165, 250, 0.5), 0 0 40px rgba(96, 165, 250, 0.3)",
                ],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {text}
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 font-light max-w-4xl mx-auto leading-relaxed"
        >
          Administrateur Sécurité Réseau & Système • Pentesting & Red Team • SIEM & SOC • DevSecOps • Analyse de
          Vulnérabilités • Publications Techniques • Conformité ISO-27001 & NIST
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12"
        >
          <button
            onClick={() => {
              const element = document.querySelector("#projects")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 cyber-glow text-sm sm:text-base"
          >
            Voir mes projets
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base"
          >
            Me contacter
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-center mb-8 sm:mb-12"
        >
          <div className="cyber-border rounded-lg p-3 sm:p-4 bg-slate-900/50">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400">4e</div>
            <div className="text-xs sm:text-sm text-blue-200">Année Ingénieur SSI</div>
          </div>
          <div className="cyber-border rounded-lg p-3 sm:p-4 bg-slate-900/50">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400">15+</div>
            <div className="text-xs sm:text-sm text-blue-200">Projets SSI & IA</div>
          </div>
          <div className="cyber-border rounded-lg p-3 sm:p-4 bg-slate-900/50">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400">5</div>
            <div className="text-xs sm:text-sm text-blue-200">Certifications Pro</div>
          </div>
          <div className="cyber-border rounded-lg p-3 sm:p-4 bg-slate-900/50">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400">3</div>
            <div className="text-xs sm:text-sm text-blue-200">Publications Medium</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center"
        >
          <div className="text-white text-sm">
            <div className="font-semibold mb-1">Pentesting & Red Team</div>
            <div className="text-xs text-slate-400">Kali Linux • Metasploit • Burp Suite</div>
          </div>
          <div className="text-white text-sm">
            <div className="font-semibold mb-1">SIEM & SOC</div>
            <div className="text-xs text-slate-400">Wazuh • ELK Stack • Splunk</div>
          </div>
          <div className="text-white text-sm">
            <div className="font-semibold mb-1">Infrastructure & Réseaux</div>
            <div className="text-xs text-slate-400">BGP • OSPF • pfSense • Cisco</div>
          </div>
          <div className="text-white text-sm">
            <div className="font-semibold mb-1">DevSecOps & CI/CD</div>
            <div className="text-xs text-slate-400">Docker • Jenkins • Git • SCA</div>
          </div>
        </motion.div>
      </div>

      <div className="scan-line"></div>
    </section>
  )
}




