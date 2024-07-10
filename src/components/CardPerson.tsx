import { BASE_URL } from "../assets/baseCondig";
import CardPersonImage from "./ux/CardPersonImage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function CardPerson() {

  useEffect(() => {
    AOS.init({ duration: 1500 }); // Puedes ajustar la duración de la animación aquí
  }, []);

  return (
    <div className="flex justify-center p-4">
        <CardPersonImage image={BASE_URL + "luis-gerente.png"}></CardPersonImage>
        <div className="flex flex-col text-white w-[350px] justify-center" data-aos="fade-up">
            <p className="text-xl italic">"Las empresas tienen su propia <strong>naturaleza, problemas y potencialidades;</strong> para desarrollarlas, es
                necesario brindar soluciones a medida".
            </p>
            <div className="flex flex-col items-end" data-aos="fade-left">
                <span className="text-xl font-semibold">José L. Ballón</span>
                <span>GERENTE GENERAL</span>
            </div>
        </div>
    </div>
  )
}
