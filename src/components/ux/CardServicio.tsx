import { BASE_URL } from "../../assets/baseCondig"

export default function CardServicio(props) {
    const {image, title} = props
  return (
    <div className="flex flex-col w-[200px] gap-4 items-center">
        <div className="bg-white rounded-[25%] w-[150px]">
            <img className="p-4" src={BASE_URL + image} alt="" />
        </div>
        <p className="text-center text-lg">
            {title}
        </p>
    </div>
  )
}
