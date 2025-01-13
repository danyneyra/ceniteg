import { BASE_URL } from "../assets/baseConfig";
// import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Puedes ajustar la duración de la animación aquí
  }, []);
  //transparent-bg header-shadow backdrop-blur-3
  return (
    <header className="fixed z-[999] top-0 left-0 w-full" data-aos="fade-down">
      <div className="flex py-2 justify-between">
        <Link to={BASE_URL}>
            <img
                className="bg-white w-[130px] py-2 pl-4 pr-8 rounded-e-full transition-transform duration-300 hover:scale-110"
                src={BASE_URL + "LOGO CENITEG_logo-vertical.png"}
                alt=""
            />
        </Link>
        <div className="hidden lg:flex lg:flex-col">
          {/* <nav className="flex gap-4 py-4 pl-8 pr-12">
            <Navbar name="Inicio" url=""></Navbar>
            <Navbar name="Nosotros" url="nosotros"></Navbar>
            <Navbar name="Servicios" url="servicios"></Navbar>
            <Navbar name="Noticias" url="noticias"></Navbar>
            <Navbar name="Brochures" url="brochures"></Navbar>
          </nav> */}
          <div className="border-t-8 border-[#4b86ba] mt-4"></div>
        </div>
      </div>
    </header>
  );
}
