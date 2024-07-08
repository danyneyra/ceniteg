import CardPerson from "../components/CardPerson"
import Header from "../components/Header"
import Lemas from "../components/Lemas"
import LoHacemos from "../components/LoHacemos"
import Mision from "../components/Mision"
import Servicios from "../components/Servicios"
import Welcome from "../components/Welcome"

export default function Home() {
  return (
    <>
      <Header />
      <CardPerson></CardPerson>
      <Welcome></Welcome>
      <Servicios></Servicios>
      <Lemas></Lemas>
      <LoHacemos></LoHacemos>
      <Mision></Mision>
    </>
  )
}
