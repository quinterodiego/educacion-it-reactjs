import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const CartPage = () => {

    const {cart} = useContext(CartContext)
    console.log(cart)
    return (
        <div className="d-flex flex-column">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(prod => (
                            <tr key={cart.id}>
                                <td className="text-center">{prod.cantidad}</td>
                                <td>{prod.title}</td>
                                <td>${prod.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {
                cart.length > 0 ?
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-primary w-25 align-self-center">Finalizar compra</button>  
                    <button className="btn btn-dark w-25 align-self-center">Vaciar carrito</button>
                </div> : 
                <></>
            }
        </div>
    )
}
