import { BASE_URL } from "../assets/baseCondig"
import Navbar from "./Navbar"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Header() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Puedes ajustar la duración de la animación aquí
      }, []);

  return (
        <header className="fixed z-[999] top-0 left-0 w-full transparent-bg header-shadow backdrop-blur-3" data-aos="fade-down">
            <div className="flex py-2 justify-between">
                <div className="">
                    <img className="bg-white w-[130px] py-2 pl-4 pr-8 rounded-e-full" src={BASE_URL + "LOGO CENITEG_logo-vertical.png"} alt="" />
                </div>
                <div className="flex flex-col">
                    <nav className="flex gap-4 py-4 pl-8 pr-12">
                        <Navbar name="Inicio" url="#"></Navbar>
                        <Navbar name="Nosotros" url="#nosotros"></Navbar>
                        <Navbar name="Servicios" url="#servicios"></Navbar>
                        <Navbar name="Productos" url="#productos"></Navbar>
                        <Navbar name="Proyectos" url="#proyectos"></Navbar>
                        <Navbar name="Noticias" url="npticias"></Navbar>
                    </nav>
                    <div className="border-t-8 border-[#4b86ba] mt-4"></div>
                </div>
            </div>
        </header>
  )
}
