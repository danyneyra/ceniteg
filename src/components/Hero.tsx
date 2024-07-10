import { BASE_URL } from "../assets/baseCondig";

export default function Hero() {
  return (
    <div className="w-full">
        <video width="100%" autoPlay muted loop>
            <source src={BASE_URL + "video-polvorines.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
  )
}
