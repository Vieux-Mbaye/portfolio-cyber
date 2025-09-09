"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export default function ExperienceTimeline() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      title: "Élève Ingénieur en SSI - 4e année",
      company: "École Supérieure Polytechnique",
      location: "Dakar, Sénégal",
      period: "Oct. 2024 - Présent",
      description:
        "Formation avancée en sécurité des systèmes d'information, cryptographie, pentesting, et DevSecOps. Projets pratiques incluant SIEM Wazuh avec IA et développement sécurisé.",
      technologies: ["Wazuh", "Suricata", "Kali Linux", "Docker", "Jenkins"],
      color: "blue",
    },
    {
      title: "Assistant Support Planification IP",
      company: "FREE Sénégal",
      location: "Dakar, Sénégal",
      period: "Mai 2023 - Sept. 2023",
      description:
        "Stage de 4 mois au département Transmission & IP. Gestion des plans d'adressage, VLANs, VRFs, routage BGP. Automatisation de rapports avec VBA/SQL et surveillance proactive des équipements Juniper/Huawei.",
      technologies: ["phpIPAM", "LibreNMS", "BGP", "VBA", "SQL", "Juniper", "Huawei"],
      color: "blue",
    },
    {
      title: "Tronc Commun Informatique - 3e année",
      company: "École Supérieure Polytechnique",
      location: "Dakar, Sénégal",
      period: "Oct. 2023 - Juil. 2024",
      description:
        "Formation en développement logiciel, algorithmique avancée, bases de données, et introduction à l'IA. Projets incluant systèmes de gestion et applications web sécurisées.",
      technologies: ["Java", "Python", "MySQL", "MongoDB", "HTML/CSS/JS"],
      color: "blue",
    },
    {
      title: "DST Télécommunications et Réseaux",
      company: "École Supérieure Polytechnique",
      location: "Dakar, Sénégal",
      period: "Oct. 2021 - Juil. 2023",
      description:
        "Major de promotion. Formation en réseaux, télécommunications, administration système. Certification Cisco Networking Essentials et bases solides en infrastructure IT.",
      technologies: ["Cisco", "Wireshark", "Packet Tracer", "Linux", "Windows Server"],
      color: "blue",
    },
  ]

  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-900 cyber-grid">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            PARCOURS{" "}
            <motion.span
              className="text-blue-400 block sm:inline"
              animate={{
                textShadow: [
                  "0 0 20px rgba(96, 165, 250, 0.5), 0 0 40px rgba(96, 165, 250, 0.3)",
                  "0 0 30px rgba(96, 165, 250, 0.7), 0 0 60px rgba(96, 165, 250, 0.4)",
                  "0 0 20px rgba(96, 165, 250, 0.5), 0 0 40px rgba(96, 165, 250, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              ACADÉMIQUE & PROFESSIONNEL
            </motion.span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-200 max-w-3xl mx-auto">
            Mon évolution de major DST à élève ingénieur SSI, avec une expérience pratique en entreprise
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - Better positioning for desktop centering */}
          <div className="absolute left-4 sm:left-1/2 w-1 h-full bg-blue-600 cyber-glow sm:-ml-0.5"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-8 sm:mb-12 ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline dot - Better positioning */}
              <div className="absolute left-2.5 sm:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full cyber-glow z-10 sm:-ml-2"></div>

              {/* Content card - Better responsive layout */}
              <div
                className={`w-full sm:w-5/12 ml-8 sm:ml-0 ${
                  index % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                }`}
              >
                <div className="cyber-border rounded-lg p-4 sm:p-6 bg-slate-800/80 hover:bg-slate-800 transition-all duration-300">
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-white font-medium text-sm sm:text-base">{exp.company}</p>
                    <p className="text-white text-sm sm:text-base">{exp.location}</p>
                    <span className="inline-block px-2 sm:px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm rounded-full mt-2">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-blue-100 mb-3 sm:mb-4 text-sm sm:text-base">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-900/50 text-blue-200 text-xs rounded border border-blue-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-blue-200 mb-4 sm:mb-6 text-sm sm:text-base">Intéressé par mon profil ?</p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 cyber-glow text-sm sm:text-base"
          >
            Me contacter
          </button>
        </motion.div>
      </div>
    </section>
  )
}