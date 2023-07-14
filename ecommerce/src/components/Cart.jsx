import { Link } from "react-router-dom"
import cart from '../img/cart.svg'

export const Cart = () => {
    return (
        <Link to={'/cart'}>
            <button type="button" class="btn btn-success text-white position-relative">
                <img src={cart} alt="Carrito" className="btn-danger"/>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                    <span class="visually-hidden">unread messages</span>
                </span>
            </button>
        </Link>
    )
}
