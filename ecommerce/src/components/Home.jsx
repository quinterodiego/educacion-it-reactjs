import { Link } from 'react-router-dom'
import products from './../data/products.json'

export const Home = () => {
    console.log(products)
    return (
        <div className='container'>
            <div className="text-center">
                <h2>PRODUCTOS</h2>
                
                <div className="d-flex flex-row flex-wrap w-100">
                {
                    products.map((product) => (
                        <Link to={'/product/' + product.id}>
                            <div className="card w-25" key={product.id}>
                                <img className="card-img-top" src={product.thumbnail} alt="Card image cap" style={{"width": "300px"}}/>
                                <div className="card-body">
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
        </div>
    )
}
