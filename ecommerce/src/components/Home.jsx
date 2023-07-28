import { Link } from 'react-router-dom'
import products from './../data/products.json'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Home = () => {

    const { agregarProducto } = useContext(CartContext)

    return (
        <div className='container position-relative'>
            <div className="text-center">
                <h2 className='pb-4'>PRODUCTOS</h2>
                <div className="card-container d-flex flex-wrap gap-3">
                    {
                        products.map((product) => (
                            
                                <div className="card d-flex justify-content-between" key={product.id} style={{width: "18rem"}}>
                                    <Link to={'/product/' + product.id} key={product.id} style={{ textDecoration: 'none', color: '#000' }}>
                                        <img className="card-img-top" src={product.thumbnail} alt="Card image cap" style={{"width": "40%"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text text-secondary pt-3">{product.description}</p>
                                        </div>
                                    </Link>
                                    <div className='d-flex justify-content-center align-items-center gap-3 p-5'>
                                        <p className="card-text m-0 h4"><b>${product.price}</b></p>
                                        <button type="button" className="btn bg-primary d-flex justify-content-center align-items-center gap-3" onClick={() => agregarProducto(product, 1) }>
                                            <p className='m-0 text-white fw-bolder'>COMPRAR</p>
                                            <i className="fa-solid fa-cart-plus text-light"></i>
                                        </button>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
