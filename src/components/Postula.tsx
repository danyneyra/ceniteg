import InputLabel from "./ux/InputLabel"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import BlockSpace from "./ux/BlockSpace";

export default function Postula() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Puedes ajustar la duración de la animación aquí
  }, []);

  return (
    <div className="flex justify-center p-8">
      <div className="xl:max-w-[1220px] flex-col items-center">
        <BlockSpace></BlockSpace>
        <h1 className="text-6xl text-center text-[#4c86bb] font-heading font-normal" data-aos="zoom-in-up">¡Postula tu proyecto hoy!</h1>
        <p className="text-3xl text-center font-heading font-normal" data-aos="zoom-in-up">Inspira con tu visión y transforma el mundo</p>
        <div className="flex grid-cols-2 gap-8 p-4 w-full justify-between">
            <div className="w-full">
              <InputLabel label="Nombre completo de postulante"></InputLabel>
              <InputLabel label="Teléfono"></InputLabel>
              <InputLabel label="Correo electrónico"></InputLabel>
            </div>
            <div className="w-full">
              <InputLabel label="Título del proyecto"></InputLabel>
              <InputLabel label="Breve descripción del
               proyecto"></InputLabel>
            </div>
        </div>
      </div>     
    </div>
  )
}
