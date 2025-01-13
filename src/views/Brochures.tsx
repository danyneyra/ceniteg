import { Link, useParams } from "react-router-dom"
import { brochures } from "../collections/brochures"
import BlockSpace from "../components/ux/BlockSpace"
import { BASE_URL } from "../assets/baseConfig"
import FlipbookViewer from "../components/FlipBookViewer"
import { useEffect, useState } from "react"
import { Brochure } from "../interfaces/brochure"

function Brochures() {
    const { id } = useParams()
    const [brochure, setBrochure] = useState<Brochure>()
   
    useEffect(() => {
        if (id) {
            const findBrochure = brochures.find(item => item.id === id)
            setBrochure(findBrochure ?? undefined)
        }
    }, [id])
    return (
        <div className="w-full flex justify-center items-center p-8">
            {
                id && brochure ? (
                    <FlipbookViewer url={brochure.url} />
                ) : (
                    <div className="xl:max-w-[1200px] flex-col items-center">
                        <div className="flex flex-col gap-4 justify-center">
                            <BlockSpace></BlockSpace>
                            <h1 className="text-6xl text-left font-heading font-normal py-4">Mira nuestro Brochures</h1>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-0 lg:p-4">

                                {
                                    brochures.map((item) => (
                                        <div key={item.id} className="flex flex-col items-center">
                                            <Link to={BASE_URL + "brochures/" + item.url}>
                                                <div className='overflow-hidden w-full'>
                                                    <img className="object-cover transform transition-transform duration-300 hover:scale-110 hover:cursor-pointer w-[320px] rounded-xl" src={item.coverImage} alt={item.title} />
                                                </div>
                                            </Link>

                                        </div>

                                    ))

                                }
                            </div>

                        </div>


                    </div>
                )
            }


        </div>
    )
}

export default Brochures