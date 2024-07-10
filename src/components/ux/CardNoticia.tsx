import { BASE_URL } from '../../assets/baseCondig'

export default function CardNoticia(props) {

    const {image, title, text} = props
  return (
    <div>
        <img src={BASE_URL + image} alt={title} />
        <div className='flex  flex-col bg-white text-[#41424a] p-4'>
            <h2 className='font-bold'>{title}</h2>
            <p className='font-medium'>{text}</p>
            <button className='bg-[#4c86bb]'>Leer Más</button>
        </div>
    </div>
  )
}
