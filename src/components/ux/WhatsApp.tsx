import { BASE_URL } from "../../assets/baseConfig";


export default function WhatsApp() {
  return (
    <div className="flex pl-4">
      <a href="https://wa.me/51945297232" className="fixed z-50 transition-transform duration-300 hover:scale-110 
      flex bg-white p-4 bottom-5 right-3 w-16 h-16 rounded-full justify-center items-center cursor-pointer" target="_blank">
        <img src={BASE_URL + "icon-whatsapp-green.png"} alt="WhatsApp" />
      </a>
    </div>
  )
}
