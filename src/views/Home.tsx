import CardPerson from "../components/CardPerson"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Lemas from "../components/Lemas"
import LoHacemos from "../components/LoHacemos"
import Mision from "../components/Mision"
import Postula from "../components/Postula"
import Servicios from "../components/Servicios"
import ServiciosLista from "../components/ServiciosLista"
import Welcome from "../components/Welcome"

export default function Home() {
  return (
    <>
      <Header />
      <Hero></Hero>
      <CardPerson></CardPerson>
      <Welcome></Welcome>
      <Servicios></Servicios>
      <Lemas></Lemas>
      <LoHacemos></LoHacemos>
      <Mision></Mision>
      <Postula></Postula>
      <ServiciosLista></ServiciosLista>
    </>
  )
}
