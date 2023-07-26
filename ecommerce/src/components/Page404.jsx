import { Link } from "react-router-dom"

export const Page404 = () => {
  return (
    <div className="text-center">
        <h3>Error 404 - Página no encontrada</h3>
        <Link to={'/'} className="btn btn-primary">Ir a Home</Link>
    </div>
  )
}
