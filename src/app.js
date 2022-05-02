const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const method = require('method-override');
const cookies = require('cookie-parser')
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

// Establecimento del puerto
app.set('port', process.env.PORT || 3000);

// Motor de renderizado
app.set('view engine', 'ejs');

//Establecer donde está la carpeta views
app.set('views', path.resolve(__dirname, './views'));

//Habilitación de sesiones 
app.use(session({     
    secret: "Maria Cielo",       
    resave: false,    
    saveUninitialized: false,
}));

//habilitación de cookies
app.use(cookies());

//Middleware de aplicación
app.use(userLoggedMiddleware); 

// Configuracion del methodOverride
app.use(method('m'));

// Procesar los formularios
app.use(express.urlencoded({ extended: true }));

// Escuchar el puerto
app.listen(app.get('port'), () => console.log('Servidor levantado en http://localhost:' + app.get('port')));

//Establecimiento de la carpeta static
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../upload')));
app.use(express.json());

//Uso de rutas
app.use(require('./routes/main'));
app.use('/productos', require('./routes/product'));
app.use('/users', require('./routes/user'));
app.use(require('./routes/cart'));
app.use('/api/products', require('./routes/apiProduct'));
app.use('/api/users', require('./routes/apiUser'));