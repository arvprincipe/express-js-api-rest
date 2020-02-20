'use strict'

const express = require('express');
const app = express();

const PORT = 300;

const indexRoutes = require('./routes/index.routes');

app.use('/api', indexRoutes)


app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
})