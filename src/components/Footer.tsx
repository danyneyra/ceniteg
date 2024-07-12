import { Link } from "react-router-dom";
import { BASE_URL } from "../assets/baseConfig";
import Nav from "../components/ux/Nav";

export default function Footer() {
  return (
    <div className="w-full flex items-end">
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 bg-[#535354] p-8 gap-8 justify-between">
        <div className="flex flex-col items-center gap-4 lg:gap-2 lg:items-start">
          <div className="flex flex-col items-center justify-center lg:items-start">
            <img className="w-[150px] lg:w-[300px]" src={BASE_URL + "ceniteg.png"} alt="" />
            <p className="text-center lg:text-left">Todos los derechos reservados © Ceniteg 2024</p>
          </div>
          <div className="flex flex-col gap-2">
            <Link to= {BASE_URL + "terminos-condiciones"}>Términos y condiciones</Link>
            <Link to={BASE_URL + "politicas-de-privacidad"}>Políticas de privacidad</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p>Síguenos en:</p>
            <div className="flex items-center gap-2">
              <img
                className="w-[40px]"
                src={BASE_URL + "logo-instagram-white.png"}
                alt=""
              />
              <img
                className="w-[40px]"
                src={BASE_URL + "logo-facebook-white.png"}
                alt=""
              />
              <img
                className="w-[40px]"
                src={BASE_URL + "logo-linkedin-white.png"}
                alt=""
              />
              <img
                className="w-[40px]"
                src={BASE_URL + "logo-youtube-white.png"}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <h2 className="font-bold">¡Trabaja con nosotros!</h2>
            <p>Postula a nuestra bolsa de trabajo</p>
            <p className="font-bold">info@ceniteg.com</p>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col gap-4">
          <Nav name="Inicio" url=""></Nav>
          <Nav name="Nosotros" url="nosotros"></Nav>
          <Nav name="Servicios" url="servicios"></Nav>
          {/* <Nav name="Proyectos" url="proyectos"></Nav> */}
          <Nav name="Noticias" url="noticias"></Nav>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img
              className="w-[40px]"
              src={BASE_URL + "icon-whatsapp.png"}
              alt=""
            />
            <p>+51 945 267 232 / +51 44 372588</p>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-[40px]" src={BASE_URL + "icon-map.png"} alt="" />
            <p>
              Marcelo Corne, 279.Urb. SanAndrés <br />
              Trujillo, Perú
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-[40px]" src={BASE_URL + "icon-mail.png"} alt="" />
            <p>info@ceniteg.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
