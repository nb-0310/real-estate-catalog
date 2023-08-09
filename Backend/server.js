const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

require('./Config/db');
const apiRoutes = require('./Routes/test');

app.use('/test', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});