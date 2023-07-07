import { Link } from 'react-router-dom'
import products from './../data/products.json'

export const Home = () => {
    console.log(products)
    return (
        <div className='container'>
            <div className="text-center">
                <h2>PRODUCTOS</h2>
                
                {
                    products.map((product) => (
                        <Link to={'/product/' + product.id}>
                            <div className="card d-flex flex-row" key={product.id}>
                                <img className="card-img-top" src={product.thumbnail} alt="Card image cap" style={{"width": "30%"}}/>
                                <div className="card-body w-50">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text"><b>${product.price}</b></p>
                                    <a href="#" className="btn btn-primary">COMPRAR</a>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
