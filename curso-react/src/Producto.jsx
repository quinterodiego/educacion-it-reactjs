export const Producto = () => {

  const coca = 'Original'

  return (
    <p>
      <img src={(coca === 'Original') ? "https://lavaquita.co/cdn/shop/products/supermercados_la_vaquita_supervaquita_gaseosa_coca_cola_10_oz_bebidas_liquidas_700x700.jpg?v=1620489361" : "https://coca-colafemsa.com/wp-content/uploads/2020/02/8-5.png"} alt="" className='img-fluid'/>
    </p>
  )
}
