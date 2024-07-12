import Asesoria from "../components/SeccionAsesorias";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SeccionServicios from "../components/SeccionServicios";
import ServiciosLista from "../components/SeccionTrabajos";
import BlockSpace from "../components/ux/BlockSpace";
import ScrollToTop from "../components/ux/ScrollToTop";
import WhatsApp from "../components/ux/WhatsApp";

export default function Servicios() {
  return (
    <>
      <Header></Header>
      <ScrollToTop></ScrollToTop>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="xl:max-w-[1200px] flex-col items-center">
          <BlockSpace></BlockSpace>
          <div className="flex flex-col gap-4 justify-center">
            {/* <h1 className="text-6xl text-left font-heading font-normal py-4">Servicios</h1> */}
            <ServiciosLista></ServiciosLista>
            <SeccionServicios></SeccionServicios>
            <Asesoria></Asesoria>
          </div>
        </div>
      </div>
      <WhatsApp></WhatsApp>
      <Footer></Footer>
    </>
  )
}
