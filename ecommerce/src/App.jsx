import './App.css'

export const App = () => {
  return (
    <div className="container">
      <h1>Mio Mio</h1>
      <button className="btn btn-outline-secondary">Carrito</button>
      <hr />
      <input type="text" class="form-control" placeholder="Tu búsqueda..." aria-label="Username" aria-describedby="basic-addon1"></input>
      <div className="img">
        <img src="./img/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg" alt="" />
        <div className="title"><p>Lorem, ipsum dolor.</p></div>
      </div>
      <div className="img">
        <img src="./img/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg" alt="" />
        <div className="title"><p>Lorem, ipsum dolor.</p></div>
      </div>
      <div className="img">
        <img src="./img/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg" alt="" />
        <div className="title"><p>Lorem, ipsum dolor.</p></div>
      </div>
    </div>
  )
}
