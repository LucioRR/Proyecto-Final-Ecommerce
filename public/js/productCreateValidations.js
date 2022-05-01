window.addEventListener('load', () => {
    let form = document.querySelector('#createForm');
    let category = document.querySelector('#categoria');
    let toHide = document.querySelectorAll('.toHide');

    // Modifica el front dependieno de la categoría.
    category.addEventListener('change', () => {
        if (category.value == '4'){
            toHide.forEach(element => {
                if (element.name == 'stock'){
                    element.value = 0;
                    console.log(element.name, element.value);
                } else if (element.name == 'talle'){
                    element.value = 4;
                    console.log(element.name, element.value);
                } else {
                    element.value = 'N/A'
                    console.log(element.name, element.value);
                }
                element.classList.add('disable');
            })
        } else {
            toHide.forEach(element => {
                element.classList.remove('disable');
                element.value = ''
            });
        }
    });
    
    form.addEventListener('submit', (event) => {
        let errors = new Map();
        let productName = document.querySelector('#nombre_producto');
        let brand = document.querySelector('#marca');
        let description = document.querySelector('#descripcion');
        let price = document.querySelector('#precio')
        let color = document.querySelector('#nombreColor');
        let stock = document.querySelector('#stock');
        let status = document.querySelectorAll('.status');
        let flag = false;


        // Validaciones del producto.
        if (productName.value.length == 0) {
            errors.set('noName', 'Debe ingresar un nombre de producto');
        } else if (productName.value.length < 5){
            errors.set('shortName', 'El nombre del producto debe contener al menos 5 caracteres.')
        }

        // Validaciones de la marca
        if (brand.value.length == 0) {
            errors.set('noBrand', 'Debe ingresar una marca');
        }

        // Validaciones de la descripción
        if (description.value.length == 0) {
            errors.set('noDescription', 'Debe ingresar una descripción');
        } else if (description.value.length < 20){
            errors.set('shortDescription', 'La descripción debe contener al menos 20 caracteres.');
        }

        // Validaciones del precio
        if (price.value.length == 0){
            errors.set('noPrice', 'Debe ingresar un precio para el producto.');
        } else if (isNaN(price.value)){
            errors.set('isNaNPrice', 'Debe ingresar solo numeros separados por un punto.');
        }

        //Validaciones del color
        if (color.value.length == 0) {
            errors.set('noColor', 'Debe ingresar un nombre de color.');
        }

        // Validaciones del stock
        if (stock.value.length == 0) {
            errors.set('noStock', 'Debe ingresar el stock del producto.');
        } else if (isNaN(stock.value)){
            errors.set('isNaNStock', 'Debe ingresar un número.')
        }

        //Validaciones del estado
        status.forEach(element => {
            if (element.checked) {
                flag = true;
            }
        });
        if (!flag){
            errors.set('noStatus', 'Debe seleccionar un estado.')
        }

        // Insercción de errores al DOM
        if (errors.size > 0){
            event.preventDefault();
            if (errors.has('noName')){
                document.getElementById('nameError').innerText = errors.get('noName');
                productName.style.backgroundColor = 'pink';
            } else {
                document.getElementById('nameError').innerText = '';
            }
            if (errors.has('shortName')){
                document.getElementById('nameError').innerText = errors.get('shortName');
                productName.style.backgroundColor = 'pink';
            } else {
                document.getElementById('nameError').innerText = '';
            }
            if (errors.has('noBrand')){
                document.getElementById('brandError').innerText = errors.get('noBrand');
                brand.style.backgroundColor = 'pink';
            } else {
                document.getElementById('brandError').innerText = '';
            }
            if (errors.has('noDescription')){
                document.getElementById('descriptionError').innerText = errors.get('noDescription');
                description.style.borderColor = 'pink';
            } else {
                document.getElementById('descriptionError').innerText = '';
            }
            if (errors.has('shortDescription')){
                document.getElementById('descriptionError').innerText = errors.get('shortDescription');
                description.style.borderColor = 'pink';
            } else {
                document.getElementById('descriptionError').innerText = '';
            }
            if (errors.has('noPrice')){
                document.getElementById('priceError').innerText = errors.get('noPrice');
                price.style.backgroundColor = 'pink';
            } else {
                document.getElementById('priceError').innerText = '';
            }
            if (errors.has('isNaNPrice')){
                document.getElementById('priceError').innerText = errors.get('isNaNPrice');
                price.style.backgroundColor = 'pink';
            } else {
                document.getElementById('priceError').innerText = '';
            }
            if (errors.has('noColor')){
                document.getElementById('colorError').innerText = errors.get('noColor');
                color.style.backgroundColor = 'pink';
            } else {
                document.getElementById('colorError').innerText = '';
            }
            if (errors.has('noStock')){
                document.getElementById('stockError').innerText = errors.get('noStock');
                stock.style.backgroundColor = 'pink';
            } else {
                document.getElementById('stockError').innerText = '';
            }
            if (errors.has('isNaNStock')){
                document.getElementById('stockError').innerText = errors.get('isNaNStock');
                stock.style.backgroundColor = 'pink';
            } else {
                document.getElementById('stockError').innerText = '';
            }
            if (errors.has('noStatus')){
                document.getElementById('statusError').innerText = errors.get('noStatus');
                status.style.backgroundColor = 'pink';
            } else {
                document.getElementById('statusError').innerText = '';
            }
        }
    });
});