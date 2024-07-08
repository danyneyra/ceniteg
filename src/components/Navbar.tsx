import { BASE_URL } from "../assets/baseCondig";

export default function Navbar(props) {

    const {name, url} = props;

  return (
    <div>
        <a className="text-white text-lg py-2 px-4 hover:underline underline-offset-8" href={BASE_URL + url}>{name}</a>
    </div>
  )
}

