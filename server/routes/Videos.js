const express = require('express');
const router = express.Router();
const { Videos } = require("../models");
const fs = require('fs');
const csv = require('csv');

let input = fs.createReadStream('./csv/videos.csv');
let parser = csv.parse({
    delimiter: ',',
    columns: true
})

var transform = csv.transform(function (row) {
    var resultObj = {
        title: row['title'],
        description: row['description'],
        url: row['url']
    }
    Videos.create(resultObj)
        .then(function () {
            console.log('Record created');
        })
        .catch(function (err) {
            console.log('Error encountered: ' + err);
        })
})

input.pipe(parser).pipe(transform)

router.get("/", async (req, res) => {
    const listOfVideos = await Videos.findAll();
    res.json(listOfVideos);
});

router.get("/mostrecent", async (req, res) => {
    const listOfRecentVideos = await Videos.findAll({ order: [["id", 'DESC']], limit: 3 });
    res.json(listOfRecentVideos);
});

// router.post("/", async (req, res) => {
//     const video = req.body;
//     await Videos.create(video);
//     res.json(video);
// })

module.exports = router;
