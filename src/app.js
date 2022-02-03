const express = require('express');
const app = express();
const path = require('path');

// Establecimento del puerto
app.set('port', process.env.PORT || 3000);

// Motor de renderizado
app.set('view engine', 'ejs');

//Establecer donde está la carpeta views
app.set('views', path.resolve(__dirname, './views'));

// Escuchar el puerto
app.listen(app.get('port'), () => console.log('Servidor levantado en http://localhost:' + app.get('port')));

//Establecimiento de la carpeta static
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());

//Uso de rutas
app.use(require('./routes/main'));
app.use('/productos', require('./routes/product'));
app.use(require('./routes/user'));
app.use(require('./routes/cart'));