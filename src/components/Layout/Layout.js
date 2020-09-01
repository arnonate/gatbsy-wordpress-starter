import React, { useState, useEffect } from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import { navigate } from "gatsby"
import { createGlobalStyle } from "styled-components"

import { Context } from "../Context"
import "../Theme/reset.css"
import {
  Footer,
  Header,
  AppModal,
  LanguageModal,
  MenuModal,
} from "../../components"

const Layout = ({ children }) => {
  const defaultLang =
    (typeof window !== "undefined" &&
      window.localStorage.getItem("wannaLang")) ||
    (typeof window !== "undefined" && window.navigator.language.split("-")[0])

  const [language, toggleLanguage] = useState(defaultLang ? defaultLang : "en")
  const [appModalIsVisible, toggleAppModalIsVisible] = useState(false)
  const [languageModalIsVisible, toggleLanguageModalIsVisible] = useState(false)
  const [menuModalIsVisible, toggleMenuModalIsVisible] = useState(false)

  useEffect(() => {
    const langList = ["pt"]

    const path =
      typeof window !== "undefined" &&
      window.location.pathname
        .split("/")
        .filter(item => item.length && !langList.includes(item))

    const hash =
      typeof window !== "undefined" && window.location.hash
        ? window.location.hash
        : ""

    if (language !== "en" && !path.includes(language)) {
      const uri = `/${language ? language + "/" : ""}${
        path.length > 0 ? path.join("/") + "/" : ""
      }${hash}`
      navigate(uri)
    }
    if (language === "en") {
      const uri = `/${path.length > 0 ? path.join("/") + "/" : ""}${hash}`
      navigate(uri)
    }
  }, [language])

  const context = {
    language,
    toggleAppModalIsVisible,
    appModalIsVisible,
    toggleLanguage,
    languageModalIsVisible,
    toggleLanguageModalIsVisible,
    menuModalIsVisible,
    toggleMenuModalIsVisible,
  }

  const updateLanguage = lang => {
    toggleLanguage(lang)
    toggleLanguageModalIsVisible(false)
    toggleMenuModalIsVisible(false)

    if (typeof window !== "undefined") {
      window.localStorage.setItem("wannaLang", lang)
    }
  }

  return (
    <Context.Provider value={context}>
      <GlobalStyle
        modalIsVisible={languageModalIsVisible || menuModalIsVisible}
      />

      <Header />

      <ParallaxProvider>
        <main>{children}</main>
      </ParallaxProvider>

      <Footer />

      <AppModal isVisible={appModalIsVisible} />

      <LanguageModal
        isVisible={languageModalIsVisible}
        onUpdate={updateLanguage}
        onClose={toggleLanguageModalIsVisible}
        currentLanguage={language}
      />

      <MenuModal
        isVisible={menuModalIsVisible}
        onLanguageUpdate={updateLanguage}
      />
    </Context.Provider>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${props => (props.modalIsVisible ? "hidden" : "auto")};
  }
`

export default Layout
