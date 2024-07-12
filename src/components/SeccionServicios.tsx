import CardServicio from "./ux/CardServicio";

export default function SeccionServicios() {

  return (
    <div className="w-full flex justify-center items-center p-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center py-6">
            <h1 className="text-3xl lg:text-6xl text-center font-heading font-normal">¡Nuestros principales servicios!</h1>
        </div>
        <div className="grid grid-cols-3 lg:flex gap-2 lg:gap-10 justify-center">
          <CardServicio image="normas-iso.png" title="Casa certificadora de las normas ISO"></CardServicio>
          <CardServicio image="consultoria-proyectos.png" title="Consultoría y desarrollo de proyectos"></CardServicio>
          <CardServicio image="polvorines-explosivos.png" title=" Ingeniería de polvorines y gestión de explosivos"></CardServicio>
        </div>
      </div>
    </div>
    
  )
}
