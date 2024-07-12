import { BASE_URL } from "../../assets/baseConfig";

export default function Nav(props) {
    const {name, url} = props;
  return (
    <div>
        <a className="text-xl py-2 px-4 hover:underline underline-offset-8" href={BASE_URL + url}>{name}</a>
    </div>
  )
}
