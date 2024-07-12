
import CardMision from "./ux/CardMision";

export default function Mision() {
  return (
    <div className="w-full flex justify-center items-center p-4 bg-[#4c86bb]">
        <div className="grid grid-cols-2 xl:max-w-[1220px] lg:grid-cols-4 gap-6 py-8">
            <CardMision image="mision-icon.png" title="Misión" text="Ayudar a las organizaciones en su proceso de crecimiento y trascendencia."></CardMision>
            <CardMision image="aspiracion-icon.png" title="Aspiración" text="Ser socios estratégicos de nuestros clientes a nivel nacional e internacional, comprometidos con la calidad, investigación, innovación y tecnología."></CardMision>
            <CardMision image="proposito-icon.png" title="Propósito" text="Brindar claridad para saber y poder hacer el bien, construyendo una sociedad solidaria para las futuras generaciones con base en lo trascendente."></CardMision>
            <CardMision image="valores-icon.png" title="Valores" text="Cooperación, pasión por la excelencia, ética; rendición de cuentas y mentalidad de crecimiento."></CardMision>
        </div>
    </div>
  )
}
