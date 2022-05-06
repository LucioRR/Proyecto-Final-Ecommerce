import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Productos from './Products';
import Users from './Users';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function Home() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <h1>
                    DASHBOARD <br/>
                    María Cielo
                </h1>
                <Grid container spacing={4} justifyContent="space-evenly">
                    <Button variant="contained">
                            <Link className='botonNav' to="/users">Usuarios</Link>
                            <Routes>
                                <Route path="/users" element={<Users />} />
                            </Routes>
                        </Button>
                    <Button variant="contained">
                            <Link className='botonNav' to="/products">Productos</Link>
                            <Routes>
                                <Route path="/products" element={<Productos />} />
                            </Routes>
                        </Button>
                </Grid>
            </Box>
        </div>
    );
}

export default Home;