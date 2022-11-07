import React from 'react'
import productos from './data.json'
import Item from './Item'

export default function Listado({aumentar}) {
  return (
    <div className='container'>
      {productos.map(elemento => <Item key={elemento.id} producto={elemento} aumentar={aumentar}/>)}
    </div>
  )
}
