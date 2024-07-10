import { BASE_URL } from "../../assets/baseCondig"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function CardServicio(props) {
    const {image, title} = props

    useEffect(() => {
      AOS.init({ duration: 1000 }); // Puedes ajustar la duración de la animación aquí
    }, []);

  return (
    <div className="flex flex-col w-[200px] gap-4 items-center" data-aos="zoom-in-up">
        <div className="bg-white rounded-[25%] w-[150px]">
            <img className="p-4" src={BASE_URL + image} alt="" />
        </div>
        <p className="text-center text-lg">
            {title}
        </p>
    </div>
  )
}
