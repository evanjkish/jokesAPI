const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json(), express.urlencoded({ extended: true }))

require('./config/mongoose.config')

const routesFunction = require("./routes/joke.routes");
routesFunction(app);

app.listen(PORT, () => console.log(`server up on port:${PORT}`))