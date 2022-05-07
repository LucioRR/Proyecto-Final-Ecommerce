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
import { createTheme, ThemeProvider } from '@mui/material/styles';

const pages = [
  <Link className='botonNav' to="/">Home</Link>,
  <Link className='botonNav' to="/products">Productos</Link>,
  <Link className='botonNav' to="/users">Usuarios</Link>
];
const theme = createTheme({
  palette: {
    primary: {
      main: '#cb997e',
    },
    secondary: {
      main: '#fbe9e7',
    },
  },
});

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary" >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              color="#212121"
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
        </ThemeProvider>
    </div>
  );
}

export default App;
