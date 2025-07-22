
import '../styles/header.css'
import { useState } from 'react'
import { Search } from 'lucide-react'

function Header({ cambiarSeccion }){

  

  const [mostrarInput, setMostrarInput] = useState(false)
  const [busqueda, setBusqueda] = useState("")

  const manejarBusqueda = (e) => {
    if (e.key === "Enter") {
      const termino = busqueda.toLowerCase()

      if (termino.includes("contacto")) {
        cambiarSeccion("Contactos")
      } else if (termino.includes("catalogo")) {
        cambiarSeccion("Catalogo")
      } else if (termino.includes("inicio")) {
        cambiarSeccion("Inicio")
      } else if (termino.includes("nosotros")) {
        cambiarSeccion("SobreNosotros")
      } else if (termino.includes("color")) {
        cambiarSeccion("CardColors")
      }else if (termino.includes("show")){
        cambiarSeccion("ShowRooms")
      }

      setBusqueda("")
      setMostrarInput(false)
    }
  }

  return(

      <>
    
    <header className="header">
        <div className='logo__container'>
          <img src="/images/logo_textiles_del_pacifico.jpg" alt="" />
        </div>
        <div className="Title__main">
          <h2>La mejor calidad de tela - Algodón 10%
          </h2>
        </div>

    </header>

    <div className='subHeader'>
      <label htmlFor="drop__menu" className="drop__menu">=</label>
      <input type="checkbox" name="" id="drop__menu"/>

      <div className="nav__buttons">
        <button onClick={()=>cambiarSeccion("Inicio")}> Inicio</button>
        <button onClick={()=>cambiarSeccion("ShowRooms")}>ShowRooms</button>
        <button onClick={()=>cambiarSeccion("SobreNosotros")}>Nosotros</button>
        <button onClick={()=>cambiarSeccion("Catalogo")}>Catalogo</button>
        <button onClick={()=>cambiarSeccion("CardColors")}>Carta de Colores</button>
        <button>Servicios</button>
        <button onClick={()=>cambiarSeccion("Contactos")}>Contactos</button>
      </div>
    <div className="search__container">
    <Search color="#fff" className='header__search' onClick={() => setMostrarInput(!mostrarInput)}></Search>
     {mostrarInput && (
          <input
            type="text"
            placeholder="Buscar..."
            className="search__input"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            onKeyDown={manejarBusqueda}
          />
        )}
    </div>
    </div>

    </>
    
  )
}

export default Header 