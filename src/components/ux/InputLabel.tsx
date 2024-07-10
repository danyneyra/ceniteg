
export default function InputLabel(props) {

    const {label} = props;

  return (
    <div className="flex flex-col gap-2">
        <p className="text-center">{label}</p>
        <input className="w-full rounded-lg text-lg p-2 text-black" type="text" />
    </div>
  )
}
