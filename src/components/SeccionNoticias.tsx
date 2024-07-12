import CardNoticia from "./ux/CardNoticia";

export default function Noticias() {
  return (
    <div className="w-full flex justify-center items-center p-4">
        <div className="xl:max-w-[1080px] flex-col">
            <h1 className="text-3xl text-center lg:text-6xl lg:text-left font-heading font-normal py-4">Noticias</h1>
            <div className="grid grid-cols-2 gap-4 p-4">
                <CardNoticia image="17.jpg" title="NUEVAS TENDENCIAS EN ESTUDIOS AMBIENTALES" text="Según la revista Ceniteg, este se podría considerar uno de los más
                    importantes desarrollos del año para el sector minero...
                    ">
                </CardNoticia>
                <CardNoticia image="18.jpg" title="NUEVAS TENDENCIAS EN ESTUDIOS AMBIENTALES" text="Según la revista Ceniteg, este se podría considerar uno de los más
                    importantes desarrollos del año para el sector minero...
                    ">
                </CardNoticia>
            </div>
        </div>
    </div>
    
  )
}
