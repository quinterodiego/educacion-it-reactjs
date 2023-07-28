import { useContext } from "react"
import { Cart } from "./Cart"
import { Link } from "react-router-dom"

export const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg d-flex justify-content-between">
            <Link className="navbar-brand" to="/">
                <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/themes/common/logo-1841267561-1672763124-5548dbd933d11ba22433fd0fae3e59b11672763124-480-0.jpg?0" alt="" className="w-50"/>
            </Link>
            <ul className="navbar-nav flex-row gap-4">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/"><span className="h5">Home</span></Link>
                </li>
                <Cart />
            </ul>
        </nav>
    )
}
