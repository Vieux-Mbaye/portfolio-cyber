"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { usePortfolioLanguage } from "./usePortfolioLanguage"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [language] = usePortfolioLanguage()
  const ref = useRef()
  const email = "vieuxmbayendour@esp.sn"
  const linkedIn = "https://www.linkedin.com/in/vieux-mbaye-ndour-947831271/"
  const articles = "/articles/"
  const emailJsConfig = {
    serviceId: import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
    userId: import.meta.env.PUBLIC_EMAILJS_USER_ID,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const content = {
    fr: {
      title: "CONTACTEZ-MOI",
      intro: "Discutons de cybersécurité IT/OT, SOC Engineering, automatisation sécurité, DevSecOps ou analyse de risques.",
      infoTitle: "Informations de contact",
      formTitle: "Envoyez-moi un message",
      available: "Disponible pour nouveaux projets",
      availableText: "Missions, collaborations techniques, audit, automatisation SOC et projets de sécurité IT/OT.",
      medium: "Voir mes articles",
      labels: { name: "Nom complet", email: "Email", message: "Message" },
      placeholders: { name: "Votre nom", email: "votre@email.com", message: "Décrivez votre projet ou vos besoins en cybersécurité..." },
      submit: "Envoyer le message",
      sending: "Envoi en cours...",
      success: "Message préparé avec succès.",
      successText: "Je vous répondrai dans les plus brefs délais.",
      mailto: "Email préparé dans votre application mail.",
      mailtoText: "Validez l’envoi dans votre client mail pour me transmettre le message.",
      error: "Erreur lors de l’envoi",
      errorText: "Veuillez réessayer ou me contacter directement par email.",
      methods: [
        ["M", "Email", email, "Réponse sous 24h", `mailto:${email}`],
        ["T", "Téléphone", "+221 77 885 94 62", "Lun-Ven 9h-18h", "tel:+221778859462"],
        ["L", "LinkedIn", "linkedin.com/in/vieux-mbaye-ndour-947831271/", "Réseau professionnel", linkedIn],
        ["A", "Articles", "vndour.vercel.app/articles", "Publications techniques", articles],
      ],
    },
    en: {
      title: "CONTACT ME",
      intro: "Let’s discuss IT/OT cybersecurity, SOC Engineering, security automation, DevSecOps, or risk analysis.",
      infoTitle: "Contact information",
      formTitle: "Send me a message",
      available: "Available for new projects",
      availableText: "Missions, technical collaborations, audits, SOC automation, and IT/OT security projects.",
      medium: "Read my articles",
      labels: { name: "Full name", email: "Email", message: "Message" },
      placeholders: { name: "Your name", email: "your@email.com", message: "Describe your project or cybersecurity needs..." },
      submit: "Send message",
      sending: "Sending...",
      success: "Message prepared successfully.",
      successText: "I will reply as soon as possible.",
      mailto: "Email prepared in your mail application.",
      mailtoText: "Confirm sending in your mail client to send me the message.",
      error: "Sending error",
      errorText: "Please try again or contact me directly by email.",
      methods: [
        ["M", "Email", email, "Reply within 24h", `mailto:${email}`],
        ["T", "Phone", "+221 77 885 94 62", "Mon-Fri 9am-6pm", "tel:+221778859462"],
        ["L", "LinkedIn", "linkedin.com/in/vieux-mbaye-ndour-947831271/", "Professional network", linkedIn],
        ["A", "Articles", "vndour.vercel.app/articles", "Technical publications", articles],
      ],
    },
  }

  const t = content[language]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.userId) {
        const subject = encodeURIComponent(`Contact portfolio - ${formData.name}`)
        const body = encodeURIComponent(`${formData.message}\n\nNom/Name: ${formData.name}\nEmail: ${formData.email}`)
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
        setSubmitStatus("mailto")
        setFormData({ name: "", email: "", message: "" })
        return
      }

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: emailJsConfig.serviceId,
          template_id: emailJsConfig.templateId,
          user_id: emailJsConfig.userId,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: email,
            reply_to: formData.email,
          },
        }),
      })

      if (!response.ok) throw new Error("Failed to send email")
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-900/82 cyber-grid">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={false} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {t.title.split("-")[0]}<span className="text-emerald-300 neon-text">{t.title.includes("-") ? `-${t.title.split("-")[1]}` : ""}</span>
          </h2>
          <p className="readability-panel px-5 py-4 text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">{t.intro}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div initial={false} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <h3 className="text-xl sm:text-2xl font-bold text-emerald-300 mb-6 sm:mb-8">{t.infoTitle}</h3>
            <div className="space-y-4 sm:space-y-6">
              {t.methods.map(([icon, title, value, description, href], index) => (
                <motion.a key={title} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} initial={false} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} className="cyber-border rounded-lg p-4 sm:p-6 bg-slate-800/82 hover:bg-slate-800 transition-all duration-300 group block">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="text-2xl sm:text-3xl bg-emerald-950/40 p-2 sm:p-3 rounded-lg border border-emerald-700/60 flex-shrink-0 text-emerald-300 font-bold w-12 h-12 flex items-center justify-center">{icon}</div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-white">{title}</h4>
                      <p className="text-emerald-300 font-medium text-sm sm:text-base break-words">{value}</p>
                      <p className="text-slate-300 text-xs sm:text-sm">{description}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div initial={false} animate={isVisible ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.8 }} className="mt-6 sm:mt-8 cyber-border rounded-lg p-4 sm:p-6 bg-slate-800/82">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-emerald-300 rounded-full animate-pulse flex-shrink-0"></div>
                <span className="text-white font-medium text-sm sm:text-base">{t.available}</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 text-justify">{t.availableText}</p>
              <a href={articles} className="inline-flex mt-4 text-sm text-emerald-300 hover:text-emerald-200">
                {t.medium} &rarr;
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={false} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="cyber-border rounded-lg p-4 sm:p-6 lg:p-8 bg-slate-800/82">
            <h3 className="text-xl sm:text-2xl font-bold text-emerald-300 mb-4 sm:mb-6">{t.formTitle}</h3>

            {submitStatus === "success" && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-900/50 border border-green-600 rounded-lg">
                <p className="text-green-300 font-medium text-sm sm:text-base">{t.success}</p>
                <p className="text-green-100 text-xs sm:text-sm mt-1">{t.successText}</p>
              </div>
            )}

            {submitStatus === "mailto" && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-emerald-950/60 border border-emerald-600 rounded-lg">
                <p className="text-emerald-300 font-medium text-sm sm:text-base">{t.mailto}</p>
                <p className="text-emerald-100 text-xs sm:text-sm mt-1">{t.mailtoText}</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-900/50 border border-red-600 rounded-lg">
                <p className="text-red-300 font-medium text-sm sm:text-base">{t.error}</p>
                <p className="text-red-100 text-xs sm:text-sm mt-1">{t.errorText}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-white font-medium mb-2 text-sm sm:text-base">{t.labels.name}</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900 border border-emerald-700 rounded-lg text-white focus:outline-none focus:border-emerald-300 transition-colors text-sm sm:text-base" placeholder={t.placeholders.name} />
              </div>
              <div>
                <label className="block text-white font-medium mb-2 text-sm sm:text-base">{t.labels.email}</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900 border border-emerald-700 rounded-lg text-white focus:outline-none focus:border-emerald-300 transition-colors text-sm sm:text-base" placeholder={t.placeholders.email} />
              </div>
              <div>
                <label className="block text-white font-medium mb-2 text-sm sm:text-base">{t.labels.message}</label>
                <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900 border border-emerald-700 rounded-lg text-white focus:outline-none focus:border-emerald-300 transition-colors resize-none text-sm sm:text-base" placeholder={t.placeholders.message} />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-900 text-white font-semibold rounded-lg transition-all duration-300 cyber-glow text-sm sm:text-base">
                {isSubmitting ? t.sending : t.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
