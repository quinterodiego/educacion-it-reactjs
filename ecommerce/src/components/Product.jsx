import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from './../data/products.json'

export const Product = () => {

    const [product, setProduct] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const productFinded = products.find(prod => prod.id === parseInt(id))
        setProduct(productFinded)
    }, [id])

    return (
        <>
            <div className="col-md-6">
                <img src={product.thumbnail} alt="" />
            </div>
            <div className="col-md-6">
                <p>{product.title}</p>
            </div>
        </>
    )
}
