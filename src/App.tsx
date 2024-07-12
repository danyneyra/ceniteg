import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { BASE_URL } from "./assets/baseConfig"
import Home from "./views/Home"
import NotFound from "./views/NotFound"
import Terminos from "./views/Terminos"
import PoliticaPrivacidad from "./views/PoliticaPrivacidad"
import Noticias from "./views/Noticias"
import Nosotros from "./views/Nosotros"
import Servicios from "./views/Servicios"
import Noticia from "./components/Noticia"

function App() {

  const browserRouter = createBrowserRouter([
    {path: BASE_URL, element: <Home />},
    {path: BASE_URL+"servicios", element: <Servicios />},
    {path: BASE_URL+"nosotros", element: <Nosotros />},
    {path: BASE_URL+"terminos-condiciones", element: <Terminos />},
    {path: BASE_URL+"politicas-de-privacidad", element: <PoliticaPrivacidad />},
    {path: BASE_URL+"noticias", element: <Noticias />},
    {path: BASE_URL+"noticia/:noticiaId", element: <Noticia />},
    {path: "/*", element: <NotFound />}
  ])

  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default App
