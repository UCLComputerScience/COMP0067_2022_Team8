const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const db = require('./models');

db.Videos.destroy({
    where: {},
    truncate: true
})

// Routers
const videoRouter = require('./routes/Videos');
app.use("/videos", videoRouter);

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 3001, () => {
        console.log("Server running on port 3001...");
    });
});