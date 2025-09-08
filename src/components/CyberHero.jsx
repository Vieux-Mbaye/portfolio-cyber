"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function CyberHero() {
  const [text, setText] = useState("")
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const fullText = "Next-Gen SSI Engineer"

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 80) // Slightly faster typing for better flow
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950"></div>

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              x: [0, Math.random() * dimensions.width],
              y: [0, Math.random() * dimensions.height],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-green-400 text-xs font-mono opacity-20"
            style={{
              left: `${(i * 5) % 100}%`,
              top: "-10%",
            }}
            animate={{
              y: ["0vh", "110vh"],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          >
            {
              [
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
              ][Math.floor(Math.random() * 10)]
            }
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="text-lg md:text-xl text-blue-200 mb-2 font-light">VIEUX MBAYE NDOUR</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
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
          className="text-lg md:text-xl text-white mb-6 font-light max-w-4xl mx-auto"
        >
          Administrateur Sécurité Réseau & Système • Pentesting & Red Team • SIEM & SOC • DevSecOps • Analyse de
          Vulnérabilités • Publications Techniques • Conformité ISO-27001 & NIST
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => {
              const element = document.querySelector("#projects")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 cyber-glow"
          >
            Voir mes projets
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
          >
            Me contacter
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center"
        >
          <div className="cyber-border rounded-lg p-4 bg-slate-900/50">
            <div className="text-3xl font-bold text-blue-400">4e</div>
            <div className="text-sm text-blue-200">Année Ingénieur SSI</div>
          </div>
          <div className="cyber-border rounded-lg p-4 bg-slate-900/50">
            <div className="text-3xl font-bold text-blue-400">15+</div>
            <div className="text-sm text-blue-200">Projets SSI & IA</div>
          </div>
          <div className="cyber-border rounded-lg p-4 bg-slate-900/50">
            <div className="text-3xl font-bold text-blue-400">5</div>
            <div className="text-sm text-blue-200">Certifications Pro</div>
          </div>
          <div className="cyber-border rounded-lg p-4 bg-slate-900/50">
            <div className="text-3xl font-bold text-blue-400">3</div>
            <div className="text-sm text-blue-200">Publications Medium</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="text-white text-sm">
            <div className="font-semibold">Pentesting & Red Team</div>
            <div className="text-xs text-slate-400">Kali Linux • Metasploit • Burp Suite</div>
          </div>
          <div className="text-white text-sm">
            <div className="font-semibold">SIEM & SOC</div>
            <div className="text-xs text-slate-400">Wazuh • ELK Stack • Splunk</div>
          </div>
          <div className="text-white text-sm">
            <div className="font-semibold">Infrastructure & Réseaux</div>
            <div className="text-xs text-slate-400">BGP • OSPF • pfSense • Cisco</div>
          </div>
          <div className="text-white text-sm">
            <div className="font-semibold">DevSecOps & CI/CD</div>
            <div className="text-xs text-slate-400">Docker • Jenkins • Git • SCA</div>
          </div>
        </motion.div>
      </div>

      {/* Scan line effect */}
      <div className="scan-line"></div>
    </section>
  )
}



