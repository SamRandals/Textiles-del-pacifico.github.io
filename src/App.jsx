import Header from './components/header'
import Main from './components/main'
import SobreNosotros from './components/aboutUs'
import './App.css'
import RopaCatalogo from './components/items'
import Catalogo from './components/catalogo'
import ImageScroller from './components/colorCard'
import Contactos from './components/contactos'
import ShowRooms from './components/showrooms'
import Footer from './components/footer'
import { useEffect, useState } from 'react'

function App() {
  const [seccion, setSeccion] = useState("Inicio")
   useEffect(() => {
    const yaMostrado = localStorage.getItem("alertBienvenida")

    if (!yaMostrado) {
      alert("Este proyecto no busca reemplazar, usarse con fines propios, o buscar algun beneficio economico, este proyecto busca fortalecer de forma autonoma mis capacidades como desarrollador de software, tomando de referencia esta empresa, textiles del pacifico, gracias por su atencion!!")
      localStorage.setItem("alertBienvenida", "true")
    }
  }, [])
  return (
    <>
      <Header cambiarSeccion={setSeccion} onSearchClick={() => setMostrarInput(true)} />

    
      <div>
        {seccion === "Inicio" && (
          <>
            <Main />
            <SobreNosotros />
            <RopaCatalogo />
          </>
        )}
        {seccion === "Contactos" && <Contactos />}
        {seccion === "ShowRooms" && <ShowRooms />}
        {seccion === "SobreNosotros" && <SobreNosotros />}
        {seccion === "Catalogo" && <Catalogo />}
        {seccion === "CardColors" && <ImageScroller />}
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
