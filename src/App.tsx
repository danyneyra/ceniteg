import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./views/Home"
import Brochures from "./views/Brochures"
import Layout from "./components/layouts/Layout"
import { BASE_URL } from "./assets/baseConfig"

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: BASE_URL + "brochures/:id?", element: <Brochures /> }
      ],
    },
    { path: BASE_URL, element: <Home /> }
  ]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
