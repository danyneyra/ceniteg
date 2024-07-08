import { BASE_URL } from "../assets/baseCondig";

export default function Welcome() {
  return (
    <div className="flex flex-col p-4">
        <div className="flex justify-center">
        <h1 className="text-6xl font-heading text-center py-8" >¡Bienvenidos a <br/> Ceniteg Solutions!</h1>
        </div>
        <div className="flex gap-4 justify-center">
          <div>
            <img className="w-[200px]" src={BASE_URL + "ceniteg-logo-3d.png"} alt="Ceniteg Logo 3D" />
          </div>
          <div className="w-[480px] text-xl">
            <p className="text-justify text-align-last-justify">Somos una organización dedicada a
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
  )
}
