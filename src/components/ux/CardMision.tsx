import { BASE_URL } from "../../assets/baseCondig";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function CardMision(props) {

    const {image, title, text} = props;
    useEffect(() => {
      AOS.init({ duration: 1000 }); // Puedes ajustar la duración de la animación aquí
    }, []);

  return (
    <div className="flex flex-col w-full items-center p-4 gap-2" data-aos="zoom-in">
        <img className="w-[100px]" src={BASE_URL + image} alt="" />
        <h2 className="uppercase font-bold">{title}</h2>
        <p className="text-lg text-justify text-align-last-justify">{text}</p>
    </div>
  )
}
