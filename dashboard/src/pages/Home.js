import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Productos from './Products';
import Users from './Users';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Home() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <h1>
                    DASHBOARD <br/>
                    María Cielo
                </h1>
                <Grid container spacing={4} justifyContent="space-evenly">
                    <Grid item xs={3}>
                        <Item><Button variant="contained">
                            <Link className='botonNav' to="/users">Usuarios</Link>
                            <Routes>
                                <Route path="/users" element={<Users />} />
                            </Routes>
                        </Button>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item><Button variant="contained">
                            <Link className='botonNav' to="/products">Productos</Link>
                            <Routes>
                                <Route path="/products" element={<Productos />} />
                            </Routes>
                        </Button>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Home;