import { Link } from 'react-router-dom'
import { BASE_URL } from '../../assets/baseConfig'

export default function CardNoticia(props) {

    const {image, title, text, url} = props
  return (
    <div className="flex flex-col items-center">
      <Link to={BASE_URL + "noticia/"+ url}>
        <div className='overflow-hidden w-full'>
          <img className="object-cover transform transition-transform duration-300 hover:scale-110 hover:cursor-pointer h-[200px] w-full" src={BASE_URL + image} alt={title} />
        </div>
        <div className='flex flex-col bg-white text-[#41424a] p-4 gap-2'>
            <h2 className='font-bold'>{title}</h2>
            <p className='font-medium text-sm'>{text}</p>
            <div className='flex justify-end'>
              <button className='bg-[#4c86bb] w-[100px] text-white rounded-lg'>Leer Más</button>
            </div>
        </div>
      </Link>
      
    </div>
  )
}
