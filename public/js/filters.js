let bikinis = document.querySelectorAll('.category1');
let primeraPiel = document.querySelectorAll('.category2');
let segundaPiel = document.querySelectorAll('.category3');
let mekeUp = document.querySelectorAll('.category4');
let accesorios = document.querySelectorAll('.category5');
let checkBikini = document.querySelector('#check1');
let checkPP = document.querySelector('#check2');
let checkSP = document.querySelector('#check3');
let checkMU = document.querySelector('#check4');
let checkAcc = document.querySelector('#check5');
let checkTodos = document.querySelector('#checkTodos');
let query = new URLSearchParams(location.search);
let rutaProductos = document.querySelector('.rutaProductos');


if (query.has('cat')){
    let category = query.get('cat')
    if (category == 1) {
        checkBikini.checked = true;
        changeBikiniStatus();
        rutaProductos.innerHTML = '/ BIKINIS';
    }else if (category == 2) {
        checkPP.checked = true;
        changePPStatus()
        rutaProductos.innerHTML = '/ PRIMERAS PIELES';
    } else if (category == 3) {
        checkSP.checked = true;
        changeSPStatus()
        rutaProductos.innerHTML = '/ SEGUNDAS PIELES';
    } else if (category == 4) {
        checkMU.checked = true;
        rutaProductos.innerHTML = '/ MAKE UP';
        changeMUStatus()
    } else if (category == 5) {
        checkAcc.checked = true;
        changeAccStatus()
        rutaProductos.innerHTML = '/ ACCESORIOS';
    }
}

function changeBikiniStatus(){
    if (checkBikini.checked) {
        for (let product of primeraPiel){
            product.style.display = 'none';
        }
        for (let product of segundaPiel){
            product.style.display = 'none';
        }
        for (let product of mekeUp){
            product.style.display = 'none';
        }
        for (let product of accesorios){
            product.style.display = 'none';
        }
    } else {
        for (let product of primeraPiel){
            product.style.display = 'block';
        }
        for (let product of segundaPiel){
            product.style.display = 'block';
        }
        for (let product of mekeUp){
            product.style.display = 'block';
        }
        for (let product of accesorios){
            product.style.display = 'block';
        }
    }
}

function changePPStatus(){
    if (checkPP.checked) {
        for (let product of bikinis){
            product.style.display = 'none';
        }
        for (let product of segundaPiel){
            product.style.display = 'none';
        }
        for (let product of mekeUp){
            product.style.display = 'none';
        }
        for (let product of accesorios){
            product.style.display = 'none';
        }
    } else {
        for (let product of bikinis){
            product.style.display = 'block';
        }
        for (let product of segundaPiel){
            product.style.display = 'block';
        }
        for (let product of mekeUp){
            product.style.display = 'block';
        }
        for (let product of accesorios){
            product.style.display = 'block';
        }
    }
}

function changeSPStatus () {
    if (checkSP.checked) {
        for (let product of bikinis){
            product.style.display = 'none';
        }
        for (let product of primeraPiel){
            product.style.display = 'none';
        }
        for (let product of mekeUp){
            product.style.display = 'none';
        }
        for (let product of accesorios){
            product.style.display = 'none';
        }
    } else {
        for (let product of bikinis){
            product.style.display = 'block';
        }
        for (let product of primeraPiel){
            product.style.display = 'block';
        }
        for (let product of mekeUp){
            product.style.display = 'block';
        }
        for (let product of accesorios){
            product.style.display = 'block';
        }
    }
}

function changeMUStatus () {
    if (checkMU.checked) {
        for (let product of bikinis){
            product.style.display = 'none';
        }
        for (let product of primeraPiel){
            product.style.display = 'none';
        }
        for (let product of segundaPiel){
            product.style.display = 'none';
        }
        for (let product of accesorios){
            product.style.display = 'none';
        }
    } else {
        for (let product of bikinis){
            product.style.display = 'block';
        }
        for (let product of primeraPiel){
            product.style.display = 'block';
        }
        for (let product of segundaPiel){
            product.style.display = 'block';
        }
        for (let product of accesorios){
            product.style.display = 'block';
        }
    }
}

function changeAccStatus () {
    if (checkAcc.checked) {
        for (let product of bikinis){
            product.style.display = 'none';
        }
        for (let product of primeraPiel){
            product.style.display = 'none';
        }
        for (let product of mekeUp){
            product.style.display = 'none';
        }
        for (let product of segundaPiel){
            product.style.display = 'none';
        }
    } else {
        for (let product of bikinis){
            product.style.display = 'block';
        }
        for (let product of primeraPiel){
            product.style.display = 'block';
        }
        for (let product of mekeUp){
            product.style.display = 'block';
        }
        for (let product of segundaPiel){
            product.style.display = 'block';
        }
    }
}

checkBikini.addEventListener('change', () => {
    checkPP.checked = false;
    checkSP.checked = false;
    checkMU.checked = false;
    checkAcc.checked = false;
    changePPStatus();
    changeSPStatus();
    changeMUStatus();
    changeAccStatus();
    changeBikiniStatus();
    rutaProductos.innerHTML = '/ BIKINIS';
})

checkPP.addEventListener('change', () => {
    checkBikini.checked = false;
    checkSP.checked = false;
    checkMU.checked = false;
    checkAcc.checked = false;
    changeBikiniStatus();
    changeSPStatus();
    changeMUStatus();
    changeAccStatus();
    changePPStatus();
    rutaProductos.innerHTML = '/ PRIMERAS PIELES';
})

checkSP.addEventListener('change', () => {
    checkBikini.checked = false;
    checkPP.checked = false;
    checkMU.checked = false;
    checkAcc.checked = false;
    changeBikiniStatus();
    changePPStatus();
    changeMUStatus();
    changeAccStatus();
    changeSPStatus();
    rutaProductos.innerHTML = '/ SEGUNDAS PIELES';
})

checkMU.addEventListener('change', () => {
    checkPP.checked = false;
    checkSP.checked = false;
    checkBikini.checked = false;
    checkAcc.checked = false;
    changeBikiniStatus();
    changePPStatus();
    changeSPStatus();
    changeAccStatus();
    changeMUStatus();
    rutaProductos.innerHTML = '/ MAKE UP';
})

checkAcc.addEventListener('change', () => {
    checkPP.checked = false;
    checkSP.checked = false;
    checkBikini.checked = false;
    checkMU.checked = false;
    changeBikiniStatus();
    changePPStatus();
    changeSPStatus();
    changeMUStatus();
    changeAccStatus();
    rutaProductos.innerHTML = '/ ACCESORIOS';
})

checkTodos.addEventListener('change', () => {
    checkPP.checked = false;
    checkSP.checked = false;
    checkBikini.checked = false;
    checkMU.checked = false;
    checkAcc.checked = false;
    changeBikiniStatus();
    changePPStatus();
    changeSPStatus();
    changeMUStatus();
    changeAccStatus();
    rutaProductos.innerHTML = '';
})