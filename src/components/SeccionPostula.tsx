import InputLabel from "./ux/InputLabel"

export default function Postula() {

  return (
    <div className="w-full flex justify-center items-center p-4">
      <div className="xl:max-w-[1220px] flex-col items-center">
        <h1 className="text-3xl lg:text-6xl text-center text-[#4c86bb] font-heading font-normal">¡Postula tu proyecto hoy!</h1>
        <p className="text-xl lg:text-3xl text-center font-heading font-normal">Inspira con tu visión y transforma el mundo</p>
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
