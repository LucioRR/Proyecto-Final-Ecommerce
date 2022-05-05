// import React, {Component} from 'react';

// class ProductList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             productos: []
//         }
//     }
    

//     componentDidMount () { 
//         fetch("http://localhost:3000/api/products")
//             .then( response => response.json())
//             .then( data => this.setState({productos: data.products}))
//             .catch( err => console.log(err))
//     }
    

//     componentDidUpdate () {
//         console.log("Actualizado")
//     }
//     render() {
//         let contenido;

//         if (this.state.productos ===  []) {
//             contenido = <p>Actualizando...</p>
//         } else {
//             contenido = 
//             <h3>{this.state.productos.map(item => <li> {item} </li>)}</h3>
//         }
//     return (
//         <div>
//             <h3>
//                 Listado de Productos:
//             </h3>
//             <ol>
//                 {contenido}
//             </ol>    
//         </div>
//     )}
// }


// export default ProductList;

import { useParams} from 'react-router-dom';

const productList = [{
    id: 1,
    nombre: 'Bikini'
}]

function ProductList(props) {
    let id = useParams();
    let product = productList.find(oneProduct => oneProduct.id === Number(id));
    return(
        <div>
            <h1>
                product
            </h1>
            {/* <Link to="/products/1">Producto 1</Link> */}

            {
                product &&
                <>
                    <p>ID: {product.id}</p>
                    <p>Nombre: {product.nombre}</p>
                </>
            }
            {
                !product && <p>No hay productos con ese ID</p>
            }
        </div>
    );
}
export default ProductList;