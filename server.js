const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

//*port config
const port = process.env.PORT || 3000;

//* view engine
//Express hbs engine
//paquete que permite renderizar handledbars
hbs.registerPartials(__dirname + '/views/parcials');
app.set('view engine', 'hbs');

//* helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})




app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'Lucas',
        anio: new Date().getFullYear(),
    });
});
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        anio: new Date().getFullYear(),
    });
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});


// app.get('/', function (req, res) {

//     let salida = {
//         nombre: 'Lucas',
//         edad: 31,
//         url: req.url
//     }

//     res.send(salida); //parsea automatico a json


//     // res.send('Hola mundo');
// });
// app.get('/data', function (req, res) {

//     res.send('Hola Data');
// });