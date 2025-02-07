const express = require('express');
const cors = require('cors')
const app = express();
require('./configurations/config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
