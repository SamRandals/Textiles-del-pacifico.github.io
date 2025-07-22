
import '../styles/header.css'
import { Search } from 'lucide-react'

function Header({ cambiarSeccion }){


function searchInput({buscarSeccion}) {
  const searchButton = document.querySelector(".header__search");
  const searchContainer = document.querySelector(".search__container");

  searchButton.addEventListener("click", () => {
    // Verifica si ya existe un input dentro del contenedor
    if (!searchContainer.querySelector("input")) {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Buscar...";
      input.classList.add("search__input");
      searchContainer.appendChild(input);
    }
    
  });
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
    <Search color="#fff" className='header__search' onClick={searchInput}></Search>
    </div>
    </div>

    </>
    
  )
}

export default Header 