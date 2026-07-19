"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { usePortfolioLanguage } from "./usePortfolioLanguage"

export default function CyberHero() {
  const [text, setText] = useState("")
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [language] = usePortfolioLanguage()

  const content = {
    fr: {
      title: "Ingénieur de Conception SSI",
      subtitle:
        "Cybersécurité IT/OT | SOC Engineering | SOAR | Sécurité systèmes & réseaux | Pentesting | DevSecOps | Agents IA",
      description:
        "Je conçois, sécurise et automatise des environnements numériques et industriels, avec une approche orientée détection, réponse aux incidents, simulation contrôlée et impact opérationnel.",
      projects: "Voir mes projets",
      contact: "Me contacter",
      linkedin: "LinkedIn",
      medium: "Medium",
      articles: "Lire mes articles",
      stats: [
        { value: "SSI", label: "Ingénieur de conception" },
        { value: "IT/OT", label: "Cybersécurité industrielle" },
        { value: "SOAR", label: "Automatisation sécurité" },
        { value: "IA", label: "Agents appliqués cyber" },
      ],
      pillars: [
        ["SOC Engineering & SOAR", "Triage - Enrichissement - Réponse"],
        ["Pentesting & Vulnérabilités", "Web - Système - Réseau"],
        ["Cybersécurité ICS/OT", "Cyber Range - Jumeau numérique"],
        ["DevSecOps & Agents IA", "CI/CD - Automatisation - Décision"],
      ],
    },
    en: {
      title: "Information Systems Security Engineer",
      subtitle:
        "IT/OT Cybersecurity | SOC Engineering | SOAR | Systems & Network Security | Pentesting | DevSecOps | AI Agents",
      description:
        "I design, secure, and automate digital and industrial environments with a focus on detection, incident response, controlled simulation, and operational impact.",
      projects: "View projects",
      contact: "Contact me",
      linkedin: "LinkedIn",
      medium: "Medium",
      articles: "Read articles",
      stats: [
        { value: "SSI", label: "Security engineer" },
        { value: "IT/OT", label: "Industrial cybersecurity" },
        { value: "SOAR", label: "Security automation" },
        { value: "AI", label: "Cyber AI agents" },
      ],
      pillars: [
        ["SOC Engineering & SOAR", "Triage - Enrichment - Response"],
        ["Pentesting & Vulnerabilities", "Web - System - Network"],
        ["ICS/OT Cybersecurity", "Cyber Range - Digital Twin"],
        ["DevSecOps & AI Agents", "CI/CD - Automation - Decision"],
      ],
    },
  }

  const t = content[language]
  const fullText = t.title

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid bg-slate-950"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/70 to-slate-950"
      ></div>

      <div className="absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-emerald-300"
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
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-xs font-mono text-emerald-300 opacity-20"
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
                "SOC ENGINEERING",
                "INCIDENT RESPONSE",
                "SOAR WORKFLOW",
                "IT/OT SECURITY",
                "THREAT HUNTING",
                "DIGITAL FORENSICS",
                "DEVSECOPS",
                "AI SECURITY AGENTS",
              ][Math.floor(Math.random() * 8)]
            }
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="text-sm md:text-base mb-3 font-light text-emerald-200 tracking-[0.25em] uppercase">
            VIEUX MBAYE NDOUR
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <motion.span
              className="inline-block text-emerald-300"
              animate={{
                textShadow: [
                  "0 0 20px rgba(110, 231, 183, 0.45), 0 0 40px rgba(16, 185, 129, 0.25)",
                  "0 0 30px rgba(110, 231, 183, 0.65), 0 0 60px rgba(16, 185, 129, 0.35)",
                  "0 0 20px rgba(110, 231, 183, 0.45), 0 0 40px rgba(16, 185, 129, 0.25)",
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
          <p className="text-base md:text-xl max-w-5xl mx-auto text-slate-100 font-semibold">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-base md:text-xl mb-8 font-light max-w-4xl mx-auto text-slate-200 leading-relaxed"
        >
          {t.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center"
        >
          <button
            onClick={() => {
              const element = document.querySelector("#projects")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-6 py-3 font-semibold rounded-lg transition-all duration-300 cyber-glow bg-emerald-600 hover:bg-emerald-500 text-white"
          >
            {t.projects}
          </button>
          <a
            href="https://www.linkedin.com/in/vieux-mbaye-ndour-947831271/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 font-semibold rounded-lg transition-all duration-300 border border-emerald-400 text-emerald-200 hover:bg-emerald-500 hover:text-slate-950"
          >
            {t.linkedin}
          </a>
          <a
            href="/articles/"
            className="px-6 py-3 font-semibold rounded-lg transition-all duration-300 border border-emerald-400 text-emerald-200 hover:bg-emerald-500 hover:text-slate-950"
          >
            {t.articles}
          </a>
          <button
            onClick={() => {
              const element = document.querySelector("#contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-6 py-3 border font-semibold rounded-lg transition-all duration-300 border-emerald-400 text-emerald-200 hover:bg-emerald-500 hover:text-slate-950"
          >
            {t.contact}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center"
        >
          {[
            ...t.stats,
          ].map((stat) => (
            <div
              key={stat.label}
              className="cyber-border rounded-lg p-4 bg-slate-900/50"
            >
              <div className="text-3xl font-bold text-emerald-300">{stat.value}</div>
              <div className="text-sm text-slate-200">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          {t.pillars.map(([name, detail]) => (
            <div key={name} className="text-sm text-white">
              <div className="font-semibold">{name}</div>
              <div className="text-xs text-slate-400">{detail}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="scan-line"></div>
    </section>
  )
}
