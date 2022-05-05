import { Link, Route, Routes } from 'react-router-dom';
import * as React from 'react'
import Home from './pages/Home';
import Products from './pages/Products';
import Users from './pages/Users';
import './App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = [
  <Link className='botonNav' to="/">Home</Link>,
  <Link className='botonNav' to="/products">Productos</Link>,
  <Link className='botonNav' to="/users">Usuarios</Link>
];

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              María Cielo
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/products/:id" element={<ProductList />} /> */}
            <Route path="/" element={<Home />} />
          </Routes>
    </div>
  );
}

export default App;
