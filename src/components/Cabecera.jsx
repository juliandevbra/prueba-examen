import React from 'react'


export default function Cabecera({total}) {
  
  return (
    <header>
        <h1>Carrito de compras</h1>
        <p>cantidad de productos: <span>{total}</span></p>
    </header>
  )
}
