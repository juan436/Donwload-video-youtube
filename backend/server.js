const express = require('express');
const app = express();
const port = 3000;

//router
const routerDonwloadVideo = require('./routers/donwloadvideo.js')
app.use('/api/DonwloadVideo',routerDonwloadVideo)

//Prueba de funcionamiento
app.get('/', (req, res)=>{
    res.send('Prueba de funcionamiento de backend 🖥️')
});

   
app.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto ${port}`);
})




