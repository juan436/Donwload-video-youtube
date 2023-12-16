const express = require('express');
const ytdl = require('ytdl-core');

const routerDonwloadVideo = express.Router();
routerDonwloadVideo.use(express.json());

routerDonwloadVideo.post('/formatomp4', async (req, res) => {

    try {
        var url = req.body.url;
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

        res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);
        ytdl(url, {
            format: 'mp4'
        }).pipe(res);

    } catch (err) {
        console.error(err);
    }
});


routerDonwloadVideo.post('/formatomp3', async (req, res) => {

    try {
        var url = req.body.url;
        if (!ytdl.validateURL(url)) {
            return res.sendStatus(400);
        }

        // Información basica del video
        let title = 'audio';
        await ytdl.getBasicInfo(url, {
            format: 'mp3'
        }, (err, info) => {
            title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
        });

        res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
		ytdl(url, {
			format: 'mp3',
			filter: 'audioonly',
		}).pipe(res);

    } catch (err) {
        console.error(err);
    }
});

module.exports = routerDonwloadVideo;








