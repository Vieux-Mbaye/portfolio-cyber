"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { usePortfolioLanguage } from "./usePortfolioLanguage"

export default function ProjectsGallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("all")
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
      title: "PROJETS SÉLECTIONNÉS",
      intro:
        "Des réalisations orientées cybersécurité IT/OT, automatisation SOC, sécurité applicative, détection et analyse offensive/défensive.",
      categories: [
        ["all", "Tous"],
        ["ics", "ICS/OT"],
        ["soc", "SOC & SOAR"],
        ["devsecops", "DevSecOps"],
        ["detection", "Détection"],
        ["infrastructure", "Infrastructure"],
        ["ai", "IA Cyber"],
        ["audit", "Audit"],
        ["iot", "IoT"],
        ["publication", "Publications"],
      ],
      button: "Voir les publications",
      projects: [
        {
          title: "Cyber Range ICS/OT – Simulation contrôlée sur infrastructures critiques",
          category: "ics",
          description:
            "Conception et déploiement d’un Cyber Range orienté ICS/OT basé sur une logique de jumeau numérique. La plateforme permet de reproduire des environnements critiques simulés, d’exécuter des scénarios offensifs contrôlés et d’analyser les impacts opérationnels dans un cadre isolé et maîtrisé.",
          technologies: ["ICS/OT", "Cyber Range", "Digital Twin", "Infrastructures critiques", "Simulation contrôlée", "Analyse de risques", "Impact opérationnel"],
          status: "Mémoire ingénieur",
          image: "/image.png",
          note: "Présentation volontairement limitée au niveau professionnel : aucun détail sensible, adresse IP, payload ou schéma interne.",
        },
        {
          title: "Automatisation SOC & Orchestration SOAR",
          category: "soc",
          description:
            "Conception de workflows d’automatisation pour améliorer le triage, l’enrichissement, la priorisation et la réponse aux incidents. Intégration de mécanismes de validation humaine pour sécuriser les actions automatisées.",
          technologies: ["SOC", "SOAR", "Wazuh", "Shuffle", "TheHive", "Cortex", "MISP", "OpenCTI", "Python"],
          status: "Opérationnel",
          image: "/shuffle.png",
          note: "Approche orientée fiabilité, traçabilité, réduction de charge analyste et amélioration des délais de réponse.",
        },
        {
          title: "BankGuard – Sécurité applicative & DevSecOps",
          category: "devsecops",
          description:
            "Projet de plateforme bancaire sécurisée intégrant des pratiques DevSecOps, du durcissement applicatif, de l’audit de code et des contrôles de sécurité dans le cycle de développement.",
          technologies: ["DevSecOps", "Sécurité applicative", "Docker", "CI/CD", "Audit de code"],
          status: "Projet réalisé",
          image: "/bankguard.png",
          note: "Mise en valeur des contrôles de sécurité applicative sans divulguer d’implémentation sensible.",
        },
        {
          title: "Détection d’intrusions & sécurité intelligente",
          category: "detection",
          description:
            "Mise en place de mécanismes de détection combinant règles, supervision et approche intelligente pour améliorer l’identification d’attaques réseau et réduire les faux positifs.",
          technologies: ["IDS", "SIEM", "Détection", "IA", "Réseau", "Sécurité"],
          status: "Projet réalisé",
          image: "/wazuh.png",
          note: "Travail centré sur la détection, la corrélation, la supervision et l’aide à l’analyse.",
        },
        {
          title: "Infrastructures sécurisées d’entreprise",
          category: "infrastructure",
          description:
            "Conception d’architectures réseau sécurisées avec segmentation, services critiques, supervision, gestion centralisée des identités et contrôle des accès. Le projet valorise la capacité à concevoir des environnements fiables, administrables et défendables.",
          technologies: ["Network Security", "VLAN", "Routage", "DNS", "DHCP", "VoIP", "Active Directory", "LDAP", "Supervision"],
          status: "Projet réalisé",
          image: "/rx.jpg",
          note: "Présentation générique des choix d’architecture, sans schéma interne ni paramètres opérationnels.",
        },
        {
          title: "Détection automatisée de malwares par apprentissage supervisé",
          category: "ai",
          description:
            "Projet d’analyse intelligente visant à classifier des fichiers ou comportements suspects à partir de caractéristiques pertinentes, avec un objectif d’aide à la détection, à la priorisation et à la réduction de charge opérationnelle.",
          technologies: ["IA", "Machine Learning", "Python", "Feature Engineering", "Classification", "Malware Analysis"],
          status: "Projet réalisé",
          image: "/malware.png",
          note: "Projet présenté sous l’angle défensif : analyse, classification et aide à la décision.",
        },
        {
          title: "Audit sécurité & durcissement des systèmes",
          category: "audit",
          description:
            "Évaluation de vulnérabilités, analyse de configurations, renforcement des systèmes Linux, amélioration des contrôles d’accès, revue des journaux et recommandations de sécurité opérationnelles.",
          technologies: ["Audit", "Hardening Linux", "Lynis", "Nessus", "OpenVAS", "Logs", "Firewalling", "Contrôle d’accès"],
          status: "Projet réalisé",
          image: "/dur.png",
          note: "Approche orientée réduction de surface d’attaque, conformité technique et amélioration continue.",
        },
        {
          title: "Solutions connectées sécurisées – IoT & réseaux",
          category: "iot",
          description:
            "Déploiement de systèmes de communication pour environnements connectés, avec attention portée à la segmentation, au contrôle d’accès, à la supervision et à la sécurisation des échanges.",
          technologies: ["IoT", "MQTT", "Mosquitto", "Réseaux", "Contrôle d’accès", "Supervision", "Sécurité"],
          status: "Projet réalisé",
          image: "/mqtt.png",
          note: "Mise en avant de la sécurisation des communications et de l’administration contrôlée.",
        },
        {
          title: "Automatisation réseau & reporting opérationnel",
          category: "infrastructure",
          description:
            "Mise en place d’outils de suivi pour plans d’adressage, VLAN, VRF, NAT, routage et supervision réseau, avec génération de rapports récurrents pour améliorer la visibilité opérationnelle.",
          technologies: ["phpIPAM", "LibreNMS", "VBA", "SQL", "BGP", "OSPF", "VLAN", "NAT", "Reporting"],
          status: "Expérience FREE Sénégal",
          image: "/Gestion.jpg",
          note: "Projet présenté au niveau processus et outillage, sans données réseau réelles.",
        },
        {
          title: "Articles techniques cybersécurité offensive",
          category: "publication",
          description:
            "Publications techniques autour de l’exploitation de vulnérabilités, de la sécurité Linux, de la mémoire, de ROP/BROP et de l’analyse offensive/défensive.",
          technologies: ["CVE-2021-3156", "Baron Samedit", "ROP", "BROP", "Linux Security", "Exploit Analysis"],
          status: "Publications",
          image: "/dur.png",
          note: "Articles pédagogiques avec une lecture technique et défensive.",
          link: "https://medium.com/@vieuxmbayendour",
        },
      ],
    },
    en: {
      title: "SELECTED PROJECTS",
      intro:
        "Work focused on IT/OT cybersecurity, SOC automation, application security, detection, and offensive/defensive analysis.",
      categories: [
        ["all", "All"],
        ["ics", "ICS/OT"],
        ["soc", "SOC & SOAR"],
        ["devsecops", "DevSecOps"],
        ["detection", "Detection"],
        ["infrastructure", "Infrastructure"],
        ["ai", "Cyber AI"],
        ["audit", "Audit"],
        ["iot", "IoT"],
        ["publication", "Publications"],
      ],
      button: "View publications",
      projects: [
        {
          title: "ICS/OT Cyber Range – Controlled Simulation for Critical Infrastructure",
          category: "ics",
          description:
            "Design and deployment of an ICS/OT-oriented Cyber Range based on a digital twin approach. The platform reproduces simulated critical environments, runs controlled offensive scenarios, and analyzes operational impacts in an isolated and controlled setting.",
          technologies: ["ICS/OT", "Cyber Range", "Digital Twin", "Critical Infrastructure", "Controlled Simulation", "Risk Analysis", "Operational Impact"],
          status: "Engineering thesis",
          image: "/image.png",
          note: "Intentionally presented at a professional level: no sensitive details, IP addresses, payloads, or internal diagrams.",
        },
        {
          title: "SOC Automation & SOAR Orchestration",
          category: "soc",
          description:
            "Design of automation workflows to improve alert triage, enrichment, prioritization, and incident response. Human validation mechanisms are integrated to keep automated actions controlled.",
          technologies: ["SOC", "SOAR", "Wazuh", "Shuffle", "TheHive", "Cortex", "MISP", "OpenCTI", "Python"],
          status: "Operational",
          image: "/shuffle.png",
          note: "Focused on reliability, traceability, analyst workload reduction, and faster response.",
        },
        {
          title: "BankGuard – Application Security & DevSecOps",
          category: "devsecops",
          description:
            "Secure banking platform project integrating DevSecOps practices, application hardening, code auditing, and security controls within the development lifecycle.",
          technologies: ["DevSecOps", "Application Security", "Docker", "CI/CD", "Code Audit"],
          status: "Completed",
          image: "/bankguard.png",
          note: "Highlights application security controls without exposing sensitive implementation details.",
        },
        {
          title: "Intrusion Detection & Intelligent Security",
          category: "detection",
          description:
            "Implementation of detection mechanisms combining rules, monitoring, and intelligent analysis to improve network attack identification and reduce false positives.",
          technologies: ["IDS", "SIEM", "Detection", "AI", "Network", "Security"],
          status: "Completed",
          image: "/wazuh.png",
          note: "Focused on detection, correlation, monitoring, and analyst support.",
        },
        {
          title: "Secure Enterprise Infrastructure",
          category: "infrastructure",
          description:
            "Design of secure network architectures with segmentation, critical services, monitoring, centralized identity management, and access control. The project highlights the ability to design reliable, manageable, and defensible environments.",
          technologies: ["Network Security", "VLAN", "Routing", "DNS", "DHCP", "VoIP", "Active Directory", "LDAP", "Monitoring"],
          status: "Completed",
          image: "/rx.jpg",
          note: "Presented at an architectural level without internal diagrams or operational parameters.",
        },
        {
          title: "Automated Malware Detection with Supervised Learning",
          category: "ai",
          description:
            "Intelligent analysis project aimed at classifying suspicious files or behaviors from relevant features, with a focus on detection support, prioritization, and operational workload reduction.",
          technologies: ["AI", "Machine Learning", "Python", "Feature Engineering", "Classification", "Malware Analysis"],
          status: "Completed",
          image: "/malware.png",
          note: "Presented from a defensive angle: analysis, classification, and decision support.",
        },
        {
          title: "Security Audit & System Hardening",
          category: "audit",
          description:
            "Vulnerability assessment, configuration analysis, Linux hardening, access control improvement, log review, and operational security recommendations.",
          technologies: ["Audit", "Linux Hardening", "Lynis", "Nessus", "OpenVAS", "Logs", "Firewalling", "Access Control"],
          status: "Completed",
          image: "/dur.png",
          note: "Focused on attack surface reduction, technical compliance, and continuous improvement.",
        },
        {
          title: "Secure Connected Solutions – IoT & Networks",
          category: "iot",
          description:
            "Deployment of communication systems for connected environments, with attention to segmentation, access control, monitoring, and secure exchanges.",
          technologies: ["IoT", "MQTT", "Mosquitto", "Networks", "Access Control", "Monitoring", "Security"],
          status: "Completed",
          image: "/mqtt.png",
          note: "Highlights secure communication and controlled administration.",
        },
        {
          title: "Network Automation & Operational Reporting",
          category: "infrastructure",
          description:
            "Implementation of tracking tools for addressing plans, VLAN, VRF, NAT, routing, and network monitoring, with recurring reports to improve operational visibility.",
          technologies: ["phpIPAM", "LibreNMS", "VBA", "SQL", "BGP", "OSPF", "VLAN", "NAT", "Reporting"],
          status: "FREE Senegal experience",
          image: "/Gestion.jpg",
          note: "Presented at a process and tooling level, without real network data.",
        },
        {
          title: "Technical Articles on Offensive Cybersecurity",
          category: "publication",
          description:
            "Technical publications about vulnerability exploitation, Linux security, memory, ROP/BROP, and offensive/defensive analysis.",
          technologies: ["CVE-2021-3156", "Baron Samedit", "ROP", "BROP", "Linux Security", "Exploit Analysis"],
          status: "Publications",
          image: "/dur.png",
          note: "Educational articles with both technical and defensive perspectives.",
          link: "https://medium.com/@vieuxmbayendour",
        },
      ],
    },
  }

  const t = content[language]
  const filteredProjects = filter === "all" ? t.projects : t.projects.filter((project) => project.category === filter)

  return (
    <section ref={ref} className="py-20 px-6 bg-slate-950 cyber-grid">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.title.split(" ")[0]} <span className="text-emerald-300 neon-text">{t.title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-200 max-w-4xl mx-auto mb-8">{t.intro}</p>

          <div className="flex flex-wrap justify-center gap-3">
            {t.categories.map(([id, name]) => (
              <button key={id} onClick={() => setFilter(id)} className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${filter === id ? "bg-emerald-600 text-white cyber-glow" : "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-emerald-200"}`}>
                {name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: index * 0.08 }} className="cyber-border rounded-lg overflow-hidden bg-slate-900/80 hover:bg-slate-900 transition-all duration-300 group flex flex-col">
              <div className="relative overflow-hidden">
                <img src={project.image} alt="" loading="lazy" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="px-2 py-1 text-xs rounded flex-shrink-0 bg-emerald-950/70 text-emerald-100 border border-emerald-700">{project.status}</span>
                </div>

                <p className="text-slate-200 mb-4 leading-relaxed">{project.description}</p>
                <p className="text-sm text-emerald-100 mb-4 leading-relaxed">{project.note}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-emerald-950/50 text-emerald-100 text-xs rounded border border-emerald-700/70">{tech}</span>
                  ))}
                </div>

                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex justify-center px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm rounded transition-colors">
                    {t.button}
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
