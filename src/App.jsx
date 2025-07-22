import Header from './components/header'
import Main from './components/main'
import SobreNosotros from './components/aboutUs'
import './App.css'
import RopaCatalogo from './components/items'
import Catalogo from './components/catalogo'
import ImageScroller from './components/colorCard'
import Contactos from './components/contactos'
import { useState } from 'react'

function App() {

  const [seccion, setSeccion] = useState("Inicio")
return(
  <>
  {/* header */}
  <Header  cambiarSeccion={setSeccion}/>

  <div >
    {seccion == "Inicio" && (
      <>
      <Main></Main>
      <SobreNosotros></SobreNosotros>
      <RopaCatalogo></RopaCatalogo>
      </>
    )}
    {
      seccion =="Contactos" && (<>
        <Contactos></Contactos>
      </>)
    }
    {seccion=="SobreNosotros" && (
      <>
      <SobreNosotros></SobreNosotros>
      </>
    )}
    {seccion=="Catalogo" && (
      <>
      <Catalogo></Catalogo>
      </>
    )}
    {
      seccion=="CardColors" && (<>
      <ImageScroller></ImageScroller>
      </>)
    }
  </div>

 
  </>
)

}

export default App
