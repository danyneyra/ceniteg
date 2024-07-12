import { BASE_URL } from "../assets/baseConfig";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Hero() {
  const imageUrl = BASE_URL + "ceniteg-mineria.webp"

  useEffect(() => {
    AOS.init({ duration: 2000 }); // Puedes ajustar la duración de la animación aquí
  }, []);

  return (
    <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
        {/* <video className="h-full" width="100%" autoPlay muted loop>
            <source src={BASE_URL + "video-polvorines.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
        </video> */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col gap-2 items-center justify-center">
          <div className="xl:max-w-[1200px] flex justify-center p-12" data-aos="fade-up">
            <img className="w-[70%]" src={BASE_URL + "lema-ceniteg.png"} alt="" />
          </div> 
        </div>
    </div>
  )
}
