"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function ProjectsGallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("all")
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), {
      threshold: 0.1,
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "SIEM Wazuh + IDS Intelligence Artificielle",
      category: "siem",
      description: "Déploiement d'un SIEM Wazuh couplé à un IDS avec intelligence artificielle (Suricata + IA).",
      technologies: ["Wazuh", "Suricata", "Python", "Machine Learning", "ELK Stack"],
      impact: "Détection automatique d'intrusions (signatures) + classification intelligente des alertes par IA.",
      status: "En cours",
      image: "/wazuh.png",
    },
    {
      title: "BankGuard - Projet DevSecOps",
      category: "devsecops",
      description: "Développement d'un logiciel bancaire sécurisé avec CI/CD intégré.",
      technologies: ["Docker", "Jenkins", "Git", "SCA", "SAST", "DAST"],
      impact: "Tests de sécurité intégrés, durcissement et audit de code automatisés dans la pipeline.",
      status: "Terminé",
      image: "/bankguard.png",
      projectUrl: "https://github.com/Vieux-Mbaye/bankguard.git",
      codeUrl: "https://github.com/Vieux-Mbaye/bankguard.git",
    },
    {
      title: "Infrastructure Réseau Avancée d'Entreprise",
      category: "infrastructure",
      description: "Architecture sécurisée complète avec gestion centralisée des accès.",
      technologies: ["Kerberos", "FreeRADIUS", "Active Directory", "LDAP", "VoIP", "Samba"],
      impact: "Déploiement sur environnement virtualisé (VNC, RDP, noVNC) et gouvernance des accès.",
      status: "Terminé",
      image: "/rx.jpg",
      projectUrl: "https://drive.google.com/file/d/11yrDGUYlPqWFR3TtSl2KKsTvQ6oLh35O/view?usp=sharing",
    },
    {
      title: "Pare-feu pfSense + FreeRADIUS + Squid",
      category: "security",
      description: "Solution complète de sécurité réseau avec authentification centralisée.",
      technologies: ["pfSense", "FreeRADIUS", "Squid", "DNS", "Portail Captif"],
      impact: "Filtrage Web avancé, DNS local avec enregistrements dynamiques et portail captif.",
      status: "Terminé",
      image: "/rx.jpg",
    },
    {
      title: "Détection de Malwares par Machine Learning",
      category: "ai",
      description: "Apprentissage supervisé pour détecter des malwares à partir de features statiques.",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Feature Engineering"],
      impact: "Extraction de caractéristiques, modèle de prédiction et évaluation des performances.",
      status: "Terminé",
      image: "/malware.png",
    },
    {
      title: "Audit de Sécurité & Durcissement Système",
      category: "audit",
      description: "Analyse de vulnérabilités et renforcement de la configuration système.",
      technologies: ["Nessus", "OpenVAS", "Lynis", "Hardening Linux", "Log Analysis"],
      impact: "Revue des permissions, durcissement des services, centralisation et analyse de logs.",
      status: "Terminé",
      image: "/dur.png",
    },
    {
      title: "Correction Automatisée de Devoirs avec IA",
      category: "ai",
      description: "Plateforme d'analyse de réponses d'élèves avec scoring basé NLP + règles pédagogiques.",
      technologies: ["NLP", "Python", "Machine Learning", "Natural Language Processing"],
      impact: "Score automatique et justification, backoffice enseignant.",
      status: "Terminé",
      image: "/IA.png",
    },
    {
      title: "Plateforme de Gestion Budgétaire ESP",
      category: "development",
      description: "Suivi des dépenses par projet/étudiant avec authentification et chiffrement.",
      technologies: ["PHP", "MySQL", "JavaScript", "Chiffrement", "Auth"],
      impact: "Gestion sécurisée des budgets et rôles utilisateurs.",
      status: "Terminé",
      image: "/Gestion.jpg",
    },
    {
      title: "Système IoT Contrôle de Lampes MQTT",
      category: "iot",
      description: "Pilotage distant d'équipements via MQTT (Mosquitto) et interface Web.",
      technologies: ["MQTT", "Mosquitto", "IoT", "Web UI", "Security"],
      impact: "Contrôles, authentification et logique d'accès.",
      status: "Terminé",
      image: "/mqtt.png",
    },
  ]

  const categories = [
    { id: "all", name: "Tous" },
    { id: "siem", name: "SIEM & SOC" },
    { id: "devsecops", name: "DevSecOps" },
    { id: "infrastructure", name: "Infrastructure" },
    { id: "security", name: "Sécurité" },
    { id: "ai", name: "IA" },
    { id: "audit", name: "Audit" },
    { id: "development", name: "Dev" },
    { id: "iot", name: "IoT" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-950 cyber-grid">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            MES{" "}
            <motion.span
              className="text-blue-400"
              animate={{
                textShadow: [
                  "0 0 20px rgba(96, 165, 250, 0.5), 0 0 40px rgba(96, 165, 250, 0.3)",
                  "0 0 30px rgba(96, 165, 250, 0.7), 0 0 60px rgba(96, 165, 250, 0.4)",
                  "0 0 20px rgba(96, 165, 250, 0.5), 0 0 40px rgba(96, 165, 250, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              PROJETS
            </motion.span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-200 max-w-3xl mx-auto mb-6 sm:mb-8">
            Découvrez mes réalisations en cybersécurité et développement d'outils de sécurité
          </p>

          <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 sm:gap-4 pb-2 sm:pb-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex-shrink-0 px-3 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm ${
                  filter === category.id
                    ? "bg-blue-600 text-white cyber-glow"
                    : "bg-slate-800 text-blue-200 hover:bg-slate-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors duration-300" />
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white pr-2">{project.title}</h3>
                  <span
                    className={`flex-shrink-0 px-2 py-1 text-xs rounded ${
                      project.status === "En cours"
                        ? "bg-yellow-900/50 text-yellow-200 border border-yellow-600"
                        : "bg-green-900/50 text-green-200 border border-green-600"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-blue-200 mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>

                <div className="mb-3 sm:mb-4">
                  <div className="text-xs sm:text-sm text-blue-400 font-medium mb-2">Réalisations :</div>
                  <div className="text-white text-xs sm:text-sm">{project.impact}</div>
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-900/50 text-blue-200 text-xs rounded border border-blue-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm rounded transition-colors text-center"
                    >
                      Voir le projet
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white text-xs sm:text-sm rounded transition-colors text-center"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
