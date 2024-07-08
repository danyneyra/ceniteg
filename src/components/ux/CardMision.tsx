import { BASE_URL } from "../../assets/baseCondig";

export default function CardMision(props) {

    const {image, title, text} = props;

  return (
    <div className="flex flex-col w-full items-center p-4 gap-2">
        <img className="w-[100px]" src={BASE_URL + image} alt="" />
        <h2 className="uppercase font-bold">{title}</h2>
        <p className="text-lg text-justify text-align-last-justify">{text}</p>
    </div>
  )
}
