import { Link } from 'react-router-dom'
import products from './../data/products.json'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Home = () => {

    const { agregarProducto } = useContext(CartContext)

    return (
        <div className='container position-relative'>
            <div className="text-center">
                <h2 className='p-3'>PRODUCTOS</h2>
                
                {
                    products.map((product) => (
                        
                            <div className="card d-flex" key={product.id}>
                                <Link to={'/product/' + product.id} key={product.id}>
                                    {/* <img className="card-img-top" src={product.thumbnail} alt="Card image cap" style={{"width": "40%"}}/> */}
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                    </div>
                                </Link>
                                <div className='d-flex justify-content-center align-items-center gap-3 p-5'>
                                    <p className="card-text m-0 h3"><b>${product.price}</b></p>
                                    <button type="button" className="btn bg-primary w-25 d-flex justify-content-center align-items-center gap-3" onClick={() => agregarProducto(product, 1) }>
                                        <p className='m-0 text-white fw-bolder'>COMPRAR</p>
                                        <i className="fa-solid fa-cart-plus text-light"></i>
                                    </button>
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    )
}
