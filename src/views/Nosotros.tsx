import Footer from "../components/Footer";
import Header from "../components/Header";
import Lemas from "../components/SeccionLemas";
import LoHacemos from "../components/SeccionLoHacemos";
import Mision from "../components/SeccionMision";
import BlockSpace from "../components/ux/BlockSpace";
import ScrollToTop from "../components/ux/ScrollToTop";
import WhatsApp from "../components/ux/WhatsApp";

export default function Nosotros() {
  return (
    <>
      <Header></Header>
      <ScrollToTop></ScrollToTop>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="xl:max-w-[1200px] flex-col items-center p-8">
          <div className="flex flex-col gap-4 justify-center">
          <BlockSpace></BlockSpace>
            <h1 className="text-6xl text-left font-heading font-normal py-4">Nosotros</h1>
            <LoHacemos></LoHacemos>
          </div>
        </div>
        <Mision></Mision>
        <Lemas></Lemas>
      </div>
      <WhatsApp></WhatsApp>
      <Footer></Footer>
    </>
  )
}
