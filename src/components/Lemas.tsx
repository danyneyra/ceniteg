import { BASE_URL } from "../assets/baseCondig";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import BlockSpace from "./ux/BlockSpace";

export default function Lemas() {

  useEffect(() => {
    AOS.init({ duration: 2000 }); // Puedes ajustar la duración de la animación aquí
  }, []);

  return (
    <div className="flex justify-center p-4">
        <div className="xl:max-w-[1080px] flex grid-cols-2">
            <div className="w-full" data-aos="fade-right">
                <BlockSpace></BlockSpace>
                <img className="w-full" src={BASE_URL + "generando-valor.png"} alt="" />
            </div>
            <div className="w-full" data-aos="fade-left">
                <BlockSpace></BlockSpace>
                <img className="w-full" src={BASE_URL + "certificados-senace.png"} alt="" />
            </div> 
        </div> 
    </div>
  )
}
