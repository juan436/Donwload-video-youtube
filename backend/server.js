const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');


app.set('view engine', 'pug');
app.set('views', __dirname + '/views/pages');


// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

//router
const routerDonwloadVideo = require('./routers/donwloadvideo.js')
app.use('/api/DonwloadVideo',routerDonwloadVideo)

app.get('/', (req, res) => {
    res.render('youtubetoMp4')
});

app.get('/youtubetoMp3', (req, res) => {
    res.render('youtubetoMp3')
});

   
app.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto ${port}`);
})




