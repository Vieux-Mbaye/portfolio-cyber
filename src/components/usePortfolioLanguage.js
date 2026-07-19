import { useEffect, useState } from "react"

const DEFAULT_LANGUAGE = "fr"
const STORAGE_KEY = "portfolio-language"

export function usePortfolioLanguage() {
  const [language, setLanguageState] = useState(DEFAULT_LANGUAGE)

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY)
    if (savedLanguage === "fr" || savedLanguage === "en") {
      setLanguageState(savedLanguage)
    }

    const handleLanguageChange = (event) => {
      setLanguageState(event.detail)
    }

    window.addEventListener("portfolio-language-change", handleLanguageChange)
    return () => window.removeEventListener("portfolio-language-change", handleLanguageChange)
  }, [])

  const setLanguage = (nextLanguage) => {
    window.localStorage.setItem(STORAGE_KEY, nextLanguage)
    setLanguageState(nextLanguage)
    window.dispatchEvent(new CustomEvent("portfolio-language-change", { detail: nextLanguage }))
  }

  return [language, setLanguage]
}
