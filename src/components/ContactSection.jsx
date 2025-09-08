"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
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
          service_id: "service_oeaichr", // Real service ID from EmailJS dashboard
          template_id: "template_gthp4x1", // You still need to create this template in EmailJS
          user_id: "cZe3wWDsoPQvpdaBt", // Real public key from EmailJS dashboard
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
      icon: "📧",
      title: "Email",
      value: "vieuxmbayendour@esp.sn",
      description: "Réponse sous 24h",
    },
    {
      icon: "📱",
      title: "Téléphone",
      value: "+221 77 885 94 62",
      description: "Lun-Ven 9h-18h",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/vieux-mbaye-ndour-947831271/",
      description: "Réseau professionnel",
    },
    {
      icon: "📍",
      title: "Localisation",
      value: "Grand-Standing, 21000 Thiès",
      description: "Sénégal",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-6 bg-slate-900 cyber-grid">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            CONTACTEZ-
            <motion.span
              className="text-blue-400"
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
              MOI
            </motion.span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Discutons de vos besoins en cybersécurité et de la façon dont je peux vous aider
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-8">Informations de contact</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="cyber-border rounded-lg p-6 bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl bg-blue-900/30 p-3 rounded-lg border border-blue-600/30">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{method.title}</h4>
                      <p className="text-blue-400 font-medium">{method.value}</p>
                      <p className="text-blue-200 text-sm">{method.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 cyber-border rounded-lg p-6 bg-slate-800/50"
            >

              <div className="flex items-center space-x-3 mt-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-medium">Disponible pour nouveaux projets</span>
              </div>
              <p className="text-blue-200 text-sm mt-2">
                Actuellement disponible pour des missions de conseil et d'audit en cybersécurité
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="cyber-border rounded-lg p-8 bg-slate-800/50"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Envoyez-moi un message</h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-900/50 border border-green-600 rounded-lg">
                <p className="text-green-400 font-medium">Message envoyé avec succès !</p>
                <p className="text-green-200 text-sm mt-1">Je vous répondrai dans les plus brefs délais.</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-900/50 border border-red-600 rounded-lg">
                <p className="text-red-400 font-medium">Erreur lors de l'envoi</p>
                <p className="text-red-200 text-sm mt-1">Veuillez réessayer ou me contacter directement par email.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Nom complet</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-blue-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-blue-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-blue-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Décrivez votre projet ou vos besoins en cybersécurité..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold rounded-lg transition-all duration-300 cyber-glow"
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



