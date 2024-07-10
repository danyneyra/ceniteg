import CardNoticia from "./ux/CardNoticia";
import CardNoticiaItem from "./ux/CardNoticiaItem";

export default function Noticias() {
  return (
    <div>
        <h1>Noticias</h1>
        <div className="flex grid-cols-3 gap-4 p-6">
            <CardNoticia image="17.jpg" title="NUEVAS TENDENCIAS EN ESTUDIOS AMBIENTALES" text="Según la revista Ceniteg, este se podría considerar uno de los más
                importantes desarrollos del año para el sector minero...
                ">
            </CardNoticia>
            <CardNoticia image="17.jpg" title="NUEVAS TENDENCIAS EN ESTUDIOS AMBIENTALES" text="Según la revista Ceniteg, este se podría considerar uno de los más
                importantes desarrollos del año para el sector minero...
                ">
            </CardNoticia>
            <div>
                <CardNoticiaItem image="18.jpg" title="Noticia 2"></CardNoticiaItem>
                <CardNoticiaItem image="16.jpg" title="Noticia 3"></CardNoticiaItem>
            </div>
        </div>
    </div>
  )
}
