import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const CartPage = () => {

    const {cart} = useContext(CartContext)
    console.log(cart)
    return (
            
                <div className="d-flex flex-column text-center">
                { cart.length > 0 ?
                    <>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(prod => (
                                        <tr key={cart.id}>
                                            <td className="text-left">{prod.title}</td>
                                            <td>${prod.price}</td>
                                            <td className="text-center">
                                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                    <button type="button" class="btn btn-outline-primary">-</button>
                                                    <button type="text" class="btn btn-outline-primary">{prod.cantidad}</button>
                                                    <button type="button" class="btn btn-outline-primary">+</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            <tfoot>
                                <tr className="table-secondary h5">
                                    <td>TOTAL</td>
                                    <td></td>
                                    <td>$10000</td>
                                </tr>
                            </tfoot>
                        </table>

                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-primary w-25 align-self-center">Finalizar compra</button>  
                            <button className="btn btn-dark w-25 align-self-center">Vaciar carrito</button>
                        </div>
                    </> : <h2>No hay productos en el carrito</h2>
                }
                </div>
    )
}
