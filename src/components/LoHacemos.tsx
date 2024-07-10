import { BASE_URL } from "../assets/baseCondig";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import BlockSpace from "./ux/BlockSpace";


export default function LoHacemos() {

    useEffect(() => {
        AOS.refresh(); // Puedes ajustar la duración de la animación aquí
      }, []);

  return (
    <div id="nosotros" className="flex justify-center p-4">
        
        <div className="xl:max-w-[1220px] flex grid-cols-2">
            <div className="w-full flex flex-col gap-2">
                <BlockSpace></BlockSpace>
                <h1 className="text-5xl text-left font-heading font-normal" >¿Qué somos y <br/> cómo lo hacemos?</h1>
                <p className="text-xl text-justify text-align-last-justify p-2" data-aos="fade-right" data-aos-duration="1500">
                    Empresa peruana fundada el 16 de Septiembre del 2014,
                    especializada en brindar servicios de consultoría y
                    capacitación en el rubro de la minería, construcción civil,
                    metalmecánica y el sector industrial; promoviendo la
                    innovación y una cultura preventiva para el crecimiento
                    sostenible.
                </p>
                <p className="text-xl text-justify text-align-last-justify p-2" data-aos="fade-right" data-aos-duration="1500">
                    Nuestro liderazgo está basado en una cultura de servicio
                    hacia nuestros colaboradores, clientes y a la comunidad
                    en general. Estamos comprometidos con el cuidado del
                    medio ambiente y la responsabilidad social, buscando el
                    desarrollo sostenible en las actividades que desarrollamos.
                </p>
                <BlockSpace></BlockSpace>
            </div>
            <div className="w-full" data-aos="fade-left">
                <BlockSpace></BlockSpace>
                <img src={BASE_URL + "somos.png"} alt="" />
                <BlockSpace></BlockSpace>
            </div>
        </div>
    </div>
  )
}
