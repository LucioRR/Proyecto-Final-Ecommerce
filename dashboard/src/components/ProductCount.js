import React, {Component} from 'react';

class ProductCount extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
        }
    }
    
    apiCall(url, consecuencia) {
        fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data) )
        .catch(error => console.log(error))
    }
    componentDidMount () { 
        this.apiCall("http://localhost:3000/api/products", this.contarProductos)
    }
    contarProductos = (data) => {
        console.log(data)
        this.setState(
            {
                products: data.count
            }
        )
    }

    render() {
        let contenido;

        if (this.state.products ===  []) {
            contenido = <p>Actualizando...</p>
        } else {
            contenido = <h3>{this.state.products}</h3>
        }
    return (
        <div>
            <h3>
                Total de Productos:
            </h3>
            {contenido }
        </div>
    )}
}

export default ProductCount;