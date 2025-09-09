"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export default function AboutSkills() {
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

  const skills = [
    { name: "Sécurité des Systèmes d'Information (SSI)", level: 95, color: "bg-blue-500" },
    { name: "Cryptographie & Cryptanalyse", level: 87, color: "bg-purple-500" },
    { name: "Pentesting & Audit de Sécurité", level: 90, color: "bg-red-500" },
    { name: "Gestion des Vulnérabilités", level: 89, color: "bg-orange-500" },
    { name: "Sécurité des Protocoles & Web", level: 88, color: "bg-yellow-500" },
    { name: "SOC & Réponse aux Incidents", level: 88, color: "bg-blue-400" },
    { name: "Gestion des Identités & Ingénierie Sociale", level: 85, color: "bg-green-500" },
    { name: "Administration Sécurisée Systèmes & Réseaux", level: 93, color: "bg-blue-600" },
    { name: "DevSecOps & Gestion de Projet SSI", level: 85, color: "bg-cyan-500" },
    { name: "Intelligence Artificielle & Big Data", level: 80, color: "bg-indigo-500" },
  ]

  const certifications = [
    "Cisco Networking Academy - Network Security (mars 2024)",
    "HCIA-Security de Huawei (nov. 2023)",
    "Networking Essentials de Cisco (mars 2023)",
    "DST Télécommunications et Réseaux - Major de promotion (2023)",
    "Vision : CISSP & CEH",
  ]

  const compliance = [
    "ISO 27001 - Système de Management de la Sécurité",
    "NIST Cybersecurity Framework",
    "RGPD - Règlement Général sur la Protection des Données",
    "Loi n° 2008-12 du Sénégal - Protection des données personnelles",
    "OWASP Top 10 - Sécurité des applications web",
  ]

  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-950 cyber-grid">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            À PROPOS &
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
              _COMPÉTENCES
            </motion.span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-200 max-w-4xl mx-auto mb-6 sm:mb-8 text-left sm:text-justify leading-relaxed">
            🎓 Élève ingénieur de conception en Sécurité des Systèmes d'Information (4e année) à l'École Supérieure
            Polytechnique de Dakar, je me spécialise dans l'administration sécurisée des infrastructures critiques et la
            mise en œuvre de solutions de cybersécurité. Mes compétences couvrent le pentesting, l'analyse de
            vulnérabilités (avec des travaux sur des failles telles que CVE-2021-3156, les techniques ROP et Blind ROP),
            le déploiement et la supervision de SIEM (Wazuh, ELK, Splunk) ainsi que l'intégration DevSecOps. J'ai
            également produit des analyses techniques et pédagogiques sur des vulnérabilités critiques, et enrichi mon
            parcours par une expérience opérationnelle chez Yas Sénégal en planification IP et surveillance
            d'infrastructures télécoms haute disponibilité, ce qui m'a permis de confronter mes acquis académiques à des
            environnements concrets et exigeants.
          </p>
          <div className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto">
            <strong className="text-blue-300">Secteurs d'expertise :</strong> Banques • Opérateurs Télécoms • Services
            Informatiques • Infrastructures Critiques • Conformité Réglementaire
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 cyber-border rounded-lg p-4 sm:p-6 lg:p-8 bg-slate-900/50"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4 sm:mb-6">
              Compétences Techniques Avancées
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-xs sm:text-sm font-medium pr-2">{skill.name}</span>
                    <span className="text-blue-400 text-xs sm:text-sm flex-shrink-0">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full ${skill.color} cyber-glow`}
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-blue-300 mb-2 sm:mb-3">
                  Cryptographie & Cryptanalyse
                </h4>
                <div className="space-y-1 text-xs sm:text-sm text-blue-200">
                  <div>• RSA, AES, chiffrement symétrique/asymétrique</div>
                  <div>• SSL/TLS, hachage SHA, HMAC</div>
                  <div>• Wireshark, OpenSSL, test SSL</div>
                  <div>• Audit des protocoles de sécurité</div>
                </div>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-blue-300 mb-2 sm:mb-3">
                  Pentesting & Audit de Sécurité
                </h4>
                <div className="space-y-1 text-xs sm:text-sm text-blue-200">
                  <div>• Tests d'intrusion internes/externes</div>
                  <div>• Kali Linux (Metasploit, Nmap, Burp Suite)</div>
                  <div>• Hydra, John, Aircrack-ng, sqlmap, Nikto</div>
                  <div>• Énumération, exploitation de vulnérabilités</div>
                </div>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-blue-300 mb-2 sm:mb-3">
                  Gestion des Vulnérabilités
                </h4>
                <div className="space-y-1 text-xs sm:text-sm text-blue-200">
                  <div>• Nessus, OpenVAS, Lynis</div>
                  <div>• Scanners web, audits réguliers</div>
                  <div>• VMs et infrastructures réseau</div>
                  <div>• Analyse et remédiation</div>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-blue-300 mb-2 sm:mb-3">
                  Sécurité des Protocoles & Web
                </h4>
                <div className="space-y-1 text-xs sm:text-sm text-blue-200">
                  <div>• Attaques XSS, CSRF, SQLi, SSRF, IDOR</div>
                  <div>• Analyse de trafic chiffré</div>
                  <div>• Burp Suite, OWASP ZAP, Fiddler</div>
                  <div>• Browser devtools</div>
                </div>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-blue-300 mb-2 sm:mb-3">
                  SOC & Réponse aux Incidents
                </h4>
                <div className="space-y-1 text-xs sm:text-sm text-blue-200">
                  <div>• Surveillance active, détection d'intrusion</div>
                  <div>• Investigation post-incident</div>
                  <div>• SIEM : Wazuh, ELK Stack, Splunk</div>
                  <div>• Corrélation, alerting, reporting</div>
                </div>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-blue-300 mb-2 sm:mb-3">
                  Gestion des Identités & Ingénierie Sociale
                </h4>
                <div className="space-y-1 text-xs sm:text-sm text-blue-200">
                  <div>• Tests de phishing (SET, Zphisher)</div>
                  <div>• Élévation de privilège</div>
                  <div>• Évasion d'antivirus</div>
                  <div>• Campagnes simulées</div>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-blue-300 mb-2 sm:mb-3">
                  Administration Sécurisée Systèmes & Réseaux
                </h4>
                <div className="space-y-1 text-xs sm:text-sm text-blue-200">
                  <div>• Hardening Linux (Debian, Ubuntu, Kali)</div>
                  <div>• Audit de logs, filtrage, firewall</div>
                  <div>• iptables, UFW, Fail2ban, auditctl</div>
                  <div>• Snort, Suricata, pfSense</div>
                </div>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-blue-300 mb-2 sm:mb-3">
                  DevSecOps & Gestion de Projet SSI
                </h4>
                <div className="space-y-1 text-xs sm:text-sm text-blue-200">
                  <div>• Intégration sécurité dans CI/CD</div>
                  <div>• Docker, Git, Jenkins (bases)</div>
                  <div>• Audit de containers, analyse SCA</div>
                  <div>• Déploiement sécurisé</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications & Compliance */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Certifications */}
            <div className="cyber-border rounded-lg p-4 sm:p-6 bg-slate-900/50">
              <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-3 sm:mb-4">Certifications & Formation</h3>
              <div className="space-y-2 sm:space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-start space-x-3 p-2 sm:p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full cyber-glow mt-2 flex-shrink-0"></div>
                    <span className="text-blue-200 text-xs sm:text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="cyber-border rounded-lg p-4 sm:p-6 bg-slate-900/50">
              <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-3 sm:mb-4">Conformité & Réglementations</h3>
              <div className="space-y-2 sm:space-y-3">
                {compliance.map((comp, index) => (
                  <motion.div
                    key={comp}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="flex items-start space-x-3 p-2 sm:p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full cyber-glow mt-2 flex-shrink-0"></div>
                    <span className="text-green-200 text-xs sm:text-sm">{comp}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="cyber-border rounded-lg p-4 sm:p-6 bg-slate-900/50">
              <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-3 sm:mb-4">Langues & Qualités</h3>
              <div className="space-y-3">
                <div className="text-blue-200">
                  <div className="font-medium text-sm sm:text-base">Langues</div>
                  <div className="text-xs sm:text-sm text-slate-300">Français (natif) • Anglais (professionnel)</div>
                </div>
                <div className="text-blue-200">
                  <div className="font-medium text-sm sm:text-base">Qualités</div>
                  <div className="text-xs sm:text-sm text-slate-300">Persévérance • Leadership • Esprit d'équipe</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-12 cyber-border rounded-lg p-4 sm:p-6 lg:p-8 bg-slate-900/50"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4 sm:mb-6">
            Contributions & Publications Techniques
          </h3>
          <div className="space-y-6 sm:space-y-8">
            {/* First row with 2 articles */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="cyber-border rounded-lg p-4 sm:p-6 bg-slate-800/50">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  "Exploitation de la vulnérabilité CVE-2021-3156 — Baron Samedit"
                </h4>
                <p className="text-blue-200 text-xs sm:text-sm mb-2 sm:mb-3">Publié sur LinkedIn & Medium</p>
                <div className="space-y-2 text-xs sm:text-sm text-blue-100 mb-3 sm:mb-4">
                  <div>
                    👉 Étude approfondie de l'exploitation d'une race condition combinée à un heap overflow dans sudo,
                    basée sur la vulnérabilité CWE-787 (Out-of-Bounds Write)
                  </div>
                  <div>
                    👉 Démonstration technique pas à pas, synchronisation de processus, gestion avancée de la mémoire en
                    C, obtention d'un shell root
                  </div>
                  <div>👉 Analyse de l'impact sécurité, bonnes pratiques de défense, réflexion offensive/défensive</div>
                </div>
                <a
                  href="https://medium.com/@vieuxmbayendour/comprendre-cwe-787-%C3%A0-travers-cve-2021-3156-quand-un-simple-backslash-devient-une-faille-root-0fec6f130910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm rounded transition-colors"
                >
                  Lire l'article complet →
                </a>
              </div>

              <div className="cyber-border rounded-lg p-4 sm:p-6 bg-slate-800/50">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  "De la vulnérabilité au shell : comprendre et construire une attaque ROP de A à Z"
                </h4>
                <p className="text-blue-200 text-xs sm:text-sm mb-2 sm:mb-3">Publié sur Medium & LinkedIn</p>
                <div className="space-y-2 text-xs sm:text-sm text-blue-100 mb-3 sm:mb-4">
                  <div>
                    👉 Décryptage pédagogique du ROP (Return-Oriented Programming), depuis la vulnérabilité jusqu'à
                    l'exécution d'une commande arbitraire
                  </div>
                  <div>👉 Analyse mémoire, schémas explicatifs, GDB, Python et assembly</div>
                  <div>👉 Guide complet pour comprendre les techniques d'exploitation avancées</div>
                </div>
                <a
                  href="https://medium.com/@vieuxmbayendour/de-la-vuln%C3%A9rabilit%C3%A9-au-shell-comprendre-et-construire-une-attaque-rop-de-a-%C3%A0-f0f8c1d2dc8b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm rounded transition-colors"
                >
                  Lire l'article complet →
                </a>
              </div>
            </div>

            {/* Second row with 1 centered article */}
            <div className="flex justify-center">
              <div className="cyber-border rounded-lg p-4 sm:p-6 bg-slate-800/50 max-w-2xl">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  "Du ROP à l'aveugle : la magie du BROP"
                </h4>
                <p className="text-blue-200 text-xs sm:text-sm mb-2 sm:mb-3">Publié sur Medium & LinkedIn</p>
                <div className="space-y-2 text-xs sm:text-sm text-blue-100 mb-3 sm:mb-4">
                  <div>
                    👉 Présentation pédagogique du Blind Return-Oriented Programming (BROP), technique issue de
                    l'exploit culte Hacking Blind
                  </div>
                  <div>
                    👉 Explication de la découverte à l'aveugle : taille du buffer, contournement du stack canary octet
                    par octet, identification de gadgets ROP sans binaire visible 🧩
                  </div>
                  <div>
                    👉 Reconstitution complète d'une attaque ROP dans le noir, jusqu'à l'obtention d'un shell root
                  </div>
                  <div>
                    👉 Démonstration locale contre nginx 1.4.0, article illustré et accessible même aux débutants
                  </div>
                </div>
                <a
                  href="https://medium.com/@vieuxmbayendour/du-rop-%C3%A0-laveugle-la-magie-du-brop-6fe63a77198c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm rounded transition-colors"
                >
                  Lire l'article complet →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

