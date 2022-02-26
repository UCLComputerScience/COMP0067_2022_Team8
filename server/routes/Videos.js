const express = require('express');
const router = express.Router();
const { Videos } = require("../models");

router.get("/", async (req, res) => {
    const listOfVideos = await Videos.findAll();
    res.json(listOfVideos);
});

router.post("/", async (req, res) => {
    const video = req.body;
    await Videos.create(video);
    res.json(video);
})

module.exports = router;
