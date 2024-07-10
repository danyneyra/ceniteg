import CardServicio from "./ux/CardServicio";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import BlockSpace from "./ux/BlockSpace";

export default function Servicios() {

  useEffect(() => {
    AOS.refresh(); // Puedes ajustar la duración de la animación aquí
  }, []);

  return (
    <div className="flex flex-col gap-4 p-4">
        <BlockSpace></BlockSpace>
        <div className="flex justify-center py-6">
            <h1 className="text-6xl text-left font-heading font-normal" data-aos="zoom-in-up" data-aos-duration="1500">¡Nuestros principales servicios!</h1>
        </div>
        <div className="flex gap-10 justify-center">
          <CardServicio image="normas-iso.png" title="Casa certificadora de las normas ISO"></CardServicio>
          <CardServicio image="consultoria-proyectos.png" title="Consultoría y desarrollo de proyectos"></CardServicio>
          <CardServicio image="polvorines-explosivos.png" title=" Ingeniería de polvorines y gestión de explosivos"></CardServicio>
        </div>
    </div>
  )
}
