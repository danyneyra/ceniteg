import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../assets/baseConfig";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ux/ScrollToTop";
import WhatsApp from "./ux/WhatsApp";
import { News } from "../interfaces/noticia";
import axios from "axios";
import { useEffect, useState } from "react";
import DateComponent from "./ux/DateComponent";

export default function Noticia() {

  const {noticiaId} = useParams()
  const navigate = useNavigate()

  const [noticia, setNoticia] = useState<News>({
      id: "",
      title: "",
      date: "",
      description: "",
      author: "",
      content: "",
      coverImage: "",
      url: "",
      tags: [],
    });
  
  useEffect(() => {
      axios.get("../noticias.json")
          .then((res) =>{
              const noticias: Array<News> = res.data
              const detailNews: News | undefined = noticias.find(
                  (item) => item.id == noticiaId || item.url == noticiaId
              )
              if (detailNews){
                detailNews && setNoticia(detailNews)
              }else{
                  navigate('/not-found')
              }
          })
          .catch((err) => {
              console.log(err)
              navigate('not-found')
          });
  }, [noticiaId]);
  
  return (
    <>
      <Header></Header>
      <ScrollToTop></ScrollToTop>
      <div className="w-full flex flex-col justify-center items-center bg-white text-[#40414a]">
        <div
          className="relative w-full h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${BASE_URL + noticia.coverImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col gap-2 items-center justify-center">
            <h1 className="text-white text-3xl font-heading text-center">
              {noticia.title}
            </h1>
            
            <DateComponent date={noticia.date}></DateComponent>
          </div>
        </div>

        <div className="xl:max-w-[1080px] flex-col items-center p-8">
          <div className="flex flex-col gap-4 justify-center">
            <p className="font-bold underline text-center">
            {noticia.title}
            </p>
            <div className="news-content" dangerouslySetInnerHTML={{ __html: noticia.content }} />
          </div>
        </div>
      </div>
      <WhatsApp></WhatsApp>
      <Footer></Footer>
    </>
  );
}
