import { BASE_URL } from "../assets/baseConfig";



export default function LoHacemos() {

  return (
    <div id="nosotros" className="w-full flex justify-center items-center p-4">
        <div className="xl:max-w-[1220px] flex flex-col items-center lg:grid lg:grid-cols-2">
            <div className="w-full flex flex-col gap-2">
                <h1 className="text-xl text-center lg:text-5xl lg:text-left font-heading font-normal" >¿Qué somos y <br/> cómo lo hacemos?</h1>
                <p className="text-sm lg:text-xl text-justify p-2">
                    Empresa peruana fundada el 16 de Septiembre del 2014,
                    especializada en brindar servicios de consultoría y
                    capacitación en el rubro de la minería, construcción civil,
                    metalmecánica y el sector industrial; promoviendo la
                    innovación y una cultura preventiva para el crecimiento
                    sostenible.
                </p>
                <p className="text-sm lg:text-xl text-justify p-2">
                    Nuestro liderazgo está basado en una cultura de servicio
                    hacia nuestros colaboradores, clientes y a la comunidad
                    en general. Estamos comprometidos con el cuidado del
                    medio ambiente y la responsabilidad social, buscando el
                    desarrollo sostenible en las actividades que desarrollamos.
                </p>
            </div>
            <div className="w-[80%] lg:w-full">
                <img src={BASE_URL + "somos.png"} alt="" />
            </div>
        </div>
    </div>
  )
}
