import { BASE_URL } from "../../assets/baseCondig"

export default function ListServicio(props) {

    const {title} = props
  return (
    <div className="flex gap-2 items-center">
        <img className="w-[35px]" src={BASE_URL + "check-item.png"} alt="" />
        <p className="text-2xl">{title}</p>
    </div>
  )
}
