import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BlockSpace from "../components/ux/BlockSpace";
import CardNoticia from "../components/ux/CardNoticia";
import ScrollToTop from "../components/ux/ScrollToTop";
import WhatsApp from "../components/ux/WhatsApp";
import { News } from "../interfaces/noticia";
import axios from "axios";

export default function Noticias() {

  const [noticias, setNoticias] = useState<News[]>([]);

  useEffect(() => {
    axios.get("noticias.json")
      .then((res) => {
        const noticias: Array<News> = res.data
        setNoticias(noticias)
      })
      .catch((err) => console.log(err));
  }, [noticias]);

  return (
    <>
      <Header></Header>
      <ScrollToTop></ScrollToTop>
      <div className="w-full flex justify-center items-center p-8">
        <div className="xl:max-w-[1200px] flex-col items-center">
          <div className="flex flex-col gap-4 justify-center">
            <BlockSpace></BlockSpace>
            <h1 className="text-6xl text-left font-heading font-normal py-4">Noticias</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-0 lg:p-4">

              {
                noticias.map((noticia) =>(
                  <CardNoticia 
                  key={noticia.id} 
                  image={noticia.coverImage} 
                  title={noticia.title}
                  text={noticia.description}
                  url={noticia.url}>
                </CardNoticia>

                ))
              }
            </div>
          </div>
        </div>
      </div>
      <WhatsApp></WhatsApp>
      <Footer></Footer>
    </>
  );
}
