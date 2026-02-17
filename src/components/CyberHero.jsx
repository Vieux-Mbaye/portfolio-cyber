"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function CyberHero() {
  const [text, setText] = useState("")
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [theme] = useState("dark")
  const [language] = useState("fr")

  const titles = {
    fr: "</SSI ENGINEER>",
    en: "CYBERSECURITY ENGINEERING STUDENT",
  }

  const descriptions = {
    fr: "SOC Analyst & Automatisation SOAR - Pentesting & Red Team - Administrateur Sécurité Réseau & Système - Securite Industrielle ICS/OT - DevSecOps - Telecom & Réseau - IA & Big DATA - Risk Management - Publications Techniques",
    en: "SOC Analyst & SOAR Automation - Pentesting & Red Team - Industrial Cybersecurity ICS/OT & Cyber Range - SIEM & Threat Hunting - DevSecOps - Technical Publications - ISO-27001 & NIST Compliance",
  }

  const fullText = titles[language]

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    let i = 0
    setText("")
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [fullText])

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid ${
        theme === "dark" ? "bg-slate-950" : "bg-gray-50"
      }`}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950"
      ></div>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-emerald-400"
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

      {/* Code rain in hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-xs font-mono text-emerald-400 opacity-20"
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
          <div className="text-lg md:text-xl mb-2 font-light text-emerald-200">
            VIEUX MBAYE NDOUR
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <motion.span
              className="inline-block text-emerald-400"
              animate={{
                textShadow: [
                  "0 0 20px rgba(52, 211, 153, 0.5), 0 0 40px rgba(52, 211, 153, 0.3)",
                  "0 0 30px rgba(52, 211, 153, 0.7), 0 0 60px rgba(52, 211, 153, 0.4)",
                  "0 0 20px rgba(52, 211, 153, 0.5), 0 0 40px rgba(52, 211, 153, 0.3)",
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
          className="text-lg md:text-xl mb-6 font-light max-w-4xl mx-auto text-white"
        >
          {descriptions[language]}
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
            className="px-8 py-4 font-semibold rounded-lg transition-all duration-300 cyber-glow bg-emerald-600 hover:bg-emerald-500 text-white"
          >
            {language === "fr" ? "Voir mes projets" : "View my projects"}
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white"
          >
            {language === "fr" ? "Me contacter" : "Contact me"}
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: language === "fr" ? "5e" : "4th", label: language === "fr" ? "Annee Ingenieur SSI" : "Year Cybersecurity Engineering" },
            { value: "30+", label: language === "fr" ? "Projets SSI, SOC & IA" : "Cybersecurity, SOC & AI Projects" },
            { value: "5", label: language === "fr" ? "Certifications Pro" : "Professional Certifications" },
            { value: "3", label: language === "fr" ? "Publications Medium" : "Medium Publications" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="cyber-border rounded-lg p-4 bg-slate-900/50"
            >
              <div className="text-3xl font-bold text-emerald-400">{stat.value}</div>
              <div className="text-sm text-emerald-200">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="text-sm text-white">
            <div className="font-semibold">SOC Analyst & SOAR</div>
            <div className="text-xs text-slate-400">
              {language === "fr" ? "Triage - Enrichissement - Reponse automatisee" : "Triage - Enrichment - Automated Response"}
            </div>
          </div>
          <div className="text-sm text-white">
            <div className="font-semibold">Pentesting & Red Team</div>
            <div className="text-xs text-slate-400">
              Kali Linux - Metasploit - Burp Suite
            </div>
          </div>
          <div className="text-sm text-white">
            <div className="font-semibold">
              {language === "fr" ? "Securite Industrielle ICS/OT" : "Industrial Security ICS/OT"}
            </div>
            <div className="text-xs text-slate-400">
              Cyber Range - Digital Twins - Purdue
            </div>
          </div>
          <div className="text-sm text-white">
            <div className="font-semibold">SIEM & Threat Hunting</div>
            <div className="text-xs text-slate-400">
              {language === "fr" ? "Detection - Correlation - CTI - IOC" : "Detection - Correlation - CTI - IOC"}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="scan-line"></div>
    </section>
  )
}
