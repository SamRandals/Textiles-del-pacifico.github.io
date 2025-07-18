import { SiInstagram } from "react-icons/si"
import { SlSocialInstagram } from "react-icons/sl"
import { SiWhatsapp } from "react-icons/si"
function SobreNosotros(){


    const abrirInstagram= ()=>{
    window.open("https://www.instagram.com/textilesdelpacifico_oficial", "_blank");
    }

    const abrirWhatsapp=()=>[
        window.open("https://wa.me/573194499777", "_blank")
    ]
    return(
      <>
        <section className="AboutUs">
           <div className="information">
           <h1>Textiles del Pacífico: Algodón 100% Colombiano</h1>
          <p>
            Somos una empresa dedicada a la producción y comercialización de textiles elaborados con algodón 100% colombiano. Nos enorgullece ofrecer productos de alta calidad, sostenibles y comprometidos con el desarrollo de la industria nacional. Nuestro equipo trabaja cada día para brindar telas suaves, resistentes y amigables con el medio ambiente, apoyando a agricultores locales y promoviendo el talento colombiano.
          </p>
          <img className="img_contact-textil" src="https://textilesdelpacifico.co/wp-content/uploads/2024/11/tend-1024x1024.png" alt="" />
          <p>
            Si deseas conocer más sobre nuestros productos, realizar consultas o ponerte en contacto con nosotros, puedes hacerlo a través de nuestras redes sociales. Encuéntranos en Instagram como <strong>@textilesdelpacifico_oficial</strong> para ver nuestras novedades y promociones, o escríbenos directamente a nuestro WhatsApp <strong>+57 3194499777</strong> para recibir atención personalizada. Estamos siempre disponibles para ayudarte y responder tus inquietudes.
          </p>
          <div className="contacts">
            <SlSocialInstagram onClick={abrirInstagram} size={40} color="#FF0033"/>
            <SiWhatsapp onClick={abrirWhatsapp} size={40} color="#33CC00"/>
          </div>
           </div>
        </section>
      </>
    )
}



export  default SobreNosotros