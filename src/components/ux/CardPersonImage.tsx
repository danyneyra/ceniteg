
export default function CardPersonImage(props) {

    const {image} = props

  return (
    <div>
        <img className="w-[350px]" src={image} alt="" />
    </div>
  )
}
