"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export default function ExperienceTimeline() {
  const [isVisible, setIsVisible] = useState(false)
  const [language] = useState("fr")
  const [theme] = useState("dark")
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

  const allExperiences = language === "fr" ? [
    {
      title: "SOC Analyst & Ingenieur Automatisation SOAR",
      company: "Talixman Group",
      location: "Senegal",
      period: "2025 - Present",
      description: "Operations SOC quotidiennes dans un environnement entreprise, avec conception et deploiement de workflows avances d'automatisation et d'orchestration de la securite.",
      technologies: ["Wazuh", "Shuffle", "TheHive", "Cortex", "MISP", "VirusTotal", "AbuseIPDB", "API REST", "Python"],
    },
    {
      title: "Ingenieur Securite Industrielle ICS/OT - Digital Twins",
      company: "Talixman Group",
      location: "Senegal",
      period: "2025 - Present",
      description: "Conception et deploiement d'un Cyber Range industriel simulant un reseau de dispatching electrique pour demontrer les risques cyber sur les infrastructures critiques.",
      technologies: ["SCADA", "PLC", "DCS", "Historian", "HMI", "Purdue Model", "GRFICSv2", "OpenPLC", "Modbus"],
    },
    {
      title: "Eleve Ingenieur en SSI - 4e annee",
      company: "Ecole Superieure Polytechnique",
      location: "Dakar, Senegal",
      period: "Oct. 2024 - Present",
      description: "Formation avancee en securite des systemes d'information, cryptographie, pentesting et DevSecOps. Projets pratiques incluant SIEM avec IA, orchestration SOAR et developpement securise.",
      technologies: ["Wazuh", "Suricata", "Kali Linux", "Docker", "Jenkins"],
    },
    {
      title: "Assistant Support Planification IP",
      company: "FREE Senegal",
      location: "Dakar, Senegal",
      period: "Mai 2023 - Sept. 2023",
      description: "Stage de 4 mois au departement Transmission & IP. Gestion des plans d'adressage, VLANs, VRFs, routage BGP/OSPF. Automatisation de rapports avec VBA/SQL. Surveillance proactive des equipements Juniper/Huawei via LibreNMS.",
      technologies: ["phpIPAM", "LibreNMS", "BGP", "OSPF", "VBA", "SQL", "Juniper", "Huawei"],
    },
    {
      title: "Tronc Commun Informatique - 3e annee",
      company: "Ecole Superieure Polytechnique",
      location: "Dakar, Senegal",
      period: "Oct. 2023 - Juil. 2024",
      description: "Formation en developpement logiciel, algorithmique avancee, bases de donnees et introduction a l'IA. Projets incluant systemes de gestion et applications web securisees.",
      technologies: ["Java", "Python", "MySQL", "MongoDB", "HTML/CSS/JS"],
    },
    {
      title: "DST Telecommunications et Reseaux - Major de promotion",
      company: "Ecole Superieure Polytechnique",
      location: "Dakar, Senegal",
      period: "Oct. 2021 - Juil. 2023",
      description: "Major de promotion. Formation approfondie en reseaux, telecommunications, administration systeme. Certification Cisco Networking Essentials et bases solides en infrastructure IT.",
      technologies: ["Cisco", "Wireshark", "Packet Tracer", "Linux", "Windows Server"],
    },
  ] : [
    {
      title: "SOC Analyst & SOAR Automation Engineer",
      company: "Talixman Group",
      location: "Senegal",
      period: "2025 - Present",
      description: "Daily SOC operations in an enterprise environment, designing and deploying advanced security automation and orchestration workflows.",
      technologies: ["Wazuh", "Shuffle", "TheHive", "Cortex", "MISP", "VirusTotal", "AbuseIPDB", "REST API", "Python"],
    },
    {
      title: "ICS/OT Security Engineer - Digital Twins",
      company: "Talixman Group",
      location: "Senegal",
      period: "2025 - Present",
      description: "Design and deployment of an industrial Cyber Range simulating an electric dispatching network to demonstrate cyber risks on critical infrastructures.",
      technologies: ["SCADA", "PLC", "DCS", "Historian", "HMI", "Purdue Model", "GRFICSv2", "OpenPLC", "Modbus"],
    },
    {
      title: "SSI Engineering Student - 4th year",
      company: "Ecole Superieure Polytechnique",
      location: "Dakar, Senegal",
      period: "Oct. 2024 - Present",
      description: "Advanced training in information systems security, cryptography, pentesting and DevSecOps. Practical projects including AI-enhanced SIEM, SOAR orchestration and secure development.",
      technologies: ["Wazuh", "Suricata", "Kali Linux", "Docker", "Jenkins"],
    },
    {
      title: "IP Planning Support Assistant",
      company: "FREE Senegal",
      location: "Dakar, Senegal",
      period: "May 2023 - Sept. 2023",
      description: "4-month internship in Transmission & IP department. IP addressing management, VLANs, VRFs, BGP/OSPF routing. Report automation with VBA/SQL. Proactive Juniper/Huawei equipment monitoring via LibreNMS.",
      technologies: ["phpIPAM", "LibreNMS", "BGP", "OSPF", "VBA", "SQL", "Juniper", "Huawei"],
    },
    {
      title: "Computer Science Core - 3rd year",
      company: "Ecole Superieure Polytechnique",
      location: "Dakar, Senegal",
      period: "Oct. 2023 - Jul. 2024",
      description: "Software development training, advanced algorithms, databases and AI introduction. Projects including management systems and secure web applications.",
      technologies: ["Java", "Python", "MySQL", "MongoDB", "HTML/CSS/JS"],
    },
    {
      title: "DST Telecommunications and Networks - Top of class",
      company: "Ecole Superieure Polytechnique",
      location: "Dakar, Senegal",
      period: "Oct. 2021 - Jul. 2023",
      description: "Top of class. In-depth training in networking, telecommunications, system administration. Cisco Networking Essentials certification and strong IT infrastructure foundations.",
      technologies: ["Cisco", "Wireshark", "Packet Tracer", "Linux", "Windows Server"],
    },
  ]

  const isDark = theme === "dark"

  return (
    <section ref={ref} className={`py-20 px-6 cyber-grid ${isDark ? "bg-slate-900" : "bg-gray-100"}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            {language === "fr" ? "PARCOURS " : "ACADEMIC & "}
            <motion.span
              className={isDark ? "text-emerald-400" : "text-emerald-600"}
              animate={{
                textShadow: isDark
                  ? [
                      "0 0 20px rgba(52, 211, 153, 0.5), 0 0 40px rgba(52, 211, 153, 0.3)",
                      "0 0 30px rgba(52, 211, 153, 0.7), 0 0 60px rgba(52, 211, 153, 0.4)",
                      "0 0 20px rgba(52, 211, 153, 0.5), 0 0 40px rgba(52, 211, 153, 0.3)",
                    ]
                  : [
                      "0 0 10px rgba(16, 185, 129, 0.3)",
                      "0 0 15px rgba(16, 185, 129, 0.4)",
                      "0 0 10px rgba(16, 185, 129, 0.3)",
                    ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              {language === "fr" ? "ACADEMIQUE & PROFESSIONNEL" : "PROFESSIONAL JOURNEY"}
            </motion.span>
          </h2>
          <p className={`text-xl max-w-4xl mx-auto ${isDark ? "text-emerald-200" : "text-gray-600"}`}>
            {language === "fr"
              ? "Ingenieur SSI, avec une experience operationnelle en entreprise et securite industrielle ICS/OT"
              : "From top of class DST to SSI engineering student, with operational experience in enterprise SOC and ICS/OT industrial security"}
          </p>
        </motion.div>

        {/* Timeline - all experiences alternating left/right */}
        <div className="relative">
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full cyber-glow ${isDark ? "bg-emerald-600" : "bg-emerald-400"}`}></div>

          {allExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full cyber-glow z-10 ${isDark ? "bg-emerald-400" : "bg-emerald-600"}`}></div>

              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <div className={`cyber-border rounded-lg p-6 transition-all duration-300 ${isDark ? "bg-slate-800/80 hover:bg-slate-800" : "bg-white/90 hover:bg-white border-gray-200"}`}>
                  <div className="mb-4">
                    <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{exp.title}</h3>
                    <p className={`font-medium ${isDark ? "text-white" : "text-gray-800"}`}>{exp.company}</p>
                    <p className={isDark ? "text-white" : "text-gray-600"}>{exp.location}</p>
                    <span className={`inline-block px-3 py-1 text-sm rounded-full mt-2 ${isDark ? "bg-emerald-600 text-white" : "bg-emerald-100 text-emerald-700"}`}>
                      {exp.period}
                    </span>
                  </div>

                  <p className={`mb-4 ${isDark ? "text-emerald-100" : "text-gray-600"}`}>{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs rounded ${isDark ? "bg-emerald-900/50 text-emerald-200 border border-emerald-600" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}
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
          className="text-center mt-16"
        >
          <p className={`mb-6 ${isDark ? "text-emerald-200" : "text-gray-600"}`}>
            {language === "fr" ? "Interesse par mon profil ?" : "Interested in my profile?"}
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className={`px-8 py-4 font-semibold rounded-lg transition-all duration-300 cyber-glow ${isDark ? "bg-emerald-600 hover:bg-emerald-500 text-white" : "bg-emerald-600 hover:bg-emerald-700 text-white"}`}
          >
            {language === "fr" ? "Me contacter" : "Contact me"}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
