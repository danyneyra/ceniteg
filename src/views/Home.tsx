import CardPerson from "../components/SeccionGerente"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/SeccionHero"
import Lemas from "../components/SeccionLemas"
import LoHacemos from "../components/SeccionLoHacemos"
import Mision from "../components/SeccionMision"
import Noticias from "../components/SeccionNoticias"
import Postula from "../components/SeccionPostula"
import Proyectos from "../components/SeccionProyectos"
import SeccionServicios from "../components/SeccionServicios"
import ServiciosLista from "../components/SeccionTrabajos"
import Welcome from "../components/SeccionBienvenida"
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import Asesoria from "../components/SeccionAsesorias"
import WhatsApp from "../components/ux/WhatsApp"

export default function Home() {


  return (
    <>
      <WhatsApp></WhatsApp>
      <Fullpage>
        {/* <FullpageNavigation /> */}
        <Header></Header>
        
        <FullPageSections>
          <FullpageSection style={{ height: '100vh'}}>
            <Hero></Hero>
          </FullpageSection>
          <FullpageSection style={{ height: '100vh', display: 'flex'}}>
            <CardPerson></CardPerson>
          </FullpageSection>
          <FullpageSection style={{ height: '100vh', display: 'flex'}}>
            <Welcome></Welcome>
          </FullpageSection>
          <FullpageSection style={{ height: '100vh', display: 'flex'}}>
            <SeccionServicios></SeccionServicios>
          </FullpageSection>
          <FullpageSection style={{ height: '100vh' , display: 'flex'}}>
            <Lemas></Lemas>
          </FullpageSection>
          <FullpageSection id="nosotros" style={{ height: '100vh', display: 'flex'}}>
            <LoHacemos></LoHacemos>
          </FullpageSection>
          <FullpageSection style={{ height: '100vh', display: 'flex'}}>
            <Mision></Mision>
          </FullpageSection>
          <FullpageSection style={{ height: '100vh', display: 'flex'}}>
            <Postula></Postula>
          </FullpageSection>
          <FullpageSection style={{ height: '100vh', display: 'flex'}}>
            <ServiciosLista></ServiciosLista>
          </FullpageSection>
          <FullpageSection style={{ height: '100vh', display: 'flex'}}>
            <Asesoria></Asesoria>
          </FullpageSection>
          <FullpageSection id="proyectos" style={{ height: '100vh', display: 'flex'}}>
            <Proyectos></Proyectos>
          </FullpageSection>
          <FullpageSection id="noticias" style={{ height: '100vh', display: 'flex'}}>
            <Noticias></Noticias>
          </FullpageSection>
          <FullpageSection style={{ height: '100vh', display: 'flex'}}>
            <Footer></Footer>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
      
  )
}
