import { useEffect, useState } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#663333',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Productos = () => {
    const [lista, setLista] = useState([])
    const [cantidad, setCantidad] = useState(null)
    const [categoria, setCategoria] = useState([])
    const [nuevo, setNuevo] = useState([])

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
        setNuevo(productos.lastProduct)
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }} >
                <h1>PRODUCTOS</h1>
                <Grid container spacing={4} justifyContent="space-evenly" >
                    <Grid item xs={4.1} >
                        <Item  ><h2>Cantidad de Artículos: <br />{cantidad}</h2></Item>
                    </Grid>
                    <Grid item xs={4.1}>
                        <Item><h2>Cantidad de Categorías: <br />
                            {
                                categoria.length
                            }
                        </h2></Item>
                    </Grid>
                    <Grid item xs={4.1}>
                        <Item>
                            <h2>Lista de Artículos:</h2>
                            {
                                lista.map(item => (
                                    <li key={item.id}>Artículo: {item.name}<br/>Precio: {item.price}</li>
                                ))
                            }
                        </Item>
                    </Grid>
                    <Grid item xs={4.1}>
                        <Item>
                            <h2>Artículos por Categoría:</h2>
                            {
                                categoria.map(item => (
                                    <li key={item.id}>Categoría: {item.name}<br/>Total de Artículos: {item.count}</li>
                                ))

                            }</Item>
                    </Grid>
                    <Grid item xs={4.1}>
                        <Item>
                            <h2>Último Artículo Agregado:</h2>
                            <h4> 
                            {
                                nuevo.map(item => (
                                    <li key={item.id}>Artículo: {item.name}<br/>Precio: {item.price}</li>
                                ))
                            }
                            </h4>
                        </Item>
                    </Grid>
                </Grid>
            </Box>




            <ul>

            </ul>
        </div>
    )
}

export default Productos