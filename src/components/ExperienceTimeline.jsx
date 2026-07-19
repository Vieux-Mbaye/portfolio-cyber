"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { usePortfolioLanguage } from "./usePortfolioLanguage"

export default function ExperienceTimeline() {
  const [isVisible, setIsVisible] = useState(false)
  const [language] = usePortfolioLanguage()
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const content = {
    fr: {
      title: "PARCOURS PROFESSIONNEL & ACADÉMIQUE",
      intro:
        "Une trajectoire orientée sécurité des systèmes d’information, réseaux, SOC, automatisation, investigation et cybersécurité des environnements critiques.",
      contact: "Me contacter",
      experiences: [
        {
          title: "Analyste Cybersécurité – SOC Engineering, SOAR & Sécurité Industrielle",
          company: "Talixman Group",
          location: "Sénégal",
          period: "2025 – 2026",
          type: "Expérience professionnelle",
          description: [
            "Conception et déploiement de workflows SOAR pour le triage, l’enrichissement, la priorisation et la réponse aux incidents de sécurité.",
            "Intégration de mécanismes de validation humaine dans les processus automatisés.",
            "Contribution à l’amélioration continue des capacités de détection SOC.",
            "Participation à des projets de cybersécurité industrielle ICS/OT.",
            "Conception d’environnements de simulation et d’analyse d’impacts cyber pour infrastructures critiques.",
            "Production de documentations opérationnelles, playbooks et indicateurs de performance sécurité.",
          ],
          technologies: ["SOC", "SOAR", "Wazuh", "Shuffle", "TheHive", "Cortex", "MISP", "OpenCTI", "Python", "ICS/OT"],
        },
        {
          title: "Assistant Support Planification IP",
          company: "FREE Sénégal",
          location: "Dakar, Sénégal",
          period: "Mai 2023 – Sept. 2023",
          type: "Expérience professionnelle",
          description: [
            "Gestion et documentation de plans d’adressage IP.",
            "Suivi des VLAN, VRF, NAT et routage BGP.",
            "Utilisation de phpIPAM pour l’administration IP.",
            "Supervision réseau avec LibreNMS.",
            "Analyse des équipements et logs réseau.",
            "Automatisation de rapports hebdomadaires avec Excel, VBA et SQL.",
          ],
          technologies: ["phpIPAM", "LibreNMS", "VLAN", "VRF", "NAT", "BGP", "OSPF", "Excel", "VBA", "SQL"],
        },
        {
          title: "Ingénieur de Conception en Sécurité des Systèmes d’Information",
          company: "École Supérieure Polytechnique de Dakar",
          location: "Dakar, Sénégal",
          period: "2023 – 2026",
          type: "Formation",
          description: [
            "Formation d’ingénieur orientée SSI, sécurité réseau, audit, cryptographie, forensic, sécurité applicative, gouvernance SSI et DevSecOps.",
            "Mémoire autour de la conception et du déploiement d’un Cyber Range ICS/OT pour simulation contrôlée sur infrastructures critiques.",
            "Approche combinant offensive contrôlée, défense, systèmes, réseaux, automatisation et impact opérationnel.",
          ],
          technologies: ["SSI", "IT/OT", "Audit", "Cryptographie", "Forensic", "DevSecOps", "Cyber Range"],
        },
        {
          title: "Diplôme Supérieur de Technologie en Télécommunications et Réseaux",
          company: "École Supérieure Polytechnique de Dakar",
          location: "Dakar, Sénégal",
          period: "2021 – 2023",
          type: "Formation",
          description: [
            "Formation en réseaux, télécommunications, administration système et infrastructures IT.",
            "Bases solides en routage, commutation, supervision, services réseau et sécurité des infrastructures.",
            "Major de promotion.",
          ],
          technologies: ["Cisco", "Linux", "Windows Server", "Routage", "Switching", "Supervision"],
        },
      ],
    },
    en: {
      title: "PROFESSIONAL & ACADEMIC JOURNEY",
      intro:
        "A path focused on information systems security, networks, SOC, automation, investigation, and cybersecurity for critical environments.",
      contact: "Contact me",
      experiences: [
        {
          title: "Cybersecurity Analyst – SOC Engineering, SOAR & Industrial Security",
          company: "Talixman Group",
          location: "Senegal",
          period: "2025 – 2026",
          type: "Professional experience",
          description: [
            "Designed and deployed SOAR workflows for alert triage, enrichment, prioritization, and incident response.",
            "Integrated human validation mechanisms into automated processes.",
            "Contributed to continuous improvement of SOC detection capabilities.",
            "Participated in ICS/OT industrial cybersecurity projects.",
            "Designed simulation environments and cyber impact analysis approaches for critical infrastructure models.",
            "Produced operational documentation, playbooks, and security performance indicators.",
          ],
          technologies: ["SOC", "SOAR", "Wazuh", "Shuffle", "TheHive", "Cortex", "MISP", "OpenCTI", "Python", "ICS/OT"],
        },
        {
          title: "IP Planning Support Assistant",
          company: "FREE Senegal",
          location: "Dakar, Senegal",
          period: "May 2023 – Sept. 2023",
          type: "Professional experience",
          description: [
            "Managed and documented IP addressing plans.",
            "Monitored VLAN, VRF, NAT, and BGP routing information.",
            "Used phpIPAM for IP administration.",
            "Monitored networks with LibreNMS.",
            "Analyzed network equipment and logs.",
            "Automated weekly reports using Excel, VBA, and SQL.",
          ],
          technologies: ["phpIPAM", "LibreNMS", "VLAN", "VRF", "NAT", "BGP", "OSPF", "Excel", "VBA", "SQL"],
        },
        {
          title: "Engineering Degree in Information Systems Security",
          company: "École Supérieure Polytechnique de Dakar",
          location: "Dakar, Senegal",
          period: "2023 – 2026",
          type: "Education",
          description: [
            "Engineering curriculum focused on information systems security, network security, audit, cryptography, forensics, application security, security governance, and DevSecOps.",
            "Thesis focused on designing and deploying an ICS/OT Cyber Range for controlled simulation on critical infrastructure models.",
            "Combined approach covering controlled offense, defense, systems, networks, automation, and operational impact.",
          ],
          technologies: ["SSI", "IT/OT", "Audit", "Cryptography", "Forensics", "DevSecOps", "Cyber Range"],
        },
        {
          title: "Higher Technology Diploma in Telecommunications and Networks",
          company: "École Supérieure Polytechnique de Dakar",
          location: "Dakar, Senegal",
          period: "2021 – 2023",
          type: "Education",
          description: [
            "Training in networks, telecommunications, system administration, and IT infrastructure.",
            "Strong foundations in routing, switching, monitoring, network services, and infrastructure security.",
            "Top of class.",
          ],
          technologies: ["Cisco", "Linux", "Windows Server", "Routing", "Switching", "Monitoring"],
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section ref={ref} className="py-20 px-6 cyber-grid bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t.title.split("&")[0]}& <span className="text-emerald-300 neon-text">{t.title.split("&")[1]}</span>
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-slate-200">{t.intro}</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full cyber-glow bg-emerald-700"></div>

          {t.experiences.map((exp, index) => (
            <motion.div key={exp.title} initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 + index * 0.12 }} className={`relative flex items-stretch mb-10 md:mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full cyber-glow z-10 bg-emerald-300"></div>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <div className="cyber-border rounded-lg p-6 h-full transition-all duration-300 bg-slate-800/80 hover:bg-slate-800">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs rounded-full mb-3 bg-emerald-950 text-emerald-100 border border-emerald-700">{exp.type}</span>
                    <h3 className="text-xl font-bold mb-2 text-white">{exp.title}</h3>
                    <p className="font-medium text-emerald-200">{exp.company}</p>
                    <p className="text-slate-300">{exp.location}</p>
                    <span className="inline-block px-3 py-1 text-sm rounded-full mt-2 bg-slate-900 text-emerald-200 border border-emerald-800">{exp.period}</span>
                  </div>

                  <div className="space-y-2 mb-5">
                    {exp.description.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-slate-200">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-300 flex-shrink-0"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs rounded bg-emerald-950/60 text-emerald-100 border border-emerald-700/70">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.7 }} className="text-center mt-16">
          <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="px-8 py-4 font-semibold rounded-lg transition-all duration-300 cyber-glow bg-emerald-600 hover:bg-emerald-500 text-white">
            {t.contact}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
