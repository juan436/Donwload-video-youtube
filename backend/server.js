const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'pug');
app.set('views', __dirname + '/views/pages');


// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//router
const routerDonwloadVideo = require('./routers/donwloadvideo.js')
app.use('/api/DonwloadVideo',routerDonwloadVideo)

app.get('/', (req, res) => {
    res.render('youtubetoMp4')
});

   
app.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto ${port}`);
})




