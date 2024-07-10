
import { BASE_URL } from '../assets/baseCondig'
import BlockSpace from './ux/BlockSpace'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function Proyectos() {

    useEffect(() => {
        AOS.refresh(); // Puedes ajustar la duración de la animación aquí
      }, []);

    return (
        <div id="proyectos" className="flex justify-center p-8">
            <div className="xl:max-w-[1080px] flex-col items-center gap-4">
                <BlockSpace></BlockSpace>
                <div className='flex gap-8 pb-8' data-aos="zoom-in-up" data-aos-duration="1500">
                    <div className='flex items-center'>
                        <img className='w-[650px]' src={BASE_URL + "cissoma.png"} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 px-4'>
                        <h2 className='text-xl text-left font-semibold'>Congreso Internacional de Calidad, Innovación, <br />
                            Seguridad, Salud Ocupacional y Medio Ambiente</h2>
                        <p className='text-xl text-justify'>
                            CISSOMA se organiza partiendo de la necesidad de realizar un pacto
                            trasnacional por la vida, congregando a gestores y protagonistas e
                            incitando a la acción frente a una problemática desarrollada a partir de
                            los diferentes ejes temáticos propuestos. La organización fomenta un
                            plan de integración global a fin de que los diversos actores converjan
                            en la búsqueda de soluciones y se determinen planes de acción.
                        </p>
                    </div>
                </div>
                <div className="border-t-2 border-white mt-4"></div>
                <div className='flex gap-8 pt-8' data-aos="zoom-in-up" data-aos-duration="1500">
                    <div className='flex items-center'>
                        <img className='w-[450px]' src={BASE_URL + "conapervol.png"} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 px-4'>
                        <h2 className='text-xl text-left font-semibold'>Congreso Internacional de Perforación y Voladura</h2>
                        <p className='text-xl text-justify'>
                            CONAPERVOL, bajo el lema “Una integración de naciones” tiene por
                            objetivo difundir la innovación y avances tecnológicos de la perforación
                            y voladura. Además, de un intercambio de experiencias profesionales y
                            conocimientos académicos relacionados a los mismos campos
                            laborales.
                        </p>
                    </div>
                </div>
                <BlockSpace></BlockSpace>
            </div>
        </div>
    )
}