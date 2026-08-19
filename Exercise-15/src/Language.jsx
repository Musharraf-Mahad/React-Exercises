import React, { useContext } from 'react'
import LanguageContext from './LanguageContext'

const Language = () => {
const lang = useContext(LanguageContext);

const message = {
   English: "Hello!",
   Spanish: "iHola!",
};

  return (
    <h1>{message[lang]}</h1>
  )
}

export default Language