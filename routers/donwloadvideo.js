const express = require('express');
const ytdl = require('ytdl-core');

const routerDonwloadVideo = express.Router();
routerDonwloadVideo.use(express.json());

routerDonwloadVideo.get('/', async (req, res) => {

    try {

        var url = req.query.url;

        if (!ytdl.validateURL(url)) {
            return res.sendStatus(400);
        }

        // Información basica del video
        let title = 'video';
        await ytdl.getBasicInfo(url, {
            format: 'mp4'
        }, (err, info) => {
            title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
        });

        ytdl(url, {
            format: 'mp4'
        }).pipe(res);

    } catch (err) {
        console.error(err);
    }
});


module.exports = routerDonwloadVideo;








