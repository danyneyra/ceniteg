import Footer from "../components/Footer";
import Header from "../components/Header";
import BlockSpace from "../components/ux/BlockSpace";
import ScrollToTop from "../components/ux/ScrollToTop";
import WhatsApp from "../components/ux/WhatsApp";

export default function Terminos() {
  return (
    <>
      <Header></Header>
      <ScrollToTop></ScrollToTop>
      <div className="w-full flex justify-center items-center p-8">
        <div className="xl:max-w-[1080px] flex-col items-center">
          <div className="flex flex-col gap-4 justify-center">
            <BlockSpace></BlockSpace>
            <h1 className="text-center text-3xl font-heading">
              TÉRMINOS Y CONDICIONES DE USO
            </h1>
            <p>
              Bienvenido a CENITEG SOLUTIONS S.A.C. Al acceder y utilizar
              nuestro sitio web y servicios, aceptas los siguientes términos y
              condiciones. Por favor, léelos detenidamente.
            </p>
            <h2 className="font-bold">1. Aceptación de los Términos</h2>
            <p>
              Al utilizar los servicios proporcionados por CENITEG SOLUTIONS
              S.A.C., aceptas estar legalmente vinculado por estos términos y
              condiciones, así como por nuestra política de privacidad. Si no
              estás de acuerdo con alguno de estos términos, no utilices
              nuestros servicios.
            </p>
            <h2 className="font-bold">3. Uso de los Servicios</h2>
            <p>
              El usuario se compromete a utilizar nuestros servicios de manera
              legal y ética. No se permite el uso de nuestros servicios para
              actividades ilícitas, fraudulentas o que puedan dañar la
              reputación de CENITEG SOLUTIONS S.A.C. o de terceros.
            </p>

            <h2 className="font-bold">4. Propiedad Intelectual</h2>
            <p>
              Todos los contenidos, incluyendo pero no limitado a texto,
              gráficos, logotipos, imágenes y software, son propiedad de CENITEG
              SOLUTIONS S.A.C. o de sus proveedores de contenido y están
              protegidos por las leyes de derechos de autor y otras leyes de
              propiedad intelectual.
            </p>

            <h2 className="font-bold">5. Confidencialidad</h2>
            <p>
              CENITEG SOLUTIONS S.A.C. se compromete a proteger la
              confidencialidad de la información del usuario. No compartiremos
              ni divulgaremos información personal sin el consentimiento del
              usuario, salvo que sea requerido por ley.
            </p>

            <h2 className="font-bold">6. Limitación de Responsabilidad</h2>
            <p>
              CENITEG SOLUTIONS S.A.C. no será responsable por daños directos,
              indirectos, incidentales, especiales o consecuentes que resulten
              del uso o la imposibilidad de uso de nuestros servicios, incluso
              si hemos sido advertidos de la posibilidad de tales daños.
            </p>

            <h2 className="font-bold">8. Modificaciones de los Términos</h2>
            <p>
              CENITEG SOLUTIONS S.A.C. se reserva el derecho de modificar estos
              términos y condiciones en cualquier momento. Las modificaciones
              serán efectivas a partir de su publicación en nuestro sitio web.
              El uso continuado de nuestros servicios después de cualquier
              cambio constituye la aceptación de los nuevos términos.
            </p>

            <h2 className="font-bold">9. Ley Aplicable y Jurisdicción</h2>
            <p>
              Estos términos y condiciones se regirán e interpretarán de acuerdo
              con las leyes de Perú. Cualquier disputa que surja en relación con
              estos términos y condiciones estará sujeta a la jurisdicción
              exclusiva de los tribunales de Perú.
            </p>

            <h2 className="font-bold">10. Contacto</h2>
            <p>
              Si tienes alguna pregunta sobre estos términos y condiciones, por
              favor contáctanos a través de nuestro correo electrónico
              info@ceniteg.com.
            </p>

            <BlockSpace></BlockSpace>
          </div>
        </div>
      </div>

      <WhatsApp></WhatsApp>
      <Footer></Footer>
    </>
  );
}
