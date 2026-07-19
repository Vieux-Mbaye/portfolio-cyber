"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { usePortfolioLanguage } from "./usePortfolioLanguage"

export default function AboutSkills() {
  const [isVisible, setIsVisible] = useState(false)
  const [language] = usePortfolioLanguage()
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const content = {
    fr: {
      heading: "À PROPOS & EXPERTISE",
      paragraphs: [
        "Ingénieur de Conception en Sécurité des Systèmes d’Information, je me positionne comme un profil cybersécurité polyvalent, capable de relier les enjeux d’attaque, de défense, d’automatisation, de systèmes, de réseaux et d’environnements critiques.",
        "Mon parcours combine SOC Engineering, orchestration SOAR, réponse aux incidents, sécurité réseau, administration sécurisée des systèmes, pentesting, DevSecOps, investigation numérique et cybersécurité industrielle ICS/OT. Je m’intéresse aussi à l’intégration des agents IA dans les processus de cybersécurité pour l’analyse, l’automatisation, l’aide à la décision et l’amélioration de l’efficacité opérationnelle.",
        "Dans le cadre de mon mémoire d’ingénieur, j’ai travaillé sur la conception et le déploiement d’un Cyber Range orienté ICS/OT, destiné à simuler des attaques contrôlées sur des infrastructures critiques et à analyser leurs impacts opérationnels dans un environnement isolé et maîtrisé.",
        "J’aime concevoir des solutions concrètes, automatiser les tâches de sécurité, analyser les risques, documenter proprement les opérations et relier les actions techniques aux enjeux métier.",
      ],
      domains: [
        ["Cybersécurité IT/OT", ["Sécurité des systèmes d’information", "Cybersécurité industrielle ICS/OT", "Analyse des risques sur environnements critiques", "Simulation contrôlée d’attaques", "Analyse d’impacts opérationnels", "Sensibilisation et formation sur environnements simulés"]],
        ["SOC Engineering & SOAR", ["Analyse et corrélation d’alertes", "Réponse aux incidents", "Threat hunting", "Workflows SOAR", "Automatisation du triage, de l’enrichissement et de la priorisation", "Human-in-the-loop", "Playbooks et indicateurs SOC"]],
        ["Sécurité systèmes & réseaux", ["Administration Linux", "Hardening Debian/Ubuntu", "Firewalling", "IDS/IPS", "Routage, VLAN, NAT, BGP, OSPF", "DNS, DHCP, supervision réseau", "Analyse de logs et diagnostic infrastructure"]],
        ["Pentesting & vulnérabilités", ["Tests web, systèmes et réseaux", "XSS, CSRF, SQLi, SSRF, IDOR", "Élévation de privilèges", "Post-exploitation contrôlée", "Gestion des vulnérabilités", "Lecture offensive et recommandations défensives"]],
        ["DevSecOps", ["Docker", "Git", "CI/CD sécurisé", "Audit de code", "Sécurité applicative", "Contrôles SCA/SAST/DAST", "Surveillance continue"]],
        ["Agents IA & automatisation sécurité", ["Agents IA pour l’analyse sécurité", "Automatisation des processus SOC", "Aide à la décision", "Réduction de charge opérationnelle", "Enrichissement intelligent des incidents", "Structuration de workflows autonomes et contrôlés"]],
      ],
      skillTitle: "Compétences techniques",
      skillGroups: [
        ["Cybersécurité", ["Sécurité des systèmes d’information", "Cybersécurité IT/OT", "Industrial Cybersecurity", "ICS/OT Security", "Analyse de risques", "Incident Response", "Threat Hunting", "Gestion des vulnérabilités", "Gouvernance SSI"]],
        ["SOC / SOAR", ["SOC Engineering", "SIEM", "SOAR", "Wazuh", "Shuffle", "TheHive", "Cortex", "MISP", "OpenCTI", "ELK Stack", "Playbooks", "KPIs SOC"]],
        ["Systèmes & réseaux", ["Network Security", "Administration Linux", "Hardening Linux", "Firewalling", "VLAN", "NAT", "BGP", "OSPF", "DNS", "DHCP", "pfSense", "OPNsense", "LibreNMS", "phpIPAM"]],
        ["Pentesting", ["Pentesting Web", "Pentesting système", "Pentesting réseau", "Burp Suite", "Nmap", "Metasploit", "Hydra", "John", "sqlmap", "Nessus", "OpenVAS", "OWASP Top 10"]],
        ["DevSecOps & développement", ["Docker", "Git", "Jenkins", "CI/CD Security", "SCA", "Audit de code", "Python", "Java", "C", "Rust", "Bash", "SQL"]],
        ["Forensic", ["Digital Forensics", "Analyse de logs", "Analyse Windows/Linux", "Volatility", "Autopsy", "FTK", "Timeline analysis", "Investigation incident"]],
        ["IA & automatisation", ["AI Agents", "Security Automation", "Analyse intelligente", "Aide à la décision", "Automatisation SOC", "Enrichissement automatisé", "Orchestration contrôlée"]],
      ],
      certificationsTitle: "Certifications",
      certifications: ["Cisco Networking Academy – Network Security", "Networking Essentials – Cisco Networking Academy", "HCIA-Security – Huawei"],
      positioningTitle: "Positionnement",
      positioning:
        "Un profil technique capable de comprendre l’attaque, la défense, l’automatisation, les systèmes, les réseaux et les environnements critiques, avec une attention forte portée à l’impact opérationnel.",
      educationTitle: "Formation",
      education: [
        {
          title: "Diplôme d’Ingénieur de Conception en Sécurité des Systèmes d’Information",
          school: "École Supérieure Polytechnique de Dakar",
          period: "2023 – 2026",
          description:
            "Formation d’ingénieur orientée cybersécurité, sécurité des systèmes d’information, sécurité réseau, audit, cryptographie, forensic, sécurité applicative, gouvernance SSI, DevSecOps et cybersécurité des environnements critiques.",
          note: "Mémoire : Conception et déploiement d’un Cyber Range pour la simulation offensive contrôlée d’attaques ICS/OT sur infrastructures critiques.",
        },
        {
          title: "Diplôme Supérieur de Technologie en Télécommunications et Réseaux",
          school: "École Supérieure Polytechnique de Dakar",
          period: "2021 – 2023",
          description: "Formation en réseaux, télécommunications, administration système et infrastructure IT.",
          note: "Major de promotion.",
        },
      ],
      publicationsTitle: "Publications techniques",
      read: "Lire sur Medium",
    },
    en: {
      heading: "ABOUT & EXPERTISE",
      paragraphs: [
        "I am an Information Systems Security Engineer with a broad cybersecurity profile, able to connect offensive understanding, defense, automation, systems, networks, and critical environments.",
        "My background combines SOC Engineering, SOAR orchestration, incident response, network security, secure system administration, pentesting, DevSecOps, digital forensics, and ICS/OT industrial cybersecurity. I also explore AI agents applied to cybersecurity for analysis, automation, decision support, and operational efficiency.",
        "As part of my engineering thesis, I designed and deployed an ICS/OT-oriented Cyber Range to simulate controlled attacks against critical infrastructure models and analyze operational impacts in an isolated and controlled environment.",
        "I like building concrete solutions, automating security tasks, analyzing risk, documenting operations clearly, and connecting technical work to business impact.",
      ],
      domains: [
        ["IT/OT Cybersecurity", ["Information systems security", "ICS/OT industrial cybersecurity", "Risk analysis for critical environments", "Controlled attack simulation", "Operational impact analysis", "Awareness and training using simulated environments"]],
        ["SOC Engineering & SOAR", ["Alert analysis and correlation", "Incident response", "Threat hunting", "SOAR workflows", "Automated triage, enrichment, and prioritization", "Human-in-the-loop", "SOC playbooks and metrics"]],
        ["Systems & Network Security", ["Linux administration", "Debian/Ubuntu hardening", "Firewalling", "IDS/IPS", "Routing, VLAN, NAT, BGP, OSPF", "DNS, DHCP, network monitoring", "Log analysis and infrastructure troubleshooting"]],
        ["Pentesting & Vulnerabilities", ["Web, system, and network testing", "XSS, CSRF, SQLi, SSRF, IDOR", "Privilege escalation", "Controlled post-exploitation", "Vulnerability management", "Offensive analysis and defensive recommendations"]],
        ["DevSecOps", ["Docker", "Git", "Secure CI/CD", "Code audit", "Application security", "SCA/SAST/DAST controls", "Continuous monitoring"]],
        ["AI Agents & Security Automation", ["AI agents for security analysis", "SOC process automation", "Decision support", "Operational workload reduction", "Intelligent incident enrichment", "Controlled autonomous workflow design"]],
      ],
      skillTitle: "Technical Skills",
      skillGroups: [
        ["Cybersecurity", ["Information Systems Security", "IT/OT Cybersecurity", "Industrial Cybersecurity", "ICS/OT Security", "Risk Analysis", "Incident Response", "Threat Hunting", "Vulnerability Management", "Security Governance"]],
        ["SOC / SOAR", ["SOC Engineering", "SIEM", "SOAR", "Wazuh", "Shuffle", "TheHive", "Cortex", "MISP", "OpenCTI", "ELK Stack", "Playbooks", "SOC KPIs"]],
        ["Systems & Networks", ["Network Security", "Linux Administration", "Linux Hardening", "Firewalling", "VLAN", "NAT", "BGP", "OSPF", "DNS", "DHCP", "pfSense", "OPNsense", "LibreNMS", "phpIPAM"]],
        ["Pentesting", ["Web Pentesting", "System Pentesting", "Network Pentesting", "Burp Suite", "Nmap", "Metasploit", "Hydra", "John", "sqlmap", "Nessus", "OpenVAS", "OWASP Top 10"]],
        ["DevSecOps & Development", ["Docker", "Git", "Jenkins", "CI/CD Security", "SCA", "Code Audit", "Python", "Java", "C", "Rust", "Bash", "SQL"]],
        ["Forensics", ["Digital Forensics", "Log Analysis", "Windows/Linux Analysis", "Volatility", "Autopsy", "FTK", "Timeline analysis", "Incident investigation"]],
        ["AI & Automation", ["AI Agents", "Security Automation", "Intelligent Analysis", "Decision Support", "SOC Automation", "Automated Enrichment", "Controlled Orchestration"]],
      ],
      certificationsTitle: "Certifications",
      certifications: ["Cisco Networking Academy – Network Security", "Networking Essentials – Cisco Networking Academy", "HCIA-Security – Huawei"],
      positioningTitle: "Positioning",
      positioning:
        "A technical profile able to understand attack, defense, automation, systems, networks, and critical environments, with strong attention to operational impact.",
      educationTitle: "Education",
      education: [
        {
          title: "Engineering Degree in Information Systems Security",
          school: "École Supérieure Polytechnique de Dakar",
          period: "2023 – 2026",
          description:
            "Engineering curriculum focused on cybersecurity, information systems security, network security, audit, cryptography, forensics, application security, security governance, DevSecOps, and critical environment cybersecurity.",
          note: "Thesis: Design and deployment of a Cyber Range for controlled offensive ICS/OT attack simulation on critical infrastructure models.",
        },
        {
          title: "Higher Technology Diploma in Telecommunications and Networks",
          school: "École Supérieure Polytechnique de Dakar",
          period: "2021 – 2023",
          description: "Training in networks, telecommunications, system administration, and IT infrastructure.",
          note: "Top of class.",
        },
      ],
      publicationsTitle: "Technical Publications",
      read: "Read on Medium",
    },
  }

  const publications = [
    {
      title: "CVE-2021-3156 Baron Samedit",
      description: language === "fr" ? "Analyse technique de vulnérabilité Linux, exploitation contrôlée et lectures défensives." : "Technical analysis of a Linux vulnerability, controlled exploitation, and defensive takeaways.",
      link: "https://medium.com/@vieuxmbayendour/comprendre-cwe-787-%C3%A0-travers-cve-2021-3156-quand-un-simple-backslash-devient-une-faille-root-0fec6f130910",
    },
    {
      title: "Return-Oriented Programming",
      description: language === "fr" ? "Explication de ROP, mémoire, chaînes d’exécution et implications sécurité." : "Explanation of ROP, memory concepts, execution chains, and security implications.",
      link: "https://medium.com/@vieuxmbayendour/de-la-vuln%C3%A9rabilit%C3%A9-au-shell-comprendre-et-construire-une-attaque-rop-de-a-%C3%A0-f0f8c1d2dc8b",
    },
    {
      title: "Blind ROP",
      description: language === "fr" ? "Lecture pédagogique de BROP et de l’analyse offensive/défensive associée." : "Educational walkthrough of BROP and its offensive/defensive analysis.",
      link: "https://medium.com/@vieuxmbayendour/du-rop-%C3%A0-laveugle-la-magie-du-brop-b8c5c9e8a8a8",
    },
  ]

  const t = content[language]
  const cardClass = "cyber-border rounded-lg bg-slate-900/82"

  return (
    <section ref={ref} className="py-14 sm:py-20 px-4 sm:px-6 cyber-grid bg-slate-950/82">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-14">
          <h2 className="text-center text-[clamp(2rem,9vw,3.5rem)] font-bold mb-6 text-white leading-tight">
            {t.heading.split("&")[0]}& <span className="text-emerald-300 neon-text">{t.heading.split("&")[1]}</span>
          </h2>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.4fr] gap-6 sm:gap-8 items-center">
            <div className="cyber-border rounded-lg overflow-hidden bg-slate-900/60">
              <img src="/esp-ssi-2026.jpeg" alt="Vieux Mbaye NDOUR SSI" loading="lazy" className="w-full h-full max-h-[520px] object-cover" />
            </div>
            <div className="space-y-5 text-slate-200 leading-relaxed">
              {t.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 mb-14">
          {t.domains.map(([title, items], index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.08 }} className={`${cardClass} p-6`}>
              <h3 className="text-xl font-bold text-emerald-300 mb-4">{title}</h3>
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-300 flex-shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className={`${cardClass} p-6 lg:col-span-2`}>
            <h3 className="text-2xl font-bold text-emerald-300 mb-6">{t.skillTitle}</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {t.skillGroups.map(([title, skills]) => (
                <div key={title} className="rounded-lg bg-slate-800/72 p-4 min-w-0">
                  <h4 className="font-semibold text-white mb-3">{title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs rounded border border-emerald-700/70 bg-emerald-950/40 text-emerald-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} className="space-y-6">
            <div className={`${cardClass} p-6`}>
              <h3 className="text-xl font-bold text-emerald-300 mb-4">{t.certificationsTitle}</h3>
              <div className="space-y-3">
                {t.certifications.map((cert) => (
                  <div key={cert} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="mt-2 w-2 h-2 rounded-full bg-emerald-300 cyber-glow flex-shrink-0"></span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${cardClass} p-6`}>
              <h3 className="text-xl font-bold text-emerald-300 mb-4">{t.positioningTitle}</h3>
              <p className="text-sm text-slate-200 leading-relaxed">{t.positioning}</p>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-14">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className={`${cardClass} p-6`}>
            <h3 className="text-2xl font-bold text-emerald-300 mb-6">{t.educationTitle}</h3>
            <div className="space-y-5">
              {t.education.map((formation) => (
                <div key={formation.title} className="rounded-lg bg-slate-800/72 p-4">
                  <div className="text-sm text-emerald-200 mb-1">{formation.period}</div>
                  <h4 className="font-bold text-white">{formation.title}</h4>
                  <p className="text-sm text-slate-300 mb-3">{formation.school}</p>
                  <p className="text-sm text-slate-200 leading-relaxed mb-2">{formation.description}</p>
                  <p className="text-sm text-emerald-100 leading-relaxed">{formation.note}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} className={`${cardClass} p-6`}>
            <h3 className="text-2xl font-bold text-emerald-300 mb-6">{t.publicationsTitle}</h3>
            <div className="space-y-4">
              {publications.map((publication) => (
                <a key={publication.title} href={publication.link} target="_blank" rel="noopener noreferrer" className="block rounded-lg bg-slate-800/72 p-4 hover:bg-slate-800 transition-colors">
                  <h4 className="font-bold text-white mb-2">{publication.title}</h4>
                  <p className="text-sm text-slate-200 leading-relaxed">{publication.description}</p>
                  <span className="inline-block mt-3 text-sm text-emerald-300">
                    {t.read} &rarr;
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
