"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_oeaichr",
          template_id: "template_gthp4x1",
          user_id: "cZe3wWDsoPQvpdaBt",
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: "vieuxmbayendour@esp.sn",
            reply_to: formData.email,
          },
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: "M",
      title: "Email",
      value: "vieuxmbayendour@esp.sn",
      description: "Reponse sous 24h",
    },
    {
      icon: "T",
      title: "Telephone",
      value: "+221 77 885 94 62",
      description: "Lun-Ven 9h-18h",
    },
    {
      icon: "L",
      title: "LinkedIn",
      value: "linkedin.com/in/vieux-mbaye-ndour-947831271/",
      description: "Reseau professionnel",
    },
    {
      icon: "P",
      title: "Localisation",
      value: "Grand-Standing, 21000 Thies",
      description: "Senegal",
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
            CONTACTEZ-
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
              MOI
            </motion.span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-200 max-w-3xl mx-auto">
            Discutons de vos besoins en cybersecurite et de la facon dont je peux vous aider
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-6 sm:mb-8">Informations de contact</h3>
            <div className="space-y-4 sm:space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="cyber-border rounded-lg p-4 sm:p-6 bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="text-2xl sm:text-3xl bg-emerald-900/30 p-2 sm:p-3 rounded-lg border border-emerald-600/30 flex-shrink-0 text-emerald-400 font-bold w-12 h-12 flex items-center justify-center">
                      {method.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-white">{method.title}</h4>
                      <p className="text-emerald-400 font-medium text-sm sm:text-base break-words">{method.value}</p>
                      <p className="text-emerald-200 text-xs sm:text-sm">{method.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 sm:mt-8 cyber-border rounded-lg p-4 sm:p-6 bg-slate-800/50"
            >
              <div className="flex items-center gap-3 mt-4">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse flex-shrink-0"></div>
                <span className="text-white font-medium text-sm sm:text-base">Disponible pour nouveaux projets</span>
              </div>
              <p className="text-emerald-200 text-xs sm:text-sm mt-2">
                Actuellement disponible pour des missions de conseil et d'audit en cybersecurite
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="cyber-border rounded-lg p-4 sm:p-6 lg:p-8 bg-slate-800/50"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-4 sm:mb-6">Envoyez-moi un message</h3>

            {submitStatus === "success" && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-900/50 border border-green-600 rounded-lg">
                <p className="text-green-400 font-medium text-sm sm:text-base">Message envoye avec succes !</p>
                <p className="text-green-200 text-xs sm:text-sm mt-1">Je vous repondrai dans les plus brefs delais.</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-900/50 border border-red-600 rounded-lg">
                <p className="text-red-400 font-medium text-sm sm:text-base">Erreur lors de l'envoi</p>
                <p className="text-red-200 text-xs sm:text-sm mt-1">
                  Veuillez reessayer ou me contacter directement par email.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-white font-medium mb-2 text-sm sm:text-base">Nom complet</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900 border border-emerald-600 rounded-lg text-white focus:outline-none focus:border-emerald-400 transition-colors text-sm sm:text-base"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2 text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900 border border-emerald-600 rounded-lg text-white focus:outline-none focus:border-emerald-400 transition-colors text-sm sm:text-base"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2 text-sm sm:text-base">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900 border border-emerald-600 rounded-lg text-white focus:outline-none focus:border-emerald-400 transition-colors resize-none text-sm sm:text-base"
                  placeholder="Decrivez votre projet ou vos besoins en cybersecurite..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white font-semibold rounded-lg transition-all duration-300 cyber-glow text-sm sm:text-base"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
