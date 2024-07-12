import { BASE_URL } from "../../assets/baseConfig"

export default function ListServicio(props) {

    const {title} = props
  return (
    <div className="flex gap-2 items-center">
        <img className="w-[25px] lg:w-[35px]" src={BASE_URL + "check-item.png"} alt="" />
        <p className="text-sm lg:text-2xl">{title}</p>
    </div>
  )
}
