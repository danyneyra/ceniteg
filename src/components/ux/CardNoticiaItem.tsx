import { BASE_URL } from '../../assets/baseCondig'

export default function CardNoticiaItem(props) {
    const {image, title} = props
  return (
    <div>
        <img src={BASE_URL + image} alt={title} />
    </div>
  )
}
