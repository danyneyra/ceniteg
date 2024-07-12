import Footer from "../components/Footer";
import Header from "../components/Header";
import BlockSpace from "../components/ux/BlockSpace";
import ScrollToTop from "../components/ux/ScrollToTop";
import WhatsApp from "../components/ux/WhatsApp";

export default function PoliticaPrivacidad() {
  return (
    <>
      <Header></Header>
      <ScrollToTop></ScrollToTop>
      <div className="w-full flex justify-center items-center p-8">
        <div className="xl:max-w-[1080px] flex-col items-center">
          <div className="flex flex-col gap-4 justify-center">
            <BlockSpace></BlockSpace>
            <h1 className="text-center text-3xl font-heading">
              POLÍTICA DE PRIVACIDAD
            </h1>
            <p>
              En CENITEG SOLUTIONS S.A.C., valoramos tu privacidad y nos
              comprometemos a proteger tu información personal. Esta política de
              privacidad describe cómo recopilamos, usamos y compartimos tu
              información cuando utilizas nuestros servicios.
            </p>
            
            <div className="flex flex-col gap-2">
                <h2 className="font-bold">1. Información que Recopilamos</h2>
                <p>
                Podemos recopilar la siguiente información cuando utilizas
                nuestros servicios:
                </p>
                <ul className="list-disc px-8">
                <li>
                    <p>
                    <span className="font-bold">Información Personal: </span>Nombre, dirección de correo
                    electrónico, número de teléfono y otros datos de contacto.
                    </p>
                </li>
                <li>
                    <p>
                    <span className="font-bold">Información de Uso: </span>Datos sobre cómo interactúas con nuestro sitio web y servicios, como direcciones IP, tipo de navegador, páginas visitadas y tiempo de permanencia en nuestro sitio.
                    </p>
                </li>
                <li>
                    <p>
                    <span className="font-bold">Información Financiera: </span>Detalles de pago y facturación para procesar transacciones.
                    </p>
                </li>
                </ul>
            </div>
            
            <div className="flex flex-col gap-2">
                <h2 className="font-bold">2. Uso de la Información</h2>
                <p>
                Utilizamos la información recopilada para los siguientes propósitos:
                </p>
                <ul className="list-disc px-8">
                    <li>
                        <p>
                        <span className="font-bold">Provisión de Servicios:  </span>Para ofrecer y mejorar nuestros servicios, así como para personalizar tu experiencia.
                        </p>
                    </li>
                    <li>
                        <p>
                        <span className="font-bold">Comunicación: </span>Para enviarte actualizaciones, noticias y promociones relacionadas con nuestros servicios.
                        </p>
                    </li>
                    <li>
                        <p>
                        <span className="font-bold">Facturación y Pagos: </span>Para procesar transacciones y gestionar tus cuentas.
                        </p>
                    </li>
                    <li>
                        <p>
                        <span className="font-bold">Seguridad: </span>Para proteger contra el fraude y garantizar la seguridad de nuestros sistemas.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-bold">3. Compartición de la Información</h2>
                <p>
                No compartimos tu información personal con terceros, excepto en los siguientes casos:
                </p>
                <ul className="list-disc px-8">
                    <li>
                        <p>
                        <span className="font-bold">Proveedores de Servicios:  </span>odemos compartir información con terceros que nos ayudan a operar nuestros servicios, como procesadores de pagos y proveedores de alojamiento.
                        </p>
                    </li>
                    <li>
                        <p>
                        <span className="font-bold">Cumplimiento Legal: </span>Cuando sea necesario para cumplir con la ley o responder a procesos legales, como órdenes judiciales o solicitudes gubernamentales.
                        </p>
                    </li>
                    <li>
                        <p>
                        <span className="font-bold">Protección de Derechos: </span>Para proteger los derechos, propiedad y seguridad de CENITEG SOLUTIONS S.A.C., nuestros usuarios y el público en general.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-bold">4. Seguridad de la Información</h2>
                <p>
                Implementamos medidas de seguridad razonables para proteger tu información personal contra acceso, uso o divulgación no autorizados. Sin embargo, no podemos garantizar la seguridad absoluta de la información transmitida a través de Internet.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-bold">5. Retención de la Información</h2>
                <p>
                Retenemos tu información personal solo durante el tiempo necesario para cumplir con los fines descritos en esta política, a menos que se requiera o permita un período de retención más largo por ley.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-bold">6. Derechos del Usuario</h2>
                <p>
                Tienes derecho a acceder, corregir o eliminar tu información personal. También puedes oponerte al procesamiento de tu información o solicitar la limitación del mismo. Para ejercer estos derechos, por favor contáctanos a través de nuestro correo electrónico.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-bold">7. Cookies y Tecnologías Similares</h2>
                <p>
                Utilizamos cookies y tecnologías similares para recopilar información sobre tu uso de nuestro sitio web. Puedes configurar tu navegador para rechazar cookies, pero esto puede afectar tu capacidad para utilizar algunas funciones de nuestro sitio.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-bold">8. Cambios en esta Política de Privacidad</h2>
                <p>
                Podemos actualizar esta política de privacidad de vez en cuando. Publicaremos cualquier cambio en esta página y, si los cambios son significativos, te notificaremos a través de un aviso más prominente.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-bold">9. Contacto</h2>
                <p>
                Si tienes alguna pregunta sobre esta política de privacidad, por favor contáctanos a través de nuestro correo electrónico info@ceniteg.com.
                </p>
            </div>
            
            <BlockSpace></BlockSpace>
          </div>
        </div>
      </div>
      <WhatsApp></WhatsApp>
      <Footer></Footer>
    </>
  );
}
