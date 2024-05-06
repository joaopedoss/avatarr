import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Minhapag from "./pages/Minhapag.jsx"
import Header from "./Components/Header"
import Personagens from "./pages/Personagens.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Minhapag />
  },
  {
    path:"/personagens",
    element: <Personagens />
  },
]) 

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
