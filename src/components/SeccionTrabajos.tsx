
import ListServicio from "./ux/ListServicio";


export default function ServiciosLista() {

  return (
    <div className="w-full flex justify-center items-center p-4">
        <div className="xl:max-w-[1080px] flex-col">
            <h1 className="text-3xl text-center lg:text-6xl lg:text-left font-heading font-normal py-4">Servicios</h1>
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
        </div>
    </div>
  )
}
