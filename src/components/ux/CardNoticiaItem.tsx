import { BASE_URL } from '../../assets/baseConfig'

export default function CardNoticiaItem(props) {
    const {image, title} = props
  return (
    <div className='flex justify-center items-center'>
        <img className="w-full h-full object-cover" src={BASE_URL + image} alt={title} />
    </div>
  )
}
