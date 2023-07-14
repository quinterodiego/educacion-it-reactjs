import { createContext, useState } from "react";
import products from '../data/products.json'

export const cartContext = createContext()

export const cartContextProvider = ({ children }) => {
    const [productos, setProductos] = useState(products)
    const [cart, setCart] = useState([])

    const agregarProducto = (producto, cantidad) => {
        const { id } = producto
        if (existeProducto(id)) {
            const index = cart.findIndex((producto) => producto.id == id)
            cart[index].cantidad += cantidad
            setCart(cart)
        } else {
            setCart([...cart, {...producto, cantidad}])
        }
    }

    const eliminarProducto = (id) => {

    }

    const existeProducto = (id) => {
        return cart.some(c => c.id == id)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const cantidadTotalProductos = () => {
        return cart.reduce((acc, producto) => acc += producto.cantidad, 0)
    }

    const sumaTotalProductos = () => {
        return cart.reduce((acc, producto) => acc += producto.price, 0)
    }

    return (
        <cartContext.Provider value={{productos, cart, agregarProducto, eliminarProducto, existeProducto, vaciarCarrito, cantidadTotalProductos, sumaTotalProductos}}>
            {children}
        </cartContext.Provider>
    )
}