import { Link } from "react-router-dom";
import { BASE_URL } from "../assets/baseConfig";

export default function Navbar(props) {

    const {name, url} = props;

  return (
    <div>
        <Link className="text-white text-lg py-2 px-4 hover:underline underline-offset-8" to={BASE_URL + url}>{name}</Link>
    </div>
  )
}

