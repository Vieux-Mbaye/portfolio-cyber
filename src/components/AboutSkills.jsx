"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export default function AboutSkills() {
  const [isVisible, setIsVisible] = useState(false)
  const [theme] = useState("dark")
  const [language] = useState("fr")
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

  const translations = {
    fr: {
      about: {
        title: "A PROPOS & ",
        titleHighlight: "COMPETENCES",
        description:
          "Élève ingénieur en cybersécurité à l’École Supérieure Polytechnique de Dakar et actuellement en stage chez Talixman Group, j’interviens au cœur des opérations de sécurité sur des environnements SOC et industriels, en concevant des solutions avancées d’automatisation, de détection et de réponse aux incidents. Mon profil allie expertise en SOC engineering, pentesting, investigation numérique Windows et Linux, cybersécurité industrielle et conception de solutions sécurisées intégrant l’intelligence artificielle. Orienté performance et cyberdéfense proactive, je transforme les processus de sécurité en systèmes intelligents, efficaces et résilients, tout en développant des projets à fort impact sur la protection des infrastructures critiques. Auteur reconnu de trois publications techniques sur Medium concernant l'exploitation de vulnerabilites critiques (CVE-2021-3156, ROP, BROP), mon profil garantit une maitrise des outils d'orchestration securite et une vision strategique de la cyberdefense proactive.",
        expertise:
          "Secteurs d'expertise : Energie & Industrie - Operateurs Telecoms - Banques & Finance - Services Informatiques - Infrastructures Critiques - Conformite Reglementaire",
        publications: "Contributions & Publications Techniques",
      },
    },

  }

  const t = translations[language]

  const skills = [
    { name: language === "fr" ? "Operations SOC & Analyse de Securite" : "SOC Operations & Security Analysis", level: 95, color: "bg-emerald-500" },
    { name: language === "fr" ? "Automatisation & Orchestration SOAR" : "SOAR Automation & Orchestration", level: 94, color: "bg-teal-500" },
    { name: language === "fr" ? "Securite Industrielle ICS/OT & Cyber Range" : "ICS/OT Industrial Security & Cyber Range", level: 92, color: "bg-yellow-500" },
    { name: language === "fr" ? "Pentesting & Red Team" : "Pentesting & Red Team", level: 93, color: "bg-red-500" },
    { name: language === "fr" ? "SIEM, Detection & Correlation" : "SIEM, Detection & Correlation", level: 94, color: "bg-green-600" },
    { name: language === "fr" ? "Threat Hunting & Renseignement Cyber (CTI)" : "Threat Hunting & Cyber Threat Intelligence (CTI)", level: 91, color: "bg-lime-500" },
    { name: language === "fr" ? "Reponse aux Incidents & Containment" : "Incident Response & Containment", level: 92, color: "bg-orange-500" },
    { name: language === "fr" ? "Cryptographie & Securite des Protocoles" : "Cryptography & Protocol Security", level: 89, color: "bg-emerald-400" },
    { name: language === "fr" ? "Administration Securisee Systemes & Reseaux" : "Secure Systems & Network Administration", level: 93, color: "bg-cyan-500" },
    { name: language === "fr" ? "DevSecOps & Integration Securite CI/CD" : "DevSecOps & CI/CD Security Integration", level: 87, color: "bg-green-500" },
    { name: language === "fr" ? "Digital Forensic" : "DevSecOps & CI/CD Security Integration", level: 87, color: "bg-green-500" },
    { name: language === "fr" ? "IA & Securite" : "SIEM, Detection & Correlation", level: 94, color: "bg-green-600" },
  ]

  const skillDetails = language === "fr" ? [
    {
      title: "Operations SOC & Analyse de Securite",
      items: [
        "Triage intelligent et priorisation des alertes de securite",
        "Correlation multi-sources pour la prise de decision automatisee",
        "Analyse approfondie des incidents de securite et investigation forensique",
        "Creation de cas d'incidents avec logique conditionnelle (reduction des faux positifs)",
        "Suivi des KPI securite : MTTR, alertes traitees, incidents crees",
        "Surveillance proactive et detection d'intrusions en temps reel",
      ],
    },
    {
      title: "Automatisation & Orchestration SOAR",
      items: [
        "Conception de workflows avances d'enrichissement d'alertes via Cortex",
        "Enrichissement multi-sources : threat intelligence externe + contexte interne",
        "Implementation de reponses actives avec validation Human-in-the-Loop (HITL)",
        "Automatisation du blocage d'IP via integration API (active response)",
        "Workflows programmes : collecte de vulnerabilites, ticketing automatique",
        "Ingestion automatisee d'IOC et retro-hunting dans les logs historiques",
      ],
    },
    {
      title: "Securite Industrielle ICS/OT",
      items: [
        "Conception de Cyber Range simulant un dispatching electrique complet",
        "Architecture Purdue : sous-stations de production et de distribution",
        "Integration SCADA Global, PLC, DCS backbone, Historian, HMI",
        "Simulation des flux de courant et de donnees capteurs vers automates",
        "Phase offensive : demonstration d'attaques et mesure d'impacts operationnels",
        "Proposition de mesures defensives pour la surveillance et la protection",
      ],
    },
    {
      title: "Threat Hunting & Renseignement Cyber",
      items: [
        "Ingestion quotidienne automatisee d'IOC depuis les sources CTI",
        "Retro-hunting : recherche d'indicateurs dans les logs historiques",
        "Escalation automatique vers incidents haute priorite en cas de match",
        "Chasse aux menaces proactive basee sur les techniques MITRE ATT&CK",
        "Analyse comportementale et detection d'anomalies sur le reseau",
        "Production de rapports de renseignement et recommandations operationnelles",
      ],
    },
    {
      title: "Pentesting & Red Team",
      items: [
        "Tests d'intrusion internes et externes complets",
        "Suite Kali Linux : Metasploit, Nmap, Burp Suite, Hydra, John, sqlmap",
        "Exploitation de vulnerabilites web : XSS, CSRF, SQLi, SSRF, IDOR",
        "Elevation de privileges, evasion d'antivirus, techniques post-exploitation",
        "Tests de phishing (SET, Zphisher), campagnes d'ingenierie sociale",
        "Gestion des vulnerabilites : Nessus, OpenVAS, Lynis, scanners web",
      ],
    },
    {
      title: "Cryptographie & Securite Protocoles",
      items: [
        "RSA, AES, chiffrement symetrique/asymetrique, SSL/TLS",
        "Hachage SHA, HMAC, audit de protocoles de securite",
        "Analyse de trafic chiffre avec Wireshark, OpenSSL",
        "Securite des applications web : OWASP ZAP, Fiddler, Burp Suite",
      ],
    },
    {
      title: "Administration Securisee",
      items: [
        "Hardening Linux (Debian, Ubuntu, Kali), audit de logs",
        "iptables, UFW, Fail2ban, auditctl, segmentation reseau",
        "IDS/IPS : Snort, Suricata, pfSense",
        "Active Directory, FreeRADIUS, Kerberos, LDAP",
      ],
    },
    {
      title: "DevSecOps & CI/CD",
      items: [
        "Integration de la securite dans les workflows CI/CD",
        "Docker, Git, Jenkins, audit de containers",
        "Analyse SCA, SAST, DAST, deploiement securise",
        "Durcissement des images et pipelines de build",
      ],
    },
  ] : [
    {
      title: "SOC Operations & Security Analysis",
      items: [
        "Intelligent triage and alert prioritization",
        "Multi-source correlation for automated decision-making",
        "In-depth incident analysis and forensic investigation",
        "Conditional case creation logic (false positive reduction)",
        "Security KPI tracking: MTTR, alerts processed, incidents created",
        "Proactive monitoring and real-time intrusion detection",
      ],
    },
    {
      title: "SOAR Automation & Orchestration",
      items: [
        "Advanced alert enrichment workflows via Cortex",
        "Multi-source enrichment: external threat intel + internal context",
        "Active response with Human-in-the-Loop (HITL) validation",
        "Automated IP blocking via API integration (active response)",
        "Scheduled workflows: vulnerability collection, automated ticketing",
        "Automated IOC ingestion and retro-hunting in historical logs",
      ],
    },
    {
      title: "ICS/OT Industrial Security",
      items: [
        "Cyber Range design simulating a complete electric dispatching",
        "Purdue model architecture: production and distribution substations",
        "Global SCADA, PLC, DCS backbone, Historian, HMI integration",
        "Simulation of power flow and sensor data to automation systems",
        "Offensive phase: attack demonstration and operational impact measurement",
        "Defensive measures proposal for monitoring and infrastructure protection",
      ],
    },
    {
      title: "Threat Hunting & Cyber Intelligence",
      items: [
        "Daily automated IOC ingestion from CTI sources",
        "Retro-hunting: searching indicators in historical logs",
        "Automatic escalation to high-priority incidents on match",
        "Proactive threat hunting based on MITRE ATT&CK techniques",
        "Behavioral analysis and network anomaly detection",
        "Intelligence report production and operational recommendations",
      ],
    },
    {
      title: "Pentesting & Red Team",
      items: [
        "Complete internal and external penetration testing",
        "Kali Linux suite: Metasploit, Nmap, Burp Suite, Hydra, John, sqlmap",
        "Web vulnerability exploitation: XSS, CSRF, SQLi, SSRF, IDOR",
        "Privilege escalation, AV evasion, post-exploitation techniques",
        "Phishing tests (SET, Zphisher), social engineering campaigns",
        "Vulnerability management: Nessus, OpenVAS, Lynis, web scanners",
      ],
    },
    {
      title: "Cryptography & Protocol Security",
      items: [
        "RSA, AES, symmetric/asymmetric encryption, SSL/TLS",
        "SHA hashing, HMAC, security protocol auditing",
        "Encrypted traffic analysis with Wireshark, OpenSSL",
        "Web application security: OWASP ZAP, Fiddler, Burp Suite",
      ],
    },
    {
      title: "Secure Administration",
      items: [
        "Linux hardening (Debian, Ubuntu, Kali), log auditing",
        "iptables, UFW, Fail2ban, auditctl, network segmentation",
        "IDS/IPS: Snort, Suricata, pfSense",
        "Active Directory, FreeRADIUS, Kerberos, LDAP",
      ],
    },
    {
      title: "DevSecOps & CI/CD",
      items: [
        "Security integration in CI/CD workflows",
        "Docker, Git, Jenkins, container auditing",
        "SCA, SAST, DAST analysis, secure deployment",
        "Image hardening and build pipeline security",
      ],
    },
  ]

  const certifications = language === "fr" ? [
    "Cisco Networking Academy - Network Security (mars 2024)",
    "HCIA-Security de Huawei (nov. 2023)",
    "Networking Essentials de Cisco (mars 2023)",
    "DST Telecommunications et Reseaux - Major de promotion (2023)",
    "En cours : CISSP & CEH (preparation 2025)",
  ] : [
    "Cisco Networking Academy - Network Security (March 2024)",
    "Huawei HCIA-Security (Nov. 2023)",
    "Cisco Networking Essentials (March 2023)",
    "DST Telecommunications and Networks - Top of class (2023)",
    "In progress: CISSP & CEH (preparation 2025)",
  ]

  const compliance = language === "fr" ? [
    "ISO 27001 - Systeme de Management de la Securite de l'Information",
    "NIST Cybersecurity Framework (CSF)",
    "MITRE ATT&CK - Framework de detection et de reponse",
    "IEC 62443 - Securite des systemes d'automatisation industrielle",
    "RGPD - Reglement General sur la Protection des Donnees",
    "Loi n 2008-12 du Senegal - Protection des donnees personnelles",
    "OWASP Top 10 - Securite des applications web",
  ] : [
    "ISO 27001 - Information Security Management System",
    "NIST Cybersecurity Framework (CSF)",
    "MITRE ATT&CK - Detection and Response Framework",
    "IEC 62443 - Industrial Automation Systems Security",
    "GDPR - General Data Protection Regulation",
    "Senegal Law n 2008-12 - Personal Data Protection",
    "OWASP Top 10 - Web Application Security",
  ]

  const glowAnimation = {
    textShadow: [
      "0 0 20px rgba(52, 211, 153, 0.5), 0 0 40px rgba(52, 211, 153, 0.3)",
      "0 0 30px rgba(52, 211, 153, 0.7), 0 0 60px rgba(52, 211, 153, 0.4)",
      "0 0 20px rgba(52, 211, 153, 0.5), 0 0 40px rgba(52, 211, 153, 0.3)",
    ],
  }

  return (
    <section
      ref={ref}
      className={`py-20 px-6 cyber-grid ${theme === "dark" ? "bg-slate-950" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >

          {/* TITRE CENTRÉ */}
          <h2 className={`text-center text-4xl md:text-5xl font-bold mb-4 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            {t.about.title}
            <motion.span
              className={theme === "dark" ? "text-emerald-400" : "text-emerald-600"}
              animate={glowAnimation}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {t.about.titleHighlight}
            </motion.span>
          </h2>

          {/* TEXTE JUSTIFIÉ */}
          <p className={`text-lg max-w-5xl mx-auto mb-8 leading-relaxed text-justify hyphens-auto ${
            theme === "dark" ? "text-emerald-200" : "text-gray-600"
          }`}>
            {t.about.description}
          </p>

          {/* SECTEURS (centré) */}
          <div className={`text-center text-lg max-w-4xl mx-auto ${
            theme === "dark" ? "text-slate-300" : "text-gray-700"
          }`}>
            <strong className={theme === "dark" ? "text-emerald-300" : "text-emerald-600"}>
              {t.about.expertise}
            </strong>
          </div>

        </motion.div>


        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`lg:col-span-2 cyber-border rounded-lg p-8 ${
              theme === "dark" ? "bg-slate-900/50" : "bg-white/70 border-gray-200"
            }`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}>
              {language === "fr" ? "Competences Techniques Avancees" : "Advanced Technical Skills"}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                      {skill.name}
                    </span>
                    <span className={`text-sm ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${theme === "dark" ? "bg-slate-800" : "bg-gray-200"}`}>
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

            <div className="grid md:grid-cols-2 gap-6">
              {skillDetails.map((detail) => (
                <div key={detail.title} className={`p-4 rounded-lg ${theme === "dark" ? "bg-slate-800/50" : "bg-gray-50"}`}>
                  <h4 className={`text-base font-semibold mb-3 ${theme === "dark" ? "text-emerald-300" : "text-emerald-600"}`}>
                    {detail.title}
                  </h4>
                  <div className={`space-y-1 text-sm ${theme === "dark" ? "text-emerald-200" : "text-gray-600"}`}>
                    {detail.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${theme === "dark" ? "bg-emerald-400" : "bg-emerald-500"}`}></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className={`cyber-border rounded-lg p-6 ${theme === "dark" ? "bg-slate-900/50" : "bg-white/70 border-gray-200"}`}>
              <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}>
                {language === "fr" ? "Certifications & Formation" : "Certifications & Training"}
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                      theme === "dark" ? "bg-slate-800/50 hover:bg-slate-800" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full cyber-glow mt-2 flex-shrink-0 ${theme === "dark" ? "bg-emerald-400" : "bg-emerald-600"}`}></div>
                    <span className={`text-sm ${theme === "dark" ? "text-emerald-200" : "text-gray-700"}`}>{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={`cyber-border rounded-lg p-6 ${theme === "dark" ? "bg-slate-900/50" : "bg-white/70 border-gray-200"}`}>
              <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}>
                {language === "fr" ? "Conformite & Frameworks" : "Compliance & Frameworks"}
              </h3>
              <div className="space-y-3">
                {compliance.map((comp, index) => (
                  <motion.div
                    key={comp}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                      theme === "dark" ? "bg-slate-800/50 hover:bg-slate-800" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full cyber-glow mt-2 flex-shrink-0 ${theme === "dark" ? "bg-green-400" : "bg-green-600"}`}></div>
                    <span className={`text-sm ${theme === "dark" ? "text-green-200" : "text-gray-700"}`}>{comp}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={`cyber-border rounded-lg p-6 ${theme === "dark" ? "bg-slate-900/50" : "bg-white/70 border-gray-200"}`}>
              <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}>
                {language === "fr" ? "Langues & Qualites" : "Languages & Qualities"}
              </h3>
              <div className="space-y-3">
                <div className={theme === "dark" ? "text-emerald-200" : "text-gray-700"}>
                  <div className="font-medium">{language === "fr" ? "Langues" : "Languages"}</div>
                  <div className={`text-sm ${theme === "dark" ? "text-slate-300" : "text-gray-600"}`}>
                    {language === "fr" ? "Francais (natif) - Anglais" : "French (native) - English (professional)"}
                  </div>
                </div>
                <div className={theme === "dark" ? "text-emerald-200" : "text-gray-700"}>
                  <div className="font-medium">{language === "fr" ? "Qualites" : "Qualities"}</div>
                  <div className={`text-sm ${theme === "dark" ? "text-slate-300" : "text-gray-600"}`}>
                    {language === "fr"
                      ? "Rigueur analytique - Leadership - Esprit d'equipe - Curiosite technique - Proactivite"
                      : "Analytical rigor - Leadership - Teamwork - Technical curiosity - Proactivity"}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`mt-12 cyber-border rounded-lg p-8 ${theme === "dark" ? "bg-slate-900/50" : "bg-white/70 border-gray-200"}`}
        >
          <h3 className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}>
            {t.about.publications}
          </h3>
          <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className={`cyber-border rounded-lg p-6 ${theme === "dark" ? "bg-slate-800/50" : "bg-gray-50"}`}>
                <h4 className={`text-xl font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {language === "fr"
                    ? 'Article technique : "Exploitation de la vulnerabilite CVE-2021-3156 -- Baron Samedit"'
                    : 'Technical Article: "Exploiting CVE-2021-3156 -- Baron Samedit"'}
                </h4>
                <p className={`text-sm mb-3 ${theme === "dark" ? "text-emerald-200" : "text-gray-500"}`}>
                  {language === "fr" ? "Publie sur LinkedIn & Medium" : "Published on LinkedIn & Medium"}
                </p>
                <div className={`space-y-2 text-sm mb-4 ${theme === "dark" ? "text-emerald-100" : "text-gray-600"}`}>
                  <div>{language === "fr" ? "-- Etude approfondie de l'exploitation d'une race condition combinee a un heap overflow dans sudo, basee sur CWE-787" : "-- In-depth study of a race condition combined with heap overflow in sudo, based on CWE-787"}</div>
                  <div>{language === "fr" ? "-- Demonstration technique pas a pas, gestion avancee de la memoire en C, obtention d'un shell root" : "-- Step-by-step technical demo, advanced C memory management, root shell obtained"}</div>
                  <div>{language === "fr" ? "-- Analyse de l'impact securite, bonnes pratiques de defense" : "-- Security impact analysis, defense best practices"}</div>
                </div>
                <a href="https://medium.com/@vieuxmbayendour/comprendre-cwe-787-%C3%A0-travers-cve-2021-3156-quand-un-simple-backslash-devient-une-faille-root-0fec6f130910" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm rounded transition-colors">
                  {language === "fr" ? "Lire l'article complet" : "Read full article"} &rarr;
                </a>
              </div>

              <div className={`cyber-border rounded-lg p-6 ${theme === "dark" ? "bg-slate-800/50" : "bg-gray-50"}`}>
                <h4 className={`text-xl font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {language === "fr"
                    ? 'Article technique : "De la vulnerabilite au shell : comprendre et construire une attaque ROP de A a Z"'
                    : 'Technical Article: "From vulnerability to shell: understanding and building a ROP attack from A to Z"'}
                </h4>
                <p className={`text-sm mb-3 ${theme === "dark" ? "text-emerald-200" : "text-gray-500"}`}>
                  {language === "fr" ? "Publie sur Medium & LinkedIn" : "Published on Medium & LinkedIn"}
                </p>
                <div className={`space-y-2 text-sm mb-4 ${theme === "dark" ? "text-emerald-100" : "text-gray-600"}`}>
                  <div>{language === "fr" ? "-- Decryptage pedagogique du ROP, de la vulnerabilite a l'execution de commande arbitraire" : "-- Educational breakdown of ROP, from vulnerability to arbitrary command execution"}</div>
                  <div>{language === "fr" ? "-- Analyse memoire, schemas explicatifs, GDB, Python et assembly" : "-- Memory analysis, explanatory diagrams, GDB, Python and assembly"}</div>
                  <div>{language === "fr" ? "-- Guide complet des techniques d'exploitation avancees" : "-- Complete guide to advanced exploitation techniques"}</div>
                </div>
                <a href="https://medium.com/@vieuxmbayendour/de-la-vuln%C3%A9rabilit%C3%A9-au-shell-comprendre-et-construire-une-attaque-rop-de-a-%C3%A0-f0f8c1d2dc8b" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm rounded transition-colors">
                  {language === "fr" ? "Lire l'article complet" : "Read full article"} &rarr;
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className={`cyber-border rounded-lg p-6 max-w-lg ${theme === "dark" ? "bg-slate-800/50" : "bg-gray-50"}`}>
                <h4 className={`text-xl font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {language === "fr"
                    ? 'Article technique : "Du ROP a l\'aveugle : la magie du BROP"'
                    : 'Technical Article: "From ROP to Blind: the magic of BROP"'}
                </h4>
                <p className={`text-sm mb-3 ${theme === "dark" ? "text-emerald-200" : "text-gray-500"}`}>
                  {language === "fr" ? "Publie sur Medium & LinkedIn" : "Published on Medium & LinkedIn"}
                </p>
                <div className={`space-y-2 text-sm mb-4 ${theme === "dark" ? "text-emerald-100" : "text-gray-600"}`}>
                  <div>{language === "fr" ? "-- Presentation pedagogique du Blind Return-Oriented Programming (BROP), technique issue de Hacking Blind" : "-- Educational presentation of BROP, technique from Hacking Blind"}</div>
                  <div>{language === "fr" ? "-- Decouverte a l'aveugle : taille du buffer, contournement du stack canary octet par octet" : "-- Blind discovery: buffer size, byte-by-byte stack canary bypass"}</div>
                  <div>{language === "fr" ? "-- Reconstitution complete d'une attaque ROP dans le noir, jusqu'au shell root" : "-- Complete reconstruction of a blind ROP attack, up to root shell"}</div>
                  <div>{language === "fr" ? "-- Demonstration locale contre nginx 1.4.0, article illustre et accessible" : "-- Local demo against nginx 1.4.0, illustrated and accessible article"}</div>
                </div>
                <a href="https://medium.com/@vieuxmbayendour/du-rop-%C3%A0-laveugle-la-magie-du-brop-b8c5c9e8a8a8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm rounded transition-colors">
                  {language === "fr" ? "Lire l'article complet" : "Read full article"} &rarr;
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
