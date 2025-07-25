import { SiGmail, SiInstagram, SiWhatsapp, SiFacebook } from "react-icons/si"
import '../styles/contactos.css'

function Contactos(){
  const instagram = ()=>{
    window.open("https://www.instagram.com/textilesdelpacifico_oficial","_blank")
}
const abrirWhatsapp=()=>{
        window.open("https://wa.me/573194499777", "_blank")
    }
     const gmail = () => {
    const destinatario = "contacto@textilesdelpacifico.com";
    const asunto = encodeURIComponent("Solicitud de información - Textiles del Pacífico");
    const cuerpo = encodeURIComponent(`Buen día,

Me gustaría recibir más información sobre sus productos textiles, disponibilidad y precios al por mayor.

Quedo atento(a) a su respuesta.

Gracias,
[Tu nombre]`);

    const enlace = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${asunto}&body=${cuerpo}`;
    window.open(enlace, "_blank");
  };

  const facebook=()=>{
    alert("Hola, actualmente no tenemos pagina de faceboo, pero puedes contactarnos con las otras redes sociales anteriores!");
  }

  const sendInfo = (e) => {
  e.preventDefault(); // evita recargar el formulario

  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const reason = document.getElementById("reason").value;

  const destinatario = "contacto@textilesdelpacifico.com";
  const asunto = encodeURIComponent("Solicitud de información de cliente");
  const cuerpo = encodeURIComponent(`Buen día,

Mi nombre es ${name} ${lastname}, y me pongo en contacto con ustedes para lo siguiente:

${reason}

Agradezco su atención y quedo atento(a) a una pronta respuesta.

Cordialmente,
${name} ${lastname}`);

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${asunto}&body=${cuerpo}`;

  window.open(gmailLink, "_blank"); // ✅ abre Gmail en nueva pestaña
};

const mapPacifico = ()=>{
  let direccion = `https://www.google.com/maps/place/Textiles+Del+Pacifico/@3.4890138,-76.4822497,16.25z/data=!4m6!3m5!1s0x8e30a9eb5450107d:0x431da5748e088dd9!8m2!3d3.4893357!4d-76.4815216!16s%2Fg%2F11f7r0b_9n?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D`

  window.open(direccion, '__blank')
}
  

return(<>
<div className="contact__container">
    <div className="form__container">
        {/* form */}
        <form className="form__contact">
            <h2 className="title__form">Escribemos para requerir nuestros servicios!</h2>
            {/* input text */}
            <label htmlFor="name">Nombre</label>
            <input type="text" name="nombre" id="name" />

            {/* separar */}

              <label htmlFor="lastname">Apellidos</label>
            <input type="text" name="nombre" id="lastname" />

            {/* separar */}

              <label htmlFor="reason">Razon</label>
            <textarea type="text" name="nombre" id="reason"/>
            <button className="send__info" onClick={sendInfo}>Enviar</button>
        </form>
    </div>
    <div className="more__contacts-logo">
      <div className="icon-container gmail-gradient">
        <SiGmail onClick={gmail}/>
      </div>
      <div className="icon-container instagram-gradient">
        <SiInstagram onClick={instagram} />
      </div>
      <div className="icon-container whatsapp-solid">
        <SiWhatsapp onClick={abrirWhatsapp}/>
      </div>
      <div className="icon-container facebook-solid">
        <SiFacebook onClick={facebook} />
      </div>
    </div>
  <img src="https://textilesdelpacifico.co/wp-content/uploads/2024/11/TEXI.jpeg" alt="" className="map__image" onClick={mapPacifico}/>
</div>


</>)
}
export default Contactos