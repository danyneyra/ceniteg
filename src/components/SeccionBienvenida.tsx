import { BASE_URL } from "../assets/baseConfig";

export default function Welcome() {

  return (
    <div className="w-full flex justify-center items-center p-4">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <h1 className="text-3xl lg:text-6xl font-heading text-center py-8">¡Bienvenidos a <br/> Ceniteg Solutions!</h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
            <div>
              <img className="w-[150px] lg:w-[200px]" src={BASE_URL + "ceniteg-logo-3d.png"} alt="Ceniteg Logo 3D" />
            </div>
            <div className="w-full lg:w-[480px] text-xl">
              <p className="text-sm lg:text-xl text-justify text-align-last-justify">Somos una organización dedicada a
                  impulsar el desarrollo de proyectos que
                  generan valor a nuestros clientes del
                  sector minero, gestión ambiental y
                  producción; mediante la aplicación de
                  ingeniería, transferencia tecnológica y
                  educación. Nuestra cultura está basada
                  en la calidad, mejora continua, cuidado
                  del medio ambiente, seguridad y
                  responsabilidad social; siendo la persona
                  lo más importante para nosotros.
                </p>
            </div>
          </div>
        </div>  
    </div>
  )
}
