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



const Usuarios = () => {
    
    const [cantidad, setCantidad] = useState(null)
    const [nuevo, setNuevo] = useState([])
    
    

    useEffect(() => {
        obtenerDatos();
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:3000/api/users')
        const usuarios = await data.json()
        console.log("datos", usuarios)
        
        setCantidad(usuarios.count)
        setNuevo(usuarios.lastUser)
        
        
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <h1>USUARIOS</h1>
                <Grid container spacing={3} justifyContent="space-evenly">
                    <Grid item xs={4.1}>
                        <Item><h2>Cantidad de Usuarios: <br />{cantidad}</h2></Item>
                    </Grid>
                    <Grid item xs={4.1}>
                        <Item>
                            <h2>Ultimo Usuario Creado:</h2> 
                            <h3>
                            {
                                nuevo.map(item => (
                                    <li key={item.id}>Email: {item.email}</li>
                                ))
                            }
                            </h3>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Usuarios