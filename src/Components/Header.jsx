import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-blue1 p-3">
    <h1 className="font-Beba text-5xl text-center pt-16">Avatar: O Caminho da Água</h1>

    <nav>
    <ul className="flex justify-center gap-8">
      <li className="text-blue3">
        <Link to="/">Home</Link>
      </li>
      <li className="text-blue3">
        <Link to="/personagens">Personagens</Link>
      </li>
    </ul>
  </nav>
  </header>
  )
}
