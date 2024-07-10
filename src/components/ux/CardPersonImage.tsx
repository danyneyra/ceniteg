import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function CardPersonImage(props) {

    const {image} = props
    useEffect(() => {
      AOS.init({ duration: 1000 }); // Puedes ajustar la duración de la animación aquí
    }, []);
  return (
    <div data-aos="zoom-in-up">
        <img className="w-[350px]" src={image} alt="" />
    </div>
  )
}
