import { BASE_URL } from "../assets/baseConfig";

export default function Lemas() {

  return (
    <div className="w-full flex justify-center items-center p-4">
        <div className="xl:max-w-[1080px] flex flex-col lg:grid lg:grid-cols-2">
            <div className="w-full">
                <img className="w-full" src={BASE_URL + "generando-valor.png"} alt="" />
            </div>
            <div className="w-full">
                <img className="w-full" src={BASE_URL + "certificados-senace.png"} alt="" />
            </div> 
        </div> 
    </div>
  )
}
