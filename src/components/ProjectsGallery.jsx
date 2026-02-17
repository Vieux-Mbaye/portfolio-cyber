"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export default function ProjectsGallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("all")
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

  const projects = [
    {
      title: "Maturation de la Plateforme SOAR Open-Source pour la Cyber-Defense Proactive",
      category: "soar",
      description: "Projet de maturation d'un stack SOC open-source (Wazuh, Shuffle, TheHive, Cortex, MISP) pour transformer la posture de securite reactive en un framework de defense intelligent et proactif.",
      technologies: ["Wazuh", "Shuffle", "TheHive", "Cortex", "MISP", "VirusTotal", "AbuseIPDB", "API REST", "Python"],
      impact: "5 phases deployees : enrichissement multi-sources, reponse active HITL, gestion des vulnerabilites, threat hunting automatise, metriques SOC. Reduction significative du travail manuel analyste et acceleration du temps de reponse aux incidents.",
      status: "En cours",
      image: "../../public/shuffle.png",
    },
    {
      title: "ICS Cyber Range - Digital Twin de Dispatching Electrique",
      category: "ics",
      description: "Conception et deploiement d'un Cyber Range industriel simulant un reseau de dispatching electrique complet suivant le modele Purdue.",
      technologies: ["SCADA", "PLC", "DCS", "Historian", "HMI", "Purdue Model", "OpenPLC", "Modbus", "GRFICSv2"],
      impact: "Cyber Range operationnel avec 2 sous-stations, architecture Purdue complete, phase offensive pour demonstration d'impacts et proposition de mesures defensives.",
      status: "En cours",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1SErglvb9VXwbdooisIk38PxevRgre.png",
    },
    {
      title: "SIEM + IDS Intelligence Artificielle",
      category: "siem",
      description: "Deploiement d'un SIEM couple d'un IDS avec intelligence artificielle (Suricata + IA)",
      technologies: ["SIEM", "Suricata", "Python", "Machine Learning", "ELK Stack"],
      impact: "Detection automatique d'intrusions via signatures + classification intelligente des alertes par IA",
      status: "En cours",
      image: "../../public/wazuh.png",
    },
    {
      title: "BankGuard - Projet DevSecOps",
      category: "devsecops",
      description: "Developpement d'un logiciel bancaire securise avec CI/CD integre",
      technologies: ["Docker", "Jenkins", "Git", "SCA", "SAST", "DAST"],
      impact: "Integration de tests de securite, durcissement et audit de code automatises",
      status: "Termine",
      image: "../../public/bankguard.png",
    },
    {
      title: "Infrastructure Reseau Avancee d'Entreprise",
      category: "infrastructure",
      description: "Architecture securisee complete avec gestion centralisee des acces",
      technologies: ["Kerberos", "FreeRADIUS", "Active Directory", "LDAP", "VoIP", "Samba"],
      impact: "Deploiement sur environnement virtualise avec VNC, RDP, NoVNC",
      status: "Termine",
      image: "../../public/rx.jpg",
    },
    {
      title: "Pare-feu pfSense + FreeRADIUS + Squid",
      category: "security",
      description: "Solution complete de securite reseau avec authentification centralisee",
      technologies: ["pfSense", "FreeRADIUS", "Squid", "DNS", "Portail Captif"],
      impact: "Filtrage Web avance, gestion DNS locale avec enregistrements dynamiques",
      status: "Termine",
      image: "../../public/rx.jpg",
    },
    {
      title: "Detection de Malwares par Machine Learning",
      category: "ai",
      description: "Systeme de detection de malwares par apprentissage supervise",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Feature Engineering"],
      impact: "Analyse statique de fichiers, extraction de features, prediction de comportements malveillants",
      status: "Termine",
      image: "../../public/malware.png",
    },
    {
      title: "Audit de Securite & Durcissement Systeme",
      category: "audit",
      description: "Analyse complete de vulnerabilites et renforcement de la securite",
      technologies: ["Nessus", "OpenVAS", "Lynis", "Hardening Linux", "Log Analysis"],
      impact: "Retro-ingenierie partielle, renforcement des permissions, logs et acces",
      status: "Termine",
      image: "../../public/dur.png",
    },
    {
      title: "Correction Automatisee de Devoirs avec IA",
      category: "ai",
      description: "Plateforme d'analyse de reponses d'eleves avec scoring automatique",
      technologies: ["NLP", "Python", "Machine Learning", "Natural Language Processing"],
      impact: "Scoring automatique base sur NLP et regles pedagogiques",
      status: "Termine",
      image: "../../public/IA.png",
    },
    {
      title: "Plateforme de Gestion Budgetaire ESP",
      category: "development",
      description: "Systeme de suivi des depenses par projet/etudiant",
      technologies: ["PHP", "MySQL", "JavaScript", "Chiffrement", "Auth"],
      impact: "Authentification securisee, stockage en base chiffree",
      status: "Termine",
      image: "../../public/Gestion.jpg",
    },
    {
      title: "Systeme IoT Controle de Lampes MQTT",
      category: "iot",
      description: "Pilotage distant d'equipements via protocole MQTT",
      technologies: ["MQTT", "Mosquitto", "IoT", "Web Interface", "Security"],
      impact: "Interfaces web/console, logique de securite d'acces",
      status: "Termine",
      image: "../../public/mqtt.png",
    },
  ]

  const categories = [
    { id: "all", name: "Tous les projets" },
    { id: "soar", name: "SOAR & Automatisation" },
    { id: "ics", name: "ICS/OT & Industrie" },
    { id: "siem", name: "SIEM & SOC" },
    { id: "devsecops", name: "DevSecOps" },
    { id: "infrastructure", name: "Infrastructure" },
    { id: "security", name: "Securite" },
    { id: "ai", name: "Intelligence Artificielle" },
    { id: "audit", name: "Audit & Pentest" },
    { id: "development", name: "Developpement" },
    { id: "iot", name: "IoT & Systemes" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section ref={ref} className="py-20 px-6 bg-slate-950 cyber-grid">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            MES{" "}
            <motion.span
              className="text-emerald-400"
              animate={{
                textShadow: [
                  "0 0 20px rgba(52, 211, 153, 0.5), 0 0 40px rgba(52, 211, 153, 0.3)",
                  "0 0 30px rgba(52, 211, 153, 0.7), 0 0 60px rgba(52, 211, 153, 0.4)",
                  "0 0 20px rgba(52, 211, 153, 0.5), 0 0 40px rgba(52, 211, 153, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              PROJETS
            </motion.span>
          </h2>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto mb-8">
            Decouvrez mes realisations en cybersecurite, automatisation SOC et securite industrielle
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "bg-emerald-600 text-white cyber-glow"
                    : "bg-slate-800 text-emerald-200 hover:bg-slate-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="cyber-border rounded-lg overflow-hidden bg-slate-900/80 hover:bg-slate-900 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  crossOrigin="anonymous"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-emerald-900/10 transition-colors duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span
                    className={`px-2 py-1 text-xs rounded flex-shrink-0 ml-2 ${
                      project.status === "En cours"
                        ? "bg-yellow-900/50 text-yellow-200 border border-yellow-600"
                        : "bg-green-900/50 text-green-200 border border-green-600"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-emerald-200 mb-4">{project.description}</p>

                <div className="mb-4">
                  <div className="text-sm text-emerald-400 font-medium mb-2">Realisations:</div>
                  <div className="text-white text-sm">{project.impact}</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-emerald-900/50 text-emerald-200 text-xs rounded border border-emerald-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm rounded transition-colors">
                    Voir le projet
                  </button>
                  <button className="px-4 py-2 border border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white text-sm rounded transition-colors">
                    Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
