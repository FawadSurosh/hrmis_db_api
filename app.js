const express = require('express');
const app = express();

const personalInfoRouts = require('./api/routes/PersonalInfo');

app.use('/personalInfo', personalInfoRouts);

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works!'
//     });
// });

module.exports = app;