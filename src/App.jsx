import { useState } from 'react'
import './App.css'
import { QuoteBox } from './components/QuoteBox'
import quotes from "./json/quote.json"
import colors from "./utils/colors"



function App() {


  /*-- OBTENER INDICE RAMDOM DE QUOTES --*/
  const getIndexRamdom = array => Math.floor(Math.random() * array.length)

  /*-- OBTENER CONTENIDO DE QUOTES EN EL INDICE QUE DEVUELVE GETINDEXRAMDOM --*/
  const firstQuote = quotes[getIndexRamdom(quotes)]
  const firstColor = colors[getIndexRamdom(colors)]

  /*-- ESTADO PARA CAMBIAR DINAMICAMENTE LO VISUAL --*/
  const [ramdomQuote, setRamdomQuote] = useState(firstQuote)
  const [ramdomColor, setRamdomColor] = useState(firstColor)


  /*-- FONDO BOTON --*/
  const background = {
    background: ramdomColor
  }

  /*-- CAMBIO DE ESTADOS EN QUOTE Y COLOR AL HACER CLICK EN EL COMPONENTE BUTTON --*/
  const getAllRamdom = () => {
    setRamdomQuote(quotes[getIndexRamdom(quotes)])
    setRamdomColor(colors[getIndexRamdom(colors)])
  }

  return (
    <div style={background} className="App">

      <QuoteBox
        ramdomQuote={ramdomQuote}
        ramdomColor={ramdomColor}
        getAllRamdom={getAllRamdom}
        background={background}
      />

    </div>
  )
}

export default App
