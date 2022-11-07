
import { useState } from "react"

export default function Item({producto, aumentar}) {

  const [stock, setStock] = useState(producto.stock)

  const comprar = () => {
    setStock(stock - 1)
    aumentar()
  }

  return (
    <div className='producto'>
      <h3>{producto.producto.nombre}</h3>
      <p>{producto.producto.descripcion}</p>
      <h5>En Stock: {stock > 0 ? stock : <span>agotado</span>} </h5>
      <button disabled={stock===0} onClick={comprar}>COMPRAR</button>
      {/* { stock > 0 ? <button onClick={comprar}>COMPRAR </button> : <button disabled> SIN STOCK</button>} */}
      
    </div>
  )
}
