import { BASE_URL } from "../assets/baseCondig";

export default function Lemas() {
  return (
    <div className="flex justify-center p-4">
        <div className="xl:max-w-[1080px] flex grid-cols-2">
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
