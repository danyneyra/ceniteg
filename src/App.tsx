import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { BASE_URL } from "./assets/baseCondig"
import Home from "./views/Home"
import Contact from "./views/Contact"
import Projects from "./views/Projects"
import Services from "./views/Services"
import NotFound from "./views/NotFound"
import About from "./views/About"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import { useEffect } from "react"

function App() {

  useEffect(() => {
    AOS.init({
    });
  }, []);

  const browserRouter = createBrowserRouter([
    {path: BASE_URL, element: <Home />},
    {path: BASE_URL+"contact", element: <Contact />},
    {path: BASE_URL+"proyectos", element: <Projects />},
    {path: BASE_URL+"servicios", element: <Services />},
    {path: BASE_URL+"servicios", element: <About />},
    {path: "/*", element: <NotFound />}
  ])

  return (
    
    <>
      <>
        <RouterProvider router={browserRouter}/>
      </>
    </>
  )
}

export default App
