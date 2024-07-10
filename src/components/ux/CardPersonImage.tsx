import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function CardPersonImage(props) {

    const {image} = props
    useEffect(() => {
      AOS.refresh() // Puedes ajustar la duración de la animación aquí
    }, []);
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1500">
        <img className="w-[350px]" src={image} alt="" />
    </div>
  )
}
