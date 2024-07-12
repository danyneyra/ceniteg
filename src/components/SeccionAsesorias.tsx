import { BASE_URL } from "../assets/baseConfig";


export default function Asesoria() {
  return (
    <div className="w-full flex justify-center items-center p-4">
        <div className="bg-white rounded-3xl flex">
        <div className="p-4 hidden lg:block">
            <img className="w-[320px] rounded-2xl" src={BASE_URL + "servicios-banner.jpg"} alt="" />
        </div>
        <div className="flex flex-col text-[#40414a] p-4">
            <h2 className="text-3xl text-center lg:text-left font-heading font-bold py-4"><span className="text-[#4c86bb]">Asesoría</span> en trámites con <br/>
            entidades estatales</h2>
            <div className="flex grid-cols-2 p-4">
                <ul className="w-full p-4 lg:p-0 list-disc ">
                    <li>Levantamiento de suspensión de REINFO</li>
                    <li>Contratos de explotación (negociación)</li>
                    <li>Trámite de código QR de REINFO</li>
                    <li>Trámites para inscripción de concesiones</li>
                    <li>Elaboración de convenios</li>
                    <li className="hidden lg:visible">Constitución de empresa</li>
                    <li className="hidden lg:visible">Petitorios mineros</li>
                    <li className="hidden lg:visible">Sucesión intestada</li>
                    <li className="hidden lg:visible">Trámites notariales</li>
                    <li className="hidden lg:visible">Gestión de talleres participativos</li>
                </ul>
                <ul className="w-full p-4 lg:p-0 list-disc">
                    <li>Autorización de funcionamiento de plantas de
                    tratamiento metalúrgico</li>
                    <li>Titulación de predios rurales y/o urbanos</li>
                    <li>Elaboración de contratos de servicio</li>
                    <li>Declaraciones semestrales</li>
                    <li className="hidden lg:visible">Elaboración de patentes</li>
                    <li className="hidden lg:visible">Visación del REINFO</li>
                    <li className="hidden lg:visible">Trámites en SUCAMEC</li>
                </ul>
            </div>
            <p className="lg:hidden text-center">Y mucho más</p>
        </div>   
    </div>
    </div>
    
  )
}
