import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

export const Cart = () => {

    const {cart} = useContext(CartContext)

    return (
        <Link to={'/cart'}>
            <button type="button" className="btn bg-primary position-relative">
                <i className="fa-solid fa-cart-shopping text-light"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger w-">
                    {cart.length}
                </span>
            </button>
        </Link>
    )
}
