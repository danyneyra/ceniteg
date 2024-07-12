
const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  
  function formatDate(dateString: string): string {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    const formattedDay = date.getDate();
    const formattedMonth = months[date.getMonth()];
    const formattedYear = date.getFullYear();
  
    return `${formattedDay} de ${formattedMonth}, ${formattedYear}`;
  }

export default function DateComponent({ date }) {
  return (
    <div className="text-white">
        {formatDate(date)}
    </div>
  )
}
