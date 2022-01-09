let express = require('express');
let app = express();
const path = require('path');
app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/producto', function(req, res){
    res.sendFile(path.join(__dirname, './views/productDetail.html'));
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.listen(3000, function(){
    console.log('Servidor Levantado')
});