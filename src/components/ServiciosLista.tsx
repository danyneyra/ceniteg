import { BASE_URL } from "../assets/baseCondig";
import ListServicio from "./ux/ListServicio";

export default function ServiciosLista() {
  return (
    <div id="servicios" className="flex justify-center p-8">
        <div className="xl:max-w-[1080px] flex-col">
            <h1 className="text-6xl text-left font-heading font-normal py-4">Servicios</h1>
            <div className="flex grid-cols-2 p-8 justify-center">
                <div className="w-full flex flex-col gap-4 p-4">
                    <ListServicio title="Ingeniería de polvorines y gestión de explosivos"></ListServicio>
                    <ListServicio title="Consultoría y desarrollo de proyectos mineros y ambientales"></ListServicio>
                    <ListServicio title="Estudios ambientales"></ListServicio>
                    <ListServicio title="Asesoría en trámites con entidades estatales"></ListServicio>
                </div>
                <div className="w-full flex flex-col gap-4 p-4">
                    <ListServicio title="Capacitación y entrenamiento"></ListServicio>
                    <ListServicio title="Cooperación para el desarrollo"></ListServicio>
                    <ListServicio title="Asesoría empresarial"></ListServicio>
                    <ListServicio title="Casa certificadora de las normas ISO"></ListServicio>
                </div>
            </div>
            <div className="bg-white rounded-3xl flex">
                <div className="p-4">
                    <img className="w-[320px] rounded-2xl" src={BASE_URL + "servicios-banner.jpg"} alt="" />
                </div>
                <div className="flex flex-col text-[#40414a] p-4">
                    <h2 className="text-3xl text-left font-heading font-bold py-4"><span className="text-[#4c86bb]">Asesoría</span> en trámites con <br/>
                    entidades estatales</h2>
                    <div className="flex grid-cols-2 p-4">
                        <ul className="w-full list-disc">
                            <li>Levantamiento de suspensión de REINFO</li>
                            <li>Contratos de explotación (negociación)</li>
                            <li>Trámite de código QR de REINFO</li>
                            <li>Trámites para inscripción de concesiones</li>
                            <li>Elaboración de convenios</li>
                            <li>Constitución de empresa</li>
                            <li>Petitorios mineros</li>
                            <li>Sucesión intestada</li>
                            <li>Trámites notariales</li>
                            <li>Gestión de talleres participativos</li>
                        </ul>
                        <ul className="w-full list-disc">
                            <li>Autorización de funcionamiento de plantas de
                            tratamiento metalúrgico</li>
                            <li>Titulación de predios rurales y/o urbanos</li>
                            <li>Elaboración de contratos de servicio</li>
                            <li>Declaraciones semestrales</li>
                            <li>Elaboración de patentes</li>
                            <li>Visación del REINFO</li>
                            <li>Trámites en SUCAMEC</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
