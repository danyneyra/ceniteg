import { BASE_URL } from "../assets/baseConfig";
import CardPersonImage from "./ux/CardPersonImage";

export default function CardPerson() {

  return (
    <div className="w-full flex justify-center items-center p-4">
        <CardPersonImage image={BASE_URL + "luis-gerente.png"}></CardPersonImage>
        <div className="flex flex-col text-white w-[350px] justify-center">
            <p className="text-xl italic">"Las empresas tienen su propia <strong>naturaleza, problemas y potencialidades;</strong> para desarrollarlas, es
                necesario brindar soluciones a medida".
            </p>
            <div className="flex flex-col items-end">
                <span className="text-xl font-semibold">José L. Ballón</span>
                <span>GERENTE GENERAL</span>
            </div>
        </div>
    </div>
  )
}