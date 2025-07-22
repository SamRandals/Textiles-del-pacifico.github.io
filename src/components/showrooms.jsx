import '../styles/showrooms.css'
import { useEffect, useState } from 'react'


function ShowRooms(){
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 200) // simula delay de entrada
  }, [])


return(<>
<div className="showrom__info-container">
  <div className={`text__container ${visible ? "fade-in" : ""}`}>

        <h2>Las Showrooms</h2>
    <p>Los showrooms de Textiles del Pacífico son mucho más que simples espacios de exhibición: son entornos cuidadosamente diseñados para inspirar la creatividad, fomentar la innovación y fortalecer conexiones con nuestros clientes. Cada rincón de nuestros showrooms refleja el compromiso de la empresa con la calidad, la estética y la funcionalidad, convirtiéndose en un punto de encuentro ideal para diseñadores, emprendedores, confeccionistas y amantes del mundo textil.</p>

<p>Al visitarnos, tendrás la oportunidad de explorar una amplia gama de telas y materiales, seleccionados minuciosamente para satisfacer las más altas exigencias del mercado. Contamos con textiles de origen natural, como algodones y linos de excelente acabado, así como opciones técnicas e innovadoras, creadas bajo criterios de sostenibilidad y responsabilidad ambiental. Nuestro catálogo abarca desde los clásicos atemporales hasta las últimas tendencias en diseño textil.
</p>
<p>Además, uno de los pilares de nuestros showrooms es la atención personalizada. Nuestro equipo de asesores está capacitado para ayudarte a tomar decisiones informadas, ya sea que busques telas para una nueva colección, uniformes, decoración o cualquier otro proyecto. Nos tomamos el tiempo para entender tus ideas, necesidades y objetivos, y así ofrecerte soluciones textiles que potencien el valor y la identidad de tus creaciones.</p>

<p>Visitar nuestros showrooms es vivir una experiencia donde la calidad, la innovación y el servicio se unen para acompañarte en cada etapa de tu proceso creativo. Te invitamos a descubrir un mundo de posibilidades en Textiles del Pacífico.</p>
    </div>
    <div className="image__container">
        <img src="https://textilesdelpacifico.co/wp-content/uploads/2025/05/BOGO.png" alt="show room bogota " />
    </div>
</div>

</>)
}

export default ShowRooms