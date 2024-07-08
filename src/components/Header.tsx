import { BASE_URL } from "../assets/baseCondig"
import Navbar from "./Navbar"

export default function Header() {
  return (
        <header className="bg-ceniteg flex py-5 justify-between">
            <div className="">
                <img className="bg-white w-[130px] py-2 pl-4 pr-8 rounded-e-full" src={BASE_URL + "LOGO CENITEG_logo-vertical.png"} alt="" />
            </div>
            <div className="flex flex-col">
                <nav className="flex gap-4 py-6 pl-8 pr-12">
                    <Navbar name="Inicio" url="/"></Navbar>
                    <Navbar name="Nosotros" url="/"></Navbar>
                    <Navbar name="Servicios" url="/"></Navbar>
                    <Navbar name="Productos" url="/"></Navbar>
                    <Navbar name="Proyectos" url="/"></Navbar>
                    <Navbar name="Noticias" url="/"></Navbar>
                </nav>
                <div className="border-t-8 border-[#4b86ba] my-4"></div>
                
            </div>
        </header>
  )
}
