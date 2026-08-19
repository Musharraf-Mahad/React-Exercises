import React, { useState } from 'react'
import LanguageContext from './LanguageContext'
import Language from './Language';

const App = () => {

  const [lang, setLang] = useState("English");

  const handleLang = () => {
    setLang((prev) => (prev === 'English' ? 'Spanish' : 'English'))
  }

  return (
    <LanguageContext.Provider value={lang}>
    <button
    onClick={handleLang}
    >Switch to {lang === 'English' ? 'Spanish' : 'English'}</button>
    <Language />
    </LanguageContext.Provider>
  )
}

export default App