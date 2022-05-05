
import React, {useEffect, useState} from 'react'

const Productos = () => {
    

    const [lista, setLista] = useState([])
    const [cantidad, setCantidad] = useState(null)
    const [categoria, setCategoria] = useState([])

    useEffect(() => {
        obtenerDatos(); 
    }, [])

    const obtenerDatos = async () => {
       const data = await fetch('http://localhost:3000/api/products')
       const productos = await data.json()
       console.log("datos", productos)
       setLista(productos.products)
       setCantidad(productos.count)
       setCategoria(productos.countByCategory)
    }

  return (
    <div>
        <h1>Productos</h1>
        <h2>Cantidad de artículos: <br/>{cantidad}</h2>
        <h2>Categorias:
            {
                categoria.length
            }
        </h2>
        <ul>
            {
                lista.map(item => (
                <li key={item.id}>{item.name}</li> 
                ))
                
            }
        </ul>
        <ul>
            {
                categoria.map(item => (
                <li key={item.id}>{item.name}:<br/> {item.count}</li>
                ))
                
            }
        </ul>
    </div>
  )
}

export default Productos