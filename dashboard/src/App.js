import {Link, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Productos from './components/Productos';
import Users from './pages/Users';
import ProductList from './components/ProductList';
import './App.css'

function App() {
  return (
    <>
      <header>
        <h1 className="title">
          Dashboard
        </h1>
        <nav>
          <Link className='botonNav' to="/">Home</Link>
          <Link className='botonNav' to="/users">Usuarios</Link>
          <Link className='botonNav' to="/products">Productos</Link>
          <Link className='botonNav' to="/productos">Listado Productos</Link>
        </nav>
        <main>
            <Routes>
              <Route path="/users" element ={<Users />} />
              <Route path="/productos" element ={<Productos />} />
              <Route path="/products" element ={<Products />} />
              <Route path="/products/:id" element ={<ProductList />} />
              <Route path="/" element ={<Home />} />
            </Routes>
        </main>
      </header>
    </>
  );
}

export default App;
