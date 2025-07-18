
import '../styles/header.css'
import { Search } from 'lucide-react'
function Header(){
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
        <button>Inicio</button>
        <button>ShowRooms</button>
        <button>Nosotros</button>
        <button>Catalogo</button>
        <button>Carta de Colores</button>
        <button>Servicios</button>
        <button>Contactos</button>
      </div>
    <div className="search__container">
    <Search color="#fff" className='header__search'></Search>
    </div>
    </div>

    </>
    
  )
}

export default Header 